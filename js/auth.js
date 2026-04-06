// ============================================
// SISTEMA CENTRAL DE AUTENTICACIÓN Y USUARIO
// ============================================

const STORAGE_USERS = 'aprobadoya_usuarios';
const STORAGE_TESTS = 'aprobadoya_tests_usuario';
const CURRENT_USER_KEY = 'aprobadoya_user_actual';
const USER_UPDATED_EVENT = 'userUpdated';
const USER_UPDATE_FLAG = 'user_update_flag';

// Disparar evento de actualización
function dispatchUserUpdatedEvent() {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(USER_UPDATED_EVENT));
        localStorage.setItem(USER_UPDATE_FLAG, Date.now().toString());
    }
}

// Obtener usuario actual
function getCurrentUser() {
    const users = JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]');
    const currentId = localStorage.getItem(CURRENT_USER_KEY);
    if (currentId) {
        const found = users.find(u => u.id === currentId);
        if (found) return found;
    }
    // ✅ NO devolver ningún usuario por defecto
    return null;
}

// Actualizar usuario
function updateUser(userId, updates) {
    const users = JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]');
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...updates };
        localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
        dispatchUserUpdatedEvent();
        return users[index];
    }
    return null;
}

// Actualizar avatar
function updateUserAvatar(avatar) {
    const currentUser = getCurrentUser();
    if (currentUser) {
        updateUser(currentUser.id, { avatar: avatar });
        return true;
    }
    return false;
}

// Actualizar nombre
function updateUserName(nuevoNombre) {
    const currentUser = getCurrentUser();
    if (currentUser && nuevoNombre && nuevoNombre.trim().length > 0) {
        updateUser(currentUser.id, { nombre: nuevoNombre.trim() });
        return true;
    }
    return false;
}

// Cerrar sesión
function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    dispatchUserUpdatedEvent();
    setTimeout(() => {
        window.location.reload();
    }, 100);
}

// Calcular estadísticas de un usuario basado en sus tests
function calcularEstadisticasUsuario(userId) {
    const testsKey = `${STORAGE_TESTS}_${userId}`;
    const tests = JSON.parse(localStorage.getItem(testsKey) || '[]');

    if (tests.length === 0) {
        return {
            totalTests: 0,
            totalAciertos: 0,
            totalPreguntas: 0,
            mejorResultado: 0,
            mediaAciertos: 0,
            tasaAprobados: 0
        };
    }

    let totalAciertos = 0;
    let totalPreguntas = 0;
    let mejorPorcentaje = 0;
    let aprobadosCount = 0;

    for (const test of tests) {
        totalAciertos += test.aciertos;
        totalPreguntas += test.total;
        const porcentaje = Math.round((test.aciertos / test.total) * 100);
        if (porcentaje > mejorPorcentaje) mejorPorcentaje = porcentaje;
        if (porcentaje >= 90) aprobadosCount++;
    }

    const mediaAciertos = totalPreguntas > 0 ? Math.round((totalAciertos / totalPreguntas) * 100) : 0;
    const tasaAprobados = tests.length > 0 ? Math.round((aprobadosCount / tests.length) * 100) : 0;

    return {
        totalTests: tests.length,
        totalAciertos,
        totalPreguntas,
        mejorResultado: mejorPorcentaje,
        mediaAciertos,
        tasaAprobados
    };
}

// Obtener ranking completo
function getRankingCompleto() {
    const users = JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]');
    const usersConStats = users.map(user => {
        const stats = calcularEstadisticasUsuario(user.id);
        return {
            ...user,
            ...stats
        };
    });
    return usersConStats.sort((a, b) => b.mediaAciertos - a.mediaAciertos);
}

// Renderizar zona de usuario en el header
function renderUserZone() {
    const userZone = document.getElementById('userZone');
    if (!userZone) return;
    
    const currentUser = getCurrentUser();
    if (currentUser) {
        const avatar = currentUser.avatar || "🚗";
        const nombreCorto = currentUser.nombre.split(' ')[0];
        userZone.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar" id="headerUserAvatar">${avatar}</div>
                <span class="user-name" id="headerUserName">${escapeHtml(nombreCorto)}</span>
                <a href="../perfil/index.html" class="btn-profile">Mi perfil</a>
                <button onclick="logoutUser()" class="btn-logout">Cerrar sesión</button>
            </div>
        `;
    } else {
        userZone.innerHTML = `<a href="../login.html" class="btn-login"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>`;
    }
}

// Función auxiliar para escapar HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ✅ INICIALIZACIÓN - SIN USUARIOS POR DEFECTO
function inicializarDatosGlobales() {
    // Solo crear datos si no existe el storage y si hay usuarios registrados
    // NO crear usuarios de demostración automáticamente
    
    // Si quieres mantener usuarios que ya se registraron, no los borres
    // Esta función ya no crea usuarios por defecto
}

// Configurar listeners
function setupGlobalListeners() {
    if (typeof window !== 'undefined') {
        window.addEventListener(USER_UPDATED_EVENT, function() {
            renderUserZone();
            if (typeof window.refreshRanking === 'function') {
                window.refreshRanking();
            }
            if (typeof window.refreshProfileData === 'function') {
                window.refreshProfileData();
            }
            if (typeof window.updateAllUserData === 'function') {
                window.updateAllUserData();
            }
        });
        
        window.addEventListener('storage', function(e) {
            if (e.key === STORAGE_USERS || e.key === USER_UPDATE_FLAG) {
                renderUserZone();
                if (typeof window.refreshRanking === 'function') {
                    window.refreshRanking();
                }
                if (typeof window.refreshProfileData === 'function') {
                    window.refreshProfileData();
                }
                if (typeof window.updateAllUserData === 'function') {
                    window.updateAllUserData();
                }
            }
        });
    }
}

// ✅ LIMPIAR USUARIOS POR DEFECTO (OPCIONAL)
// Si ya tienes usuarios creados y quieres borrarlos, ejecuta esto:
function limpiarUsuariosPorDefecto() {
    const users = JSON.parse(localStorage.getItem(STORAGE_USERS) || '[]');
    // Filtrar para eliminar usuarios de demostración como "Ana García"
    const usuariosFiltrados = users.filter(u => 
        u.email !== 'ana@email.com' && 
        u.email !== 'demo@aprobadoya.com' &&
        u.id !== 'user_ana' &&
        u.id !== 'user_demo'
    );
    localStorage.setItem(STORAGE_USERS, JSON.stringify(usuariosFiltrados));
    
    // Si el usuario actual es uno de los eliminados, cerrar sesión
    const currentId = localStorage.getItem(CURRENT_USER_KEY);
    if (currentId && !usuariosFiltrados.find(u => u.id === currentId)) {
        localStorage.removeItem(CURRENT_USER_KEY);
    }
}

// Exponer funciones globales
window.getCurrentUser = getCurrentUser;
window.updateUserAvatar = updateUserAvatar;
window.updateUserName = updateUserName;
window.logoutUser = logoutUser;
window.getRankingCompleto = getRankingCompleto;
window.calcularEstadisticasUsuario = calcularEstadisticasUsuario;
window.renderUserZone = renderUserZone;
window.limpiarUsuariosPorDefecto = limpiarUsuariosPorDefecto;

// Inicializar (sin crear usuarios por defecto)
inicializarDatosGlobales();
setupGlobalListeners();

// ✅ OPCIONAL: Ejecuta esto UNA VEZ para limpiar usuarios existentes
// Descomenta la siguiente línea, recarga la página, y luego vuelve a comentarla
// limpiarUsuariosPorDefecto();