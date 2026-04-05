// ==================== SISTEMA DE AUTENTICACIÓN ====================

// Registro de usuario
function registerUser(nombre, email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Verificar si el email ya existe
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'El email ya está registrado' };
    }
    
    const newUser = {
        id: Date.now(),
        nombre: nombre,
        email: email,
        password: password,
        avatar: "🚗",
        fechaRegistro: new Date().toLocaleDateString(),
        tests: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true };
}

// Login de usuario
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        return { success: true };
    }
    
    return { success: false };
}

// ==================== FUNCIONES PARA GOOGLE ====================

// Verificar si el usuario actual es de Google
function esUsuarioGoogle() {
    const user = localStorage.getItem('usuario_apruebaloya');
    if (!user) return false;
    try {
        const userData = JSON.parse(user);
        return userData.provider === 'google';
    } catch(e) {
        return false;
    }
}

// Obtener usuario actual (compatible con Google y sistema normal)
function getCurrentUser() {
    // Primero revisar si hay usuario de Google
    const googleUser = localStorage.getItem('usuario_apruebaloya');
    if (googleUser) {
        try {
            const userData = JSON.parse(googleUser);
            if (userData.autenticado) {
                return {
                    nombre: userData.nombre,
                    email: userData.email,
                    avatar: userData.foto ? '👤' : (localStorage.getItem('userAvatar') || "🚗"),
                    foto: userData.foto,
                    fechaRegistro: localStorage.getItem('userFechaRegistro') || new Date().toLocaleDateString(),
                    provider: 'google'
                };
            }
        } catch(e) {}
    }
    
    // Si no hay usuario de Google, usar tu sistema actual
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        try {
            return JSON.parse(currentUser);
        } catch(e) {}
    }
    return null;
}

// Función para cerrar sesión (compatible con Google y sistema normal)
function logoutUser() {
    // Limpiar datos de Google
    localStorage.removeItem('usuario_apruebaloya');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('userFechaRegistro');
    
    // Limpiar datos del sistema normal
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    
    // Redirigir al login
    window.location.href = 'login.html';
}

// Verificar autenticación (protege páginas)
function requireAuth() {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Actualizar avatar del usuario
function updateUserAvatar(avatar) {
    // Para usuario de Google
    const googleUser = localStorage.getItem('usuario_apruebaloya');
    if (googleUser) {
        try {
            const userData = JSON.parse(googleUser);
            userData.avatar = avatar;
            localStorage.setItem('usuario_apruebaloya', JSON.stringify(userData));
        } catch(e) {}
    }
    
    // Para usuario normal
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        try {
            const user = JSON.parse(currentUser);
            user.avatar = avatar;
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Actualizar en el array de users
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const index = users.findIndex(u => u.email === user.email);
            if (index !== -1) {
                users[index].avatar = avatar;
                localStorage.setItem('users', JSON.stringify(users));
            }
        } catch(e) {}
    }
    
    localStorage.setItem('userAvatar', avatar);
}

// ==================== ESTADÍSTICAS ====================

function obtenerEstadisticasCompletas() {
    const tests = JSON.parse(localStorage.getItem('testResults') || '[]');
    const totalTests = tests.length;
    const testsAprobados = tests.filter(t => (t.aciertos/t.total)*100 >= 90).length;
    const totalAciertos = tests.reduce((sum, t) => sum + t.aciertos, 0);
    const mejorResultado = tests.length > 0 ? Math.max(...tests.map(t => Math.round((t.aciertos/t.total)*100))) : 0;
    
    const testsPorTipo = {
        'test-rapido': tests.filter(t => t.tipo === 'test-rapido').length,
        'test-completo': tests.filter(t => t.tipo === 'test-completo').length,
        'test-por-temas': tests.filter(t => t.tipo === 'test-por-temas').length,
        'test-examen': tests.filter(t => t.tipo === 'test-examen').length
    };
    
    const testsRecientes = tests.slice(-10).reverse();
    const tasaAprobados = totalTests > 0 ? Math.round((testsAprobados / totalTests) * 100) : 0;
    
    return {
        totalTests,
        testsAprobados,
        totalAciertos,
        mejorResultado,
        testsPorTipo,
        testsRecientes,
        tasaAprobados
    };
}

// Guardar resultado de un test
function guardarResultadoTest(tipo, tema, aciertos, total, fecha) {
    const tests = JSON.parse(localStorage.getItem('testResults') || '[]');
    tests.push({
        tipo: tipo,
        tema: tema,
        aciertos: aciertos,
        total: total,
        fecha: fecha || new Date().toISOString()
    });
    localStorage.setItem('testResults', JSON.stringify(tests));
}

// ==================== UTILIDADES ====================

// Renderizar zona de usuario en el header (llamar en cada página)
function renderUserZone() {
    const user = getCurrentUser();
    const userZone = document.getElementById('userZone');
    
    if (!userZone) return;
    
    if (user) {
        const avatar = user.avatar || (user.foto ? '👤' : "🚗");
        userZone.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar">${avatar}</div>
                <span class="user-name">${user.nombre}</span>
                <a href="perfil/index.html" class="btn-profile">Mi perfil</a>
                <button onclick="logoutUser()" class="btn-logout">Cerrar sesión</button>
            </div>
        `;
    } else {
        userZone.innerHTML = `<a href="login.html" class="btn-login"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>`;
    }
}