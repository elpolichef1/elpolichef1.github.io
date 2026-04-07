// ============================================
// SISTEMA GLOBAL DE AUTENTICACIÓN
// Todas las páginas usan esto
// ============================================

import { auth, onAuthStateChanged, signOut, db, doc, getDoc } from './firebase-init.js';

// Variable global del usuario actual
let currentUserGlobal = null;
let userDataGlobal = null;
let callbacks = [];

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

// Función para obtener el avatar del usuario desde Firestore
async function obtenerAvatarUsuario(user) {
    if (!user) return "🚗";
    
    try {
        const userRef = doc(db, "usuarios", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            const data = userDoc.data();
            return data.avatar || "🚗";
        }
    } catch (error) {
        console.error("Error al obtener avatar:", error);
    }
    return "🚗";
}

// Función para obtener nombre del usuario desde Firestore
async function obtenerNombreUsuario(user) {
    if (!user) return null;
    
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

// Función para actualizar el avatar en Firestore
export async function updateGlobalAvatar(avatar) {
    const user = currentUserGlobal;
    if (!user) return false;
    
    try {
        const userRef = doc(db, "usuarios", user.uid);
        await updateDoc(userRef, { avatar: avatar });
        
        // Actualizar datos locales
        if (userDataGlobal) {
            userDataGlobal.avatar = avatar;
        }
        
        // Forzar actualización del header
        renderUserZone();
        
        // Disparar evento para que otras páginas se actualicen
        dispatchUserUpdatedEvent();
        
        return true;
    } catch (error) {
        console.error("Error al actualizar avatar:", error);
        return false;
    }
}

// Disparar evento de actualización
function dispatchUserUpdatedEvent() {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('userUpdated'));
        localStorage.setItem('user_update_flag', Date.now().toString());
    }
}

// Inicializar listener de autenticación
export function initAuthListener(callback) {
    if (callback) callbacks.push(callback);
    
    onAuthStateChanged(auth, async (user) => {
        currentUserGlobal = user;
        
        if (user) {
            const nombre = await obtenerNombreUsuario(user);
            const avatar = await obtenerAvatarUsuario(user);
            userDataGlobal = {
                uid: user.uid,
                email: user.email,
                nombre: nombre,
                avatar: avatar,
                displayName: user.displayName,
                photoURL: user.photoURL
            };
        } else {
            userDataGlobal = null;
        }
        
        // Ejecutar todos los callbacks registrados
        callbacks.forEach(cb => cb(currentUserGlobal, userDataGlobal));
        
        // Actualizar header
        renderUserZone();
    });
}

// Función para actualizar el header de cualquier página
export function renderUserZone() {
    const userZone = document.getElementById('userZone');
    if (!userZone) return;
    
    if (currentUserGlobal && userDataGlobal) {
        const nombreMostrar = userDataGlobal.nombre?.split(' ')[0] || currentUserGlobal.email?.split('@')[0] || 'Usuario';
        const avatar = userDataGlobal.avatar || "🚗";
        
        userZone.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar" id="headerUserAvatar">${avatar}</div>
                <span class="user-name" id="headerUserName">${escapeHtml(nombreMostrar)}</span>
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

// Función para actualizar SOLO el avatar en el header (sin recargar toda la página)
export function updateHeaderAvatar(avatar) {
    const avatarElement = document.getElementById('headerUserAvatar');
    if (avatarElement) {
        avatarElement.textContent = avatar;
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

// Función para forzar actualización del header
export function forceUpdateHeader() {
    renderUserZone();
}

// Inicializar el listener automáticamente
initAuthListener();

// Escuchar cambios en localStorage para actualizar entre pestañas
window.addEventListener('storage', function(e) {
    if (e.key === 'user_update_flag' || e.key === STORAGE_USERS) {
        renderUserZone();
    }
});

// Exponer funciones globalmente
window.getCurrentUser = getCurrentUser;
window.logoutUser = logoutUser;
window.forceUpdateHeader = forceUpdateHeader;
window.updateGlobalAvatar = updateGlobalAvatar;