// ============================================
// RANKING COMPARTIDO CON FIRESTORE
// ============================================

import { 
    auth, 
    db, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc,
    collection, 
    query, 
    orderBy, 
    getDocs
} from './firebase-init.js';

// Guardar usuario en Firestore cuando se registra
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
            mediaAciertos: 0
        };
        
        await setDoc(userRef, nuevoUsuario);
        console.log("Usuario guardado en Firestore:", nuevoUsuario.nombre);
        return nuevoUsuario;
    }
    
    return userDoc.data();
}

// Actualizar estadísticas después de un test
async function actualizarEstadisticasTest(userId, aciertos, total, tema = null) {
    const userRef = doc(db, "usuarios", userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
        const user = userDoc.data();
        const nuevosAciertos = (user.totalAciertos || 0) + aciertos;
        const nuevasPreguntas = (user.totalPreguntas || 0) + total;
        const nuevosTests = (user.testsRealizados || 0) + 1;
        const nuevaMedia = Math.round((nuevosAciertos / nuevasPreguntas) * 100);
        const nuevoMejor = Math.max(user.mejorResultado || 0, Math.round((aciertos / total) * 100));
        
        await updateDoc(userRef, {
            testsRealizados: nuevosTests,
            totalAciertos: nuevosAciertos,
            totalPreguntas: nuevasPreguntas,
            mediaAciertos: nuevaMedia,
            mejorResultado: nuevoMejor,
            ultimoTest: new Date().toISOString()
        });
        
        console.log("Estadísticas actualizadas:", { nuevosTests, nuevaMedia });
        
        return {
            totalTests: nuevosTests,
            totalAciertos: nuevosAciertos,
            totalPreguntas: nuevasPreguntas,
            mediaAciertos: nuevaMedia,
            mejorResultado: nuevoMejor
        };
    }
    return null;
}

// Obtener ranking global (todos los usuarios ordenados por media)
async function obtenerRankingGlobal() {
    const usersRef = collection(db, "usuarios");
    const q = query(usersRef, orderBy("mediaAciertos", "desc"));
    const querySnapshot = await getDocs(q);
    
    const ranking = [];
    querySnapshot.forEach((doc) => {
        ranking.push({
            id: doc.id,
            ...doc.data()
        });
    });
    
    console.log("Ranking obtenido:", ranking.length, "usuarios");
    return ranking;
}

// Obtener datos de un usuario específico
async function obtenerUsuarioFirestore(userId) {
    const userRef = doc(db, "usuarios", userId);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
        return userDoc.data();
    }
    return null;
}

// Exportar funciones
export {
    guardarUsuarioFirestore,
    actualizarEstadisticasTest,
    obtenerRankingGlobal,
    obtenerUsuarioFirestore
};