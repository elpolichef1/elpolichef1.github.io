// js/progreso-tests.js
import { db, doc, getDoc, updateDoc } from './firebase-init.js';

// Guardar resultado de un test completo
export async function guardarResultadoTest(userId, nivel, testId, testNombre, resultado) {
    if (!userId) return false;
    
    try {
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);
        
        let resultadosTests = {};
        let userData = {};
        
        if (userDoc.exists()) {
            userData = userDoc.data();
            resultadosTests = userData.resultadosTests || {};
        }
        
        const clave = `${nivel}_${testId}`;
        
        resultadosTests[clave] = {
            nivel: nivel,
            testId: testId,
            testNombre: testNombre,
            aprobado: resultado.aprobado,
            porcentaje: resultado.porcentaje,
            aciertos: resultado.aciertos,
            total: resultado.total,
            fecha: new Date().toISOString()
        };
        
        // Actualizar estadísticas globales
        const nuevosTests = (userData.testsRealizados || 0) + 1;
        const nuevosAciertos = (userData.totalAciertos || 0) + resultado.aciertos;
        const nuevasPreguntas = (userData.totalPreguntas || 0) + resultado.total;
        const nuevaMedia = Math.round((nuevosAciertos / nuevasPreguntas) * 100);
        const nuevoMejor = Math.max(userData.mejorResultado || 0, resultado.porcentaje);
        const nuevosAprobados = (userData.testsAprobados || 0) + (resultado.aprobado ? 1 : 0);
        
        await updateDoc(userRef, {
            resultadosTests: resultadosTests,
            testsRealizados: nuevosTests,
            totalAciertos: nuevosAciertos,
            totalPreguntas: nuevasPreguntas,
            mediaAciertos: nuevaMedia,
            mejorResultado: nuevoMejor,
            testsAprobados: nuevosAprobados
        });
        
        console.log(`✅ Test ${clave} guardado. Total tests: ${nuevosTests}`);
        return true;
        
    } catch (error) {
        console.error("Error guardando:", error);
        return false;
    }
}

// Obtener todos los resultados
export async function obtenerResultadosTests(userId) {
    if (!userId) return {};
    
    try {
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
            return userDoc.data().resultadosTests || {};
        }
        return {};
    } catch (error) {
        console.error("Error:", error);
        return {};
    }
}

// Obtener estadísticas del usuario
export async function obtenerEstadisticasUsuario(userId) {
    if (!userId) return null;
    
    try {
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
            const data = userDoc.data();
            return {
                testsRealizados: data.testsRealizados || 0,
                testsAprobados: data.testsAprobados || 0,
                mediaAciertos: data.mediaAciertos || 0,
                mejorResultado: data.mejorResultado || 0,
                totalAciertos: data.totalAciertos || 0,
                totalPreguntas: data.totalPreguntas || 0
            };
        }
        return null;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}