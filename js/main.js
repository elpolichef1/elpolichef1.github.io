// ============================================
// FUNCIONES GENERALES DE LA PLATAFORMA
// ============================================

// ===== CARRUSEL DE MENÚ CON FLECHAS AUTOMÁTICAS =====
function initNavCarousel() {
    const navWrapper = document.querySelector('.nav-wrapper');
    if (!navWrapper) return;
    
    function checkOverflow() {
        const hasOverflow = navWrapper.scrollWidth > navWrapper.clientWidth;
        if (hasOverflow) {
            navWrapper.classList.add('has-scroll');
        } else {
            navWrapper.classList.remove('has-scroll');
        }
        return hasOverflow;
    }
    
    const existingLeft = document.querySelector('.nav-scroll-left');
    const existingRight = document.querySelector('.nav-scroll-right');
    if (existingLeft) existingLeft.remove();
    if (existingRight) existingRight.remove();
    
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
    
    navWrapper.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', () => {
        setTimeout(updateButtons, 100);
    });
    setTimeout(updateButtons, 100);
}

// ===== MENÚ MÓVIL =====
function initMobileMenu() {
    const menuBtn = document.getElementById('menuMobileBtn');
    const nav = document.getElementById('navMenu');
    if (menuBtn && nav) {
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

// ===== ZONA DE USUARIO =====
function renderUserZone() {
    const currentUser = getCurrentUser();
    const userZone = document.getElementById('userZone');
    if (!userZone) return;
    
    if (currentUser) {
        const avatar = currentUser.avatar || "🚗";
        userZone.innerHTML = `
            <div class="user-menu">
                <div class="user-avatar">${avatar}</div>
                <span class="user-name">${currentUser.nombre}</span>
                <a href="perfil/index.html" class="btn-profile">Mi perfil</a>
                <button onclick="logoutUser()" class="btn-logout">Cerrar sesión</button>
            </div>
        `;
    } else {
        userZone.innerHTML = `<a href="login.html" class="btn-login"><i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>`;
    }
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

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    initNavCarousel();
    initMobileMenu();
    initSmoothScroll();
    renderUserZone();
    actualizarStats();
    console.log('🚗 AprobadoYa cargada correctamente');
});