import {
    db,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion
} from './firebase-init.js';

/**
 * Crea el documento del usuario si todavía no existe.
 * Todos los usuarios nuevos comienzan como FREE.
 */
async function guardarUsuarioFirestore(user, nombreAdicional = null) {
    const userRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
        const nuevoUsuario = {
            id: user.uid,
            nombre: nombreAdicional || user.displayName || user.email.split('@')[0],
            email: user.email,

            // PERFIL
            avatar: "🚗",
            fotoUrl: user.photoURL || null,
            fechaRegistro: new Date().toISOString(),

            // PLAN
            plan: "free",
            premiumActivo: false,
            premiumDesde: null,
            premiumHasta: null,

            // ESTADÍSTICAS
            testsRealizados: 0,
            totalAciertos: 0,
            totalPreguntas: 0,
            mejorResultado: 0,
            mediaAciertos: 0,

            // JUEGOS
            totalJuegos: 0,
            totalPuntos: 0,
            mejorRacha: 0,
            historialJuegos: []
        };

        await setDoc(userRef, nuevoUsuario);

        // Devolvemos los datos recién creados
        return nuevoUsuario;
    }

    return userDoc.data();
}


/**
 * Comprueba si un usuario tiene Premium.
 */
async function esUsuarioPremium(userId) {
    if (!userId) return false;

    try {
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            return false;
        }

        const data = userDoc.data();

        // Premium activo
        if (data.plan === "premium" && data.premiumActivo === true) {
            // Si existe fecha de vencimiento, comprobarla
            if (data.premiumHasta) {
                const fechaFin = new Date(data.premiumHasta);

                if (fechaFin < new Date()) {
                    return false;
                }
            }

            return true;
        }

        return false;

    } catch (error) {
        console.error("Error comprobando Premium:", error);
        return false;
    }
}


/**
 * Obtiene todos los datos del usuario.
 */
async function obtenerDatosUsuario(userId) {
    if (!userId) return null;

    try {
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);

        return userDoc.exists() ? userDoc.data() : null;

    } catch (error) {
        console.error("Error obteniendo usuario:", error);
        return null;
    }
}


/**
 * Guarda un juego realizado.
 */
async function guardarHistorialJuego(
    userId,
    juego,
    puntuacion,
    detalles
) {
    const userRef = doc(db, "usuarios", userId);

    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
        console.error("El usuario no existe");
        return;
    }

    const datosActuales = userDoc.data();

    const nuevoRegistro = {
        id: Date.now(),
        juego: juego,
        puntuacion: puntuacion,
        fecha: new Date().toISOString(),
        aciertos: detalles?.aciertos || 0,
        total: detalles?.total || 0,
        racha: detalles?.racha || 0
    };

    const totalJuegosActual =
        datosActuales.totalJuegos || 0;

    const totalPuntosActual =
        datosActuales.totalPuntos || 0;

    await updateDoc(userRef, {
        historialJuegos: arrayUnion(nuevoRegistro),
        totalJuegos: totalJuegosActual + 1,
        totalPuntos: totalPuntosActual + puntuacion
    });
}


/**
 * Obtiene el historial de juegos.
 */
async function obtenerHistorialJuegos(userId) {
    const userRef = doc(db, "usuarios", userId);
    const userDoc = await getDoc(userRef);

    return userDoc.exists()
        ? userDoc.data().historialJuegos || []
        : [];
}


export {
    guardarUsuarioFirestore,
    guardarHistorialJuego,
    obtenerHistorialJuegos,
    esUsuarioPremium,
    obtenerDatosUsuario
};