// js/progreso-tests.js
import { db, doc, getDoc, updateDoc } from './firebase-init.js';

// Tipos de tests
export const TIPOS_TEST = {
    RAPIDO: 'test-rapido',
    COMPLETO: 'test-completo',
    POR_TEMAS: 'test-por-temas',
    EXAMEN: 'test-examen'
};

// Obtener progreso del usuario
export async function obtenerProgresoTest(userId) {
    if (!userId) return {};
    
    try {
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
            return userDoc.data().testsCompletados || {};
        }
        return {};
    } catch (error) {
        console.error("Error:", error);
        return {};
    }
}

// Marcar test como completado
export async function marcarTestCompletado(userId, testId, resultado = null) {
    if (!userId) return;
    
    try {
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);
        
        let testsCompletados = {};
        if (userDoc.exists()) {
            testsCompletados = userDoc.data().testsCompletados || {};
        }
        
        testsCompletados[testId] = {
            completado: true,
            fecha: new Date().toISOString(),
            resultado: resultado,
            ultimoIntento: new Date().toISOString()
        };
        
        await updateDoc(userRef, {
            testsCompletados: testsCompletados
        });
        
        // Disparar evento para actualizar otras páginas
        window.dispatchEvent(new CustomEvent('test-completado', { 
            detail: { testId, completado: true } 
        }));
        
        return true;
    } catch (error) {
        console.error("Error guardando:", error);
        return false;
    }
}

// Verificar si un test está completado
export async function isTestCompletado(userId, testId) {
    const progreso = await obtenerProgresoTest(userId);
    return progreso[testId]?.completado === true;
}