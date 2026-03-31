// ============================================
// SISTEMA DE AUTENTICACIÓN Y USUARIOS
// ============================================

const USERS_KEY = 'dgt_users';
const CURRENT_USER_KEY = 'dgt_current_user';

// Avatar por defecto (emoji de coche)
const DEFAULT_AVATAR = "🚗";

// Usuario demo inicial
const DEMO_USERS = [
    {
        id: 1,
        nombre: "Carlos Rodríguez",
        email: "carlos@email.com",
        password: "carlos123",
        avatar: "🏎️",
        fechaRegistro: "2025-01-15",
        estadisticas: {
            testsRealizados: 45,
            totalAciertos: 1080,
            totalPreguntas: 1350,
            mejorResultado: 96,
            temasCompletados: 18,
            ultimoAcceso: new Date().toISOString()
        }
    },
    {
        id: 2,
        nombre: "María García",
        email: "maria@email.com",
        password: "maria123",
        avatar: "🚗",
        fechaRegistro: "2025-01-20",
        estadisticas: {
            testsRealizados: 52,
            totalAciertos: 1240,
            totalPreguntas: 1560,
            mejorResultado: 98,
            temasCompletados: 20,
            ultimoAcceso: new Date().toISOString()
        }
    },
    {
        id: 3,
        nombre: "Javier López",
        email: "javier@email.com",
        password: "javier123",
        avatar: "🚘",
        fechaRegistro: "2025-02-01",
        estadisticas: {
            testsRealizados: 38,
            totalAciertos: 912,
            totalPreguntas: 1140,
            mejorResultado: 92,
            temasCompletados: 15,
            ultimoAcceso: new Date().toISOString()
        }
    },
    {
        id: 4,
        nombre: "Laura Martínez",
        email: "laura@email.com",
        password: "laura123",
        avatar: "🛞",
        fechaRegistro: "2025-02-10",
        estadisticas: {
            testsRealizados: 41,
            totalAciertos: 1025,
            totalPreguntas: 1230,
            mejorResultado: 94,
            temasCompletados: 17,
            ultimoAcceso: new Date().toISOString()
        }
    },
    {
        id: 5,
        nombre: "David Sánchez",
        email: "david@email.com",
        password: "david123",
        avatar: "🚙",
        fechaRegistro: "2025-02-15",
        estadisticas: {
            testsRealizados: 35,
            totalAciertos: 840,
            totalPreguntas: 1050,
            mejorResultado: 88,
            temasCompletados: 14,
            ultimoAcceso: new Date().toISOString()
        }
    },
    {
        id: 6,
        nombre: "Ana Fernández",
        email: "ana@email.com",
        password: "ana123",
        avatar: "🏎️",
        fechaRegistro: "2025-02-20",
        estadisticas: {
            testsRealizados: 58,
            totalAciertos: 1450,
            totalPreguntas: 1740,
            mejorResultado: 100,
            temasCompletados: 20,
            ultimoAcceso: new Date().toISOString()
        }
    },
    {
        id: 7,
        nombre: "Pablo Ruiz",
        email: "pablo@email.com",
        password: "pablo123",
        avatar: "🚦",
        fechaRegistro: "2025-03-01",
        estadisticas: {
            testsRealizados: 28,
            totalAciertos: 672,
            totalPreguntas: 840,
            mejorResultado: 85,
            temasCompletados: 12,
            ultimoAcceso: new Date().toISOString()
        }
    },
    {
        id: 8,
        nombre: "Elena Torres",
        email: "elena@email.com",
        password: "elena123",
        avatar: "🛣️",
        fechaRegistro: "2025-03-05",
        estadisticas: {
            testsRealizados: 33,
            totalAciertos: 825,
            totalPreguntas: 990,
            mejorResultado: 90,
            temasCompletados: 16,
            ultimoAcceso: new Date().toISOString()
        }
    }
];

// Inicializar usuarios
function initUsers() {
    const existingUsers = localStorage.getItem(USERS_KEY);
    if (!existingUsers) {
        localStorage.setItem(USERS_KEY, JSON.stringify(DEMO_USERS));
    }
}

// Registrar nuevo usuario
function registerUser(nombre, email, password, avatar = DEFAULT_AVATAR) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    if (users.some(u => u.email === email)) {
        return { success: false, message: 'El email ya está registrado' };
    }
    
    const newUser = {
        id: Date.now(),
        nombre: nombre,
        email: email,
        password: password,
        avatar: avatar,
        fechaRegistro: new Date().toISOString().split('T')[0],
        estadisticas: {
            testsRealizados: 0,
            totalAciertos: 0,
            totalPreguntas: 0,
            mejorResultado: 0,
            temasCompletados: 0,
            ultimoAcceso: new Date().toISOString()
        }
    };
    
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    return { success: true, user: newUser };
}

// Login de usuario
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        user.estadisticas.ultimoAcceso = new Date().toISOString();
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        return { success: true, user: user };
    }
    
    return { success: false, message: 'Email o contraseña incorrectos' };
}

// Obtener usuario actual
function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
}

// Obtener avatar del usuario actual
function getUserAvatar() {
    const user = getCurrentUser();
    return user ? (user.avatar || DEFAULT_AVATAR) : DEFAULT_AVATAR;
}

// Actualizar avatar del usuario
function updateUserAvatar(avatar) {
    const user = getCurrentUser();
    if (user) {
        const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        const userIndex = users.findIndex(u => u.id === user.id);
        if (userIndex !== -1) {
            users[userIndex].avatar = avatar;
            localStorage.setItem(USERS_KEY, JSON.stringify(users));
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]));
            return true;
        }
    }
    return false;
}

// Cerrar sesión
function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = 'login.html';
}

// Actualizar estadísticas
function updateUserStats(userId, aciertos, totalPreguntas) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex !== -1) {
        const user = users[userIndex];
        user.estadisticas.testsRealizados++;
        user.estadisticas.totalAciertos += aciertos;
        user.estadisticas.totalPreguntas += totalPreguntas;
        
        const porcentaje = Math.round((aciertos / totalPreguntas) * 100);
        if (porcentaje > user.estadisticas.mejorResultado) {
            user.estadisticas.mejorResultado = porcentaje;
        }
        
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        
        const currentUser = getCurrentUser();
        if (currentUser && currentUser.id === userId) {
            localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        }
        
        return true;
    }
    return false;
}

// Obtener ranking
function getRanking() {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    const ranking = users.map(user => {
        const porcentaje = user.estadisticas.totalPreguntas > 0 
            ? Math.round((user.estadisticas.totalAciertos / user.estadisticas.totalPreguntas) * 100) 
            : 0;
        
        return {
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            avatar: user.avatar || DEFAULT_AVATAR,
            testsRealizados: user.estadisticas.testsRealizados,
            mediaAciertos: porcentaje,
            mejorResultado: user.estadisticas.mejorResultado,
            temasCompletados: user.estadisticas.temasCompletados,
            fechaRegistro: user.fechaRegistro
        };
    });
    
    ranking.sort((a, b) => b.mediaAciertos - a.mediaAciertos);
    return ranking;
}

// Obtener estadísticas del usuario actual
function getUserStats() {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;
    
    const ranking = getRanking();
    const position = ranking.findIndex(u => u.id === currentUser.id) + 1;
    
    return {
        ...currentUser.estadisticas,
        nombre: currentUser.nombre,
        email: currentUser.email,
        avatar: currentUser.avatar || DEFAULT_AVATAR,
        position: position,
        totalUsers: ranking.length
    };
}
// Guardar resultado de test con userId
function guardarResultadoTest(aciertos, total, tipo, tema = null) {
    const currentUser = getCurrentUser();
    if (!currentUser) return false;
    
    const tests = JSON.parse(localStorage.getItem('dgt_tests') || '[]');
    tests.push({
        userId: currentUser.id,
        aciertos: aciertos,
        total: total,
        tipo: tipo,
        tema: tema,
        fecha: new Date().toISOString()
    });
    localStorage.setItem('dgt_tests', JSON.stringify(tests));
    
    // Actualizar estadísticas del usuario
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex].estadisticas.testsRealizados++;
        users[userIndex].estadisticas.totalAciertos += aciertos;
        users[userIndex].estadisticas.totalPreguntas += total;
        const porcentaje = Math.round((aciertos / total) * 100);
        if (porcentaje > users[userIndex].estadisticas.mejorResultado) {
            users[userIndex].estadisticas.mejorResultado = porcentaje;
        }
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]));
    }
    
    return true;
}
// Inicializar
initUsers();