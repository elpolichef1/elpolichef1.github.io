import { db, doc, setDoc, getDoc, updateDoc, arrayUnion } from './firebase-init.js';

async function guardarUsuarioFirestore(user, nombreAdicional = null) {
    const userRef = doc(db, "usuarios", user.uid);
    const userDoc = await getDoc(userRef);
    
    if (!userDoc.exists()) {
        const nuevoUsuario = {
            id: user.uid,
            nombre: nombreAdicional || user.displayName || user.email.split('@')[0],
            email: user.email,
            avatar: "🚗",
            fotoUrl: user.photoURL || null,
            fechaRegistro: new Date().toISOString(),
            testsRealizados: 0,
            totalAciertos: 0,
            totalPreguntas: 0,
            mejorResultado: 0,
            mediaAciertos: 0,
            totalJuegos: 0,
            totalPuntos: 0,
            mejorRacha: 0,
            historialJuegos: []
        };
        await setDoc(userRef, nuevoUsuario);
    }
    return userDoc.data();
}

async function guardarHistorialJuego(userId, juego, puntuacion, detalles) {
    const userRef = doc(db, "usuarios", userId);
    const nuevoRegistro = {
        id: Date.now(),
        juego: juego,
        puntuacion: puntuacion,
        fecha: new Date().toISOString(),
        aciertos: detalles.aciertos || 0,
        total: detalles.total || 0,
        racha: detalles.racha || 0
    };
    
    await updateDoc(userRef, {
        historialJuegos: arrayUnion(nuevoRegistro),
        totalJuegos: (await getDoc(userRef)).data()?.totalJuegos + 1 || 1,
        totalPuntos: (await getDoc(userRef)).data()?.totalPuntos + puntuacion || puntuacion
    });
}

async function obtenerHistorialJuegos(userId) {
    const userRef = doc(db, "usuarios", userId);
    const userDoc = await getDoc(userRef);
    return userDoc.exists() ? userDoc.data().historialJuegos || [] : [];
}

export { guardarUsuarioFirestore, guardarHistorialJuego, obtenerHistorialJuegos };