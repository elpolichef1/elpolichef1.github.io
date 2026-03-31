// Menú móvil
const menuBtn = document.getElementById('menuMobileBtn');
const nav = document.getElementById('navMenu');
if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('active'));
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (nav && nav.classList.contains('active')) nav.classList.remove('active');
        }
    });
});

// Datos de usuario demo
const userData = {
    nombre: "Usuario Demo",
    email: "usuario@demo.com",
    progreso: {
        temasCompletados: 0,
        testsRealizados: 0,
        aciertos: 0,
        media: 0
    }
};

// Guardar progreso en localStorage
function guardarProgreso(temaId, completado) {
    let progreso = localStorage.getItem('dgt_progreso');
    if (!progreso) {
        progreso = {};
    } else {
        progreso = JSON.parse(progreso);
    }
    progreso[temaId] = completado;
    localStorage.setItem('dgt_progreso', JSON.stringify(progreso));
}

function obtenerProgreso() {
    const progreso = localStorage.getItem('dgt_progreso');
    return progreso ? JSON.parse(progreso) : {};
}

// Calcular porcentaje de progreso
function calcularProgresoTotal() {
    const progreso = obtenerProgreso();
    const totalTemas = 20;
    const completados = Object.values(progreso).filter(v => v === true).length;
    return Math.round((completados / totalTemas) * 100);
}

// Actualizar estadísticas en dashboard
function actualizarStats() {
    const progreso = obtenerProgreso();
    const completados = Object.values(progreso).filter(v => v === true).length;
    
    const statsElements = document.querySelectorAll('.stat-number');
    if (statsElements.length >= 4) {
        statsElements[0].textContent = completados;
        statsElements[1].textContent = `${Math.round((completados / 20) * 100)}%`;
        // Los demás se actualizarán con datos de tests
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    actualizarStats();
    console.log('🚗 DGT Academy cargada correctamente');
});
// ===== CARRUSEL DE MENÚ CON FLECHAS AUTOMÁTICAS =====
function initNavCarousel() {
    const navWrapper = document.querySelector('.nav-wrapper');
    if (!navWrapper) return;
    
    // Verificar si hay desbordamiento
    function checkOverflow() {
        const hasOverflow = navWrapper.scrollWidth > navWrapper.clientWidth;
        
        if (hasOverflow) {
            navWrapper.classList.add('has-scroll');
        } else {
            navWrapper.classList.remove('has-scroll');
        }
        
        return hasOverflow;
    }
    
    // Eliminar botones existentes para evitar duplicados
    const existingLeft = document.querySelector('.nav-scroll-left');
    const existingRight = document.querySelector('.nav-scroll-right');
    if (existingLeft) existingLeft.remove();
    if (existingRight) existingRight.remove();
    
    // Crear botones de navegación
    const leftBtn = document.createElement('button');
    leftBtn.className = 'nav-scroll-btn nav-scroll-left';
    leftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    leftBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navWrapper.scrollBy({ left: -250, behavior: 'smooth' });
    };
    
    const rightBtn = document.createElement('button');
    rightBtn.className = 'nav-scroll-btn nav-scroll-right';
    rightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    rightBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navWrapper.scrollBy({ left: 250, behavior: 'smooth' });
    };
    
    navWrapper.parentElement.appendChild(leftBtn);
    navWrapper.parentElement.appendChild(rightBtn);
    
    // Función para actualizar la visibilidad de los botones
    function updateButtons() {
        const hasOverflow = checkOverflow();
        const scrollLeft = navWrapper.scrollLeft;
        const maxScroll = navWrapper.scrollWidth - navWrapper.clientWidth;
        
        if (hasOverflow) {
            leftBtn.style.display = 'flex';
            rightBtn.style.display = 'flex';
            
            leftBtn.style.opacity = scrollLeft <= 10 ? '0.5' : '1';
            leftBtn.style.pointerEvents = scrollLeft <= 10 ? 'none' : 'auto';
            rightBtn.style.opacity = maxScroll - scrollLeft <= 10 ? '0.5' : '1';
            rightBtn.style.pointerEvents = maxScroll - scrollLeft <= 10 ? 'none' : 'auto';
        } else {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
        }
    }
    
    // Escuchar eventos
    navWrapper.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', () => {
        setTimeout(updateButtons, 100);
    });
    
    // Inicializar
    setTimeout(updateButtons, 100);
}

// ===== FUNCIONES DE USUARIO =====
function getCurrentUser() {
    const userJson = localStorage.getItem('dgt_current_user');
    if (userJson) {
        try {
            return JSON.parse(userJson);
        } catch (e) {
            return null;
        }
    }
    return null;
}

function logoutUser() {
    localStorage.removeItem('dgt_current_user');
    window.location.href = 'login.html';
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
    const menuBtn = document.getElementById('menuMobileBtn');
    const nav = document.getElementById('navMenu');
    if (menuBtn && nav) {
        // Eliminar event listener anterior para evitar duplicados
        const newBtn = menuBtn.cloneNode(true);
        menuBtn.parentNode.replaceChild(newBtn, menuBtn);
        newBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nav.classList.toggle('active');
        });
    }
}

// ===== SCROLL SUAVE =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Eliminar event listener anterior
        const newAnchor = anchor.cloneNode(true);
        anchor.parentNode.replaceChild(newAnchor, anchor);
        newAnchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    const nav = document.getElementById('navMenu');
                    if (nav && nav.classList.contains('active')) {
                        nav.classList.remove('active');
                    }
                }
            }
        });
    });
}

// ===== ESTADÍSTICAS =====
function guardarProgreso(temaId, completado) {
    let progreso = localStorage.getItem('aprobadoya_progreso');
    if (!progreso) {
        progreso = {};
    } else {
        try {
            progreso = JSON.parse(progreso);
        } catch (e) {
            progreso = {};
        }
    }
    progreso[temaId] = completado;
    localStorage.setItem('aprobadoya_progreso', JSON.stringify(progreso));
}

function obtenerProgreso() {
    const progreso = localStorage.getItem('aprobadoya_progreso');
    if (progreso) {
        try {
            return JSON.parse(progreso);
        } catch (e) {
            return {};
        }
    }
    return {};
}

function calcularProgresoTotal() {
    const progreso = obtenerProgreso();
    const totalTemas = 20;
    const completados = Object.values(progreso).filter(v => v === true).length;
    return Math.round((completados / totalTemas) * 100);
}

function actualizarStats() {
    const progreso = obtenerProgreso();
    const completados = Object.values(progreso).filter(v => v === true).length;
    const statsElements = document.querySelectorAll('.stat-number');
    if (statsElements.length >= 4) {
        statsElements[0].textContent = completados;
        statsElements[1].textContent = `${Math.round((completados / 20) * 100)}%`;
    }
}

// ===== INICIALIZACIÓN PRINCIPAL =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrusel
    initNavCarousel();
    
    // Inicializar menú móvil
    initMobileMenu();
    
    // Inicializar scroll suave
    initSmoothScroll();
    
    // Actualizar estadísticas
    actualizarStats();
    
    // Renderizar zona de usuario si existe
    const userZone = document.getElementById('userZone');
    if (userZone) {
        const currentUser = getCurrentUser();
        if (currentUser) {
            userZone.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <span style="color: white;"><i class="fas fa-user-circle"></i> ${currentUser.nombre || currentUser.email}</span>
                    <a href="../perfil/index.html" class="btn-login" style="background: #fbbf24; color: #1a472a;">Mi perfil</a>
                    <button onclick="logoutUser()" class="btn-login" style="background: transparent; border: 1px solid #fbbf24; color: #fbbf24; cursor: pointer;">Cerrar sesión</button>
                </div>
            `;
        } else {
            userZone.innerHTML = `<a href="../login.html" class="btn-login"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>`;
        }
    }
    
    console.log('🚗 AprobadoYa cargada correctamente');
});