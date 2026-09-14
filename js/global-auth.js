// ============================================
// SISTEMA GLOBAL DE AUTENTICACIÓN
// Todas las páginas usan esto
// ============================================

import { auth, onAuthStateChanged, signOut, db, doc, getDoc, updateDoc } from './firebase-init.js';

// Constantes usadas en el listener de storage
const STORAGE_USER_UPDATE_FLAG = 'user_update_flag';

// Variable global del usuario actual
let currentUserGlobal = null;
let userDataGlobal = null;
let callbacks = [];

// ============================================
// GETTERS
// ============================================

export function getCurrentUser() {
    return currentUserGlobal;
}

export function getUserData() {
    return userDataGlobal;
}

// ============================================
// CERRAR SESIÓN
// ============================================

export async function logoutUser() {
    await signOut(auth);
    window.location.href = '../index.html';
}

// ============================================
// LECTURA DE DATOS DEL USUARIO
// ============================================

async function leerDatosUsuario(user) {
    const userRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
        return null;
    }

    const data = userDoc.data();

    return {
        uid: user.uid,
        email: user.email,
        nombre: data.nombre || user.displayName || user.email.split('@')[0],
        avatar: data.avatar || "🚗",

        // PLAN
        plan: data.plan || 'free',
        premiumActivo: data.premiumActivo === true,
        premiumDesde: data.premiumDesde || null,
        premiumHasta: data.premiumHasta || null,

        // EXTRA
        displayName: user.displayName || null,
        photoURL: user.photoURL || null
    };
}

// ============================================
// ACTUALIZAR AVATAR
// ============================================

export async function updateGlobalAvatar(avatar) {
    const user = currentUserGlobal;
    if (!user) return false;

    try {
        const userRef = doc(db, "usuarios", user.uid);
        await updateDoc(userRef, { avatar: avatar });

        if (userDataGlobal) {
            userDataGlobal.avatar = avatar;
        }

        renderUserZone();
        dispatchUserUpdatedEvent();

        return true;
    } catch (error) {
        console.error("Error al actualizar avatar:", error);
        return false;
    }
}

// ============================================
// EVENTOS
// ============================================

function dispatchUserUpdatedEvent() {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('userUpdated'));
        localStorage.setItem(STORAGE_USER_UPDATE_FLAG, Date.now().toString());
    }
}

// ============================================
// LISTENER DE AUTENTICACIÓN
// ============================================

export function initAuthListener(callback) {
    if (callback) callbacks.push(callback);

    onAuthStateChanged(auth, async (user) => {
        currentUserGlobal = user;

        if (user) {
            try {
                userDataGlobal = await leerDatosUsuario(user);
            } catch (error) {
                console.error("Error leyendo datos del usuario:", error);
                userDataGlobal = null;
            }
        } else {
            userDataGlobal = null;
        }

        callbacks.forEach(cb => cb(currentUserGlobal, userDataGlobal));
        renderUserZone();
    });
}

// ============================================
// RENDER DEL HEADER
// ============================================

export function renderUserZone() {
    const userZone = document.getElementById('userZone');
    if (!userZone) return;

    if (currentUserGlobal && userDataGlobal) {
        const nombreMostrar = (userDataGlobal.nombre || 'Usuario').split(' ')[0];
        const avatar = userDataGlobal.avatar || "🚗";
        const esPremium = userDataGlobal.premiumActivo === true;

        userZone.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar" id="headerUserAvatar">${avatar}</div>
                <span class="user-name" id="headerUserName">${escapeHtml(nombreMostrar)}</span>
                ${esPremium ? '<span class="badge-premium">⭐ Premium</span>' : ''}
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

export function updateHeaderAvatar(avatar) {
    const avatarElement = document.getElementById('headerUserAvatar');
    if (avatarElement) {
        avatarElement.textContent = avatar;
    }
}

export function forceUpdateHeader() {
    renderUserZone();
}

// ============================================
// UTILIDADES
// ============================================

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================

initAuthListener();

// Escuchar cambios entre pestañas
window.addEventListener('storage', function(e) {
    if (e.key === STORAGE_USER_UPDATE_FLAG) {
        renderUserZone();
    }
});

// Exponer funciones globalmente (para uso desde onclick en HTML)
window.getCurrentUser = getCurrentUser;
window.getUserData = getUserData;
window.logoutUser = logoutUser;
window.forceUpdateHeader = forceUpdateHeader;
window.updateGlobalAvatar = updateGlobalAvatar;