// ============================================
// SISTEMA DE AUTENTICACIÓN Y ESTADÍSTICAS
// ============================================

const USERS_KEY = 'aprobadoya_users';
const CURRENT_USER_KEY = 'aprobadoya_current_user';
const TESTS_KEY = 'aprobadoya_tests';

// Usuarios de demo
const DEMO_USERS = [
    {
        id: 1,
        nombre: "Carlos Rodríguez",
        email: "carlos@email.com",
        password: "carlos123",
        avatar: "🚗",
        fechaRegistro: "2025-01-15",
        estadisticas: {
            testsRealizados: 0,
            totalAciertos: 0,
            totalPreguntas: 0,
            mejorResultado: 0,
            temasCompletados: 0
        }
    },
    {
        id: 2,
        nombre: "Ana Fernández",
        email: "ana@email.com",
        password: "ana123",
        avatar: "🏎️",
        fechaRegistro: "2025-02-20",
        estadisticas: {
            testsRealizados: 0,
            totalAciertos: 0,
            totalPreguntas: 0,
            mejorResultado: 0,
            temasCompletados: 0
        }
    }
];

function initUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
        localStorage.setItem(USERS_KEY, JSON.stringify(DEMO_USERS));
    }
    if (!localStorage.getItem(TESTS_KEY)) {
        localStorage.setItem(TESTS_KEY, JSON.stringify([]));
    }
}

function registerUser(nombre, email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    if (users.some(u => u.email === email)) {
        return { success: false, message: 'El email ya está registrado' };
    }
    
    const newUser = {
        id: Date.now(),
        nombre: nombre,
        email: email,
        password: password,
        avatar: "🚗",
        fechaRegistro: new Date().toISOString().split('T')[0],
        estadisticas: {
            testsRealizados: 0,
            totalAciertos: 0,
            totalPreguntas: 0,
            mejorResultado: 0,
            temasCompletados: 0
        }
    };
    
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, user: newUser };
}

function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        console.log("✅ Usuario logueado:", user.nombre);
        return { success: true, user: user };
    }
    return { success: false };
}

function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    const user = userJson ? JSON.parse(userJson) : null;
    console.log("👤 Usuario actual:", user?.nombre || "No logueado");
    return user;
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'index.html';
}

function updateUserAvatar(avatar) {
    const user = getCurrentUser();
    if (user) {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index].avatar = avatar;
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[index]));
            return true;
        }
    }
    return false;
}

// ==================== GUARDAR RESULTADOS DE TESTS ====================

function guardarResultadoTest(aciertos, total, tipo, tema = null, nivel = null, testId = null) {
    const user = getCurrentUser();
    if (!user) {
        console.log("❌ No hay usuario logueado");
        return false;
    }
    
    const tests = JSON.parse(localStorage.getItem(TESTS_KEY) || '[]');
    const nuevoTest = {
        id: Date.now(),
        userId: user.id,
        aciertos: aciertos,
        total: total,
        tipo: tipo,
        tema: tema,
        nivel: nivel,
        testId: testId,
        fecha: new Date().toISOString()
    };
    tests.push(nuevoTest);
    localStorage.setItem(TESTS_KEY, JSON.stringify(tests));
    
    console.log(`✅ Test guardado para usuario ${user.nombre} (ID: ${user.id}):`, nuevoTest);
    
    actualizarEstadisticasUsuario(user.id);
    return true;
}

function actualizarEstadisticasUsuario(userId) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const tests = JSON.parse(localStorage.getItem(TESTS_KEY) || '[]');
    const testsUsuario = tests.filter(t => t.userId === userId);
    
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) return;
    
    let totalTests = testsUsuario.length;
    let totalAciertos = 0;
    let totalPreguntas = 0;
    let mejorResultado = 0;
    
    testsUsuario.forEach(test => {
        totalAciertos += test.aciertos;
        totalPreguntas += test.total;
        const porcentaje = Math.round((test.aciertos / test.total) * 100);
        if (porcentaje > mejorResultado) mejorResultado = porcentaje;
    });
    
    users[userIndex].estadisticas = {
        testsRealizados: totalTests,
        totalAciertos: totalAciertos,
        totalPreguntas: totalPreguntas,
        mejorResultado: mejorResultado,
        temasCompletados: 0
    };
    
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Actualizar usuario actual si es el mismo
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === userId) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]));
    }
    
    console.log("📊 Estadísticas actualizadas:", users[userIndex].estadisticas);
}

function obtenerTestsUsuario() {
    const user = getCurrentUser();
    if (!user) return [];
    const tests = JSON.parse(localStorage.getItem(TESTS_KEY) || '[]');
    return tests.filter(t => t.userId === user.id).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

function obtenerEstadisticasCompletas() {
    const user = getCurrentUser();
    if (!user) return null;
    
    const tests = obtenerTestsUsuario();
    const totalTests = tests.length;
    let totalAciertos = 0;
    let totalPreguntas = 0;
    let mejorResultado = 0;
    let testsAprobados = 0;
    
    const testsPorTipo = {
        'test-rapido': 0,
        'test-completo': 0,
        'test-por-temas': 0,
        'test-examen': 0
    };
    
    tests.forEach(test => {
        totalAciertos += test.aciertos;
        totalPreguntas += test.total;
        const porcentaje = Math.round((test.aciertos / test.total) * 100);
        if (porcentaje > mejorResultado) mejorResultado = porcentaje;
        if (porcentaje >= 90) testsAprobados++;
        
        if (testsPorTipo[test.tipo] !== undefined) {
            testsPorTipo[test.tipo]++;
        }
    });
    
    const porcentajeGlobal = totalPreguntas > 0 ? Math.round((totalAciertos / totalPreguntas) * 100) : 0;
    const tasaAprobados = totalTests > 0 ? Math.round((testsAprobados / totalTests) * 100) : 0;
    
    return {
        totalTests,
        totalAciertos,
        totalPreguntas,
        porcentajeGlobal,
        mejorResultado,
        testsAprobados,
        tasaAprobados,
        testsPorTipo,
        testsRecientes: tests.slice(-10).reverse()
    };
}

function crearGraficoCircular(elementoId, porcentaje) {
    const canvas = document.getElementById(elementoId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const ancho = canvas.width;
    const alto = canvas.height;
    const centroX = ancho / 2;
    const centroY = alto / 2;
    const radio = Math.min(ancho, alto) / 2 - 10;
    
    ctx.clearRect(0, 0, ancho, alto);
    
    ctx.beginPath();
    ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
    ctx.fillStyle = '#e2e8f0';
    ctx.fill();
    
    const anguloFinal = (porcentaje / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(centroX, centroY);
    ctx.arc(centroX, centroY, radio, -Math.PI / 2, -Math.PI / 2 + anguloFinal);
    ctx.lineTo(centroX, centroY);
    ctx.fillStyle = '#fbbf24';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centroX, centroY, radio * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    
    ctx.font = `bold ${radio * 0.4}px 'Inter', sans-serif`;
    ctx.fillStyle = '#1e293b';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${porcentaje}%`, centroX, centroY);
}

initUsers();