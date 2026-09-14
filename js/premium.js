// ============================================
// SISTEMA PREMIUM
// Comprueba si el usuario actual es premium.
// ============================================

import { getUserData, getCurrentUser } from './global-auth.js';

/**
 * Devuelve true si el usuario actual es premium.
 */
export function esPremium() {
    const data = getUserData();
    if (!data) return false;
    if (data.plan !== 'premium') return false;
    if (data.premiumActivo !== true) return false;

    if (data.premiumHasta) {
        const fin = new Date(data.premiumHasta);
        if (fin < new Date()) return false;
    }

    return true;
}

/**
 * Devuelve true si hay un usuario logueado.
 */
export function hayUsuario() {
    return getCurrentUser() !== null;
}

/**
 * Muestra un modal bloqueante "Hazte Premium".
 * Se puede llamar desde cualquier página.
 */
export function mostrarModalPremium() {
    if (document.getElementById('premiumModalBloqueo')) return;

    const modal = document.createElement('div');
    modal.id = 'premiumModalBloqueo';
    modal.innerHTML = `
        <style>
            #premiumModalBloqueo {
                position: fixed;
                inset: 0;
                background: rgba(15, 42, 26, 0.85);
                backdrop-filter: blur(6px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                z-index: 99999;
                font-family: 'Inter', 'Segoe UI', sans-serif;
                animation: premiumFadeIn 0.3s ease;
            }
            @keyframes premiumFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            #premiumModalBloqueo .pm-box {
                background: white;
                border-radius: 30px;
                padding: 40px 35px;
                max-width: 460px;
                width: 100%;
                text-align: center;
                box-shadow: 0 25px 60px rgba(0,0,0,0.4);
                animation: premiumPop 0.4s ease;
            }
            @keyframes premiumPop {
                0% { transform: scale(0.9); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }
            #premiumModalBloqueo .pm-lock {
                font-size: 4rem;
                margin-bottom: 12px;
                display: block;
            }
            #premiumModalBloqueo h2 {
                color: #1a472a;
                font-size: 1.55rem;
                margin-bottom: 12px;
                font-weight: 800;
            }
            #premiumModalBloqueo .pm-desc {
                color: #64748b;
                font-size: 0.95rem;
                margin-bottom: 22px;
                line-height: 1.5;
            }
            #premiumModalBloqueo .pm-lista {
                text-align: left;
                list-style: none;
                padding: 18px 22px;
                margin: 0 0 24px 0;
                background: #f8fafc;
                border-radius: 15px;
                border: 1px solid #e2e8f0;
            }
            #premiumModalBloqueo .pm-lista li {
                padding: 6px 0;
                color: #1e293b;
                font-size: 0.9rem;
                font-weight: 500;
            }
            #premiumModalBloqueo .pm-lista li::before {
                content: "✅ ";
                margin-right: 6px;
            }
            #premiumModalBloqueo .pm-btn-premium {
                display: block;
                width: 100%;
                background: linear-gradient(135deg, #fbbf24, #f59e0b);
                color: #1a472a;
                border: none;
                padding: 16px;
                border-radius: 50px;
                font-size: 1rem;
                font-weight: 800;
                cursor: pointer;
                text-decoration: none;
                margin-bottom: 12px;
                transition: all 0.3s;
                box-sizing: border-box;
            }
            #premiumModalBloqueo .pm-btn-premium:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(251,191,36,0.5);
            }
            #premiumModalBloqueo .pm-btn-cerrar {
                display: block;
                width: 100%;
                background: transparent;
                color: #64748b;
                border: 2px solid #e2e8f0;
                padding: 13px;
                border-radius: 50px;
                font-size: 0.9rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                box-sizing: border-box;
                font-family: inherit;
            }
            #premiumModalBloqueo .pm-btn-cerrar:hover {
                background: #f8fafc;
                border-color: #fbbf24;
                color: #1a472a;
            }
        </style>
        <div class="pm-box">
            <span class="pm-lock">🔒</span>
            <h2>Función Premium</h2>
            <p class="pm-desc">Los <strong>Mini Retos</strong> son exclusivos para usuarios Premium. Mejora tu plan para desbloquearlos.</p>
            <ul class="pm-lista">
                <li>Todos los minijuegos desbloqueados</li>
                <li>Sin límites ni restricciones</li>
                <li>Acceso a futuros juegos</li>
            </ul>
            <a href="../premium.html" class="pm-btn-premium">⭐ Hazte Premium</a>
            <button class="pm-btn-cerrar" id="pmCerrarBtn">Seguir explorando</button>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('pmCerrarBtn').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}