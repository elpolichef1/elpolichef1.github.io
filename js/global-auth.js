// ============================================
// SISTEMA GLOBAL DE AUTENTICACIÓN
// Todas las páginas usan esto
// ============================================

import { auth, onAuthStateChanged, signOut, db, doc, getDoc } from './firebase-init.js';

// Variable global del usuario actual
let currentUserGlobal = null;
let userDataGlobal = null;

// Función para obtener el usuario actual (síncrona)
export function getCurrentUser() {
    return currentUserGlobal;
}

// Función para obtener los datos completos del usuario
export function getUserData() {
    return userDataGlobal;
}

// Función para cerrar sesión
export async function logoutUser() {
    await signOut(auth);
    window.location.href = '../index.html';
}

// Función para obtener nombre del usuario desde Firestore
async function obtenerNombreUsuario(user) {
    try {
        const userRef = doc(db, "usuarios", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            const data = userDoc.data();
            return data.nombre || user.displayName || user.email.split('@')[0];
        }
    } catch (error) {
        console.error("Error al obtener nombre:", error);
    }
    return user.displayName || user.email.split('@')[0];
}

// Inicializar listener de autenticación
export function initAuthListener(callback) {
    onAuthStateChanged(auth, async (user) => {
        currentUserGlobal = user;
        
        if (user) {
            const nombre = await obtenerNombreUsuario(user);
            userDataGlobal = {
                uid: user.uid,
                email: user.email,
                nombre: nombre,
                displayName: user.displayName,
                photoURL: user.photoURL
            };
        } else {
            userDataGlobal = null;
        }
        
        if (callback) callback(currentUserGlobal, userDataGlobal);
    });
}

// Función para actualizar el header de cualquier página
export function renderUserZone() {
    const userZone = document.getElementById('userZone');
    if (!userZone) return;
    
    if (currentUserGlobal) {
        const nombreMostrar = userDataGlobal?.nombre?.split(' ')[0] || currentUserGlobal.email?.split('@')[0] || 'Usuario';
        userZone.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar">🚗</div>
                <span class="user-name">${escapeHtml(nombreMostrar)}</span>
                <a href="../perfil/index.html" class="btn-profile">Mi perfil</a>
                <button id="globalLogoutBtn" class="btn-logout">Cerrar sesión</button>
            </div>
        `;
        const logoutBtn = document.getElementById('globalLogoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => logoutUser());
        }
    } else {
        userZone.innerHTML = `<a href="../login.html" class="btn-login"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>`;
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Inicializar el listener automáticamente
initAuthListener(() => {
    renderUserZone();
});

// Exponer funciones globalmente para que funcionen en cualquier script
window.getCurrentUser = getCurrentUser;
window.logoutUser = logoutUser;