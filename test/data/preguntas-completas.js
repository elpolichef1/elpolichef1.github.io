// test/data/preguntas-completas.js
// BASE DE DATOS UNIFICADA - 3000 PREGUNTAS (20 TEMAS)

// ============================================
// IMPORTAR TODOS LOS TEMAS
// ============================================

import { tema1 } from './temas/tema1.js';
import { tema2 } from './temas/tema2.js';
import { tema3 } from './temas/tema3.js';
import { tema4 } from './temas/tema4.js';
import { tema5 } from './temas/tema5.js';
import { tema6 } from './temas/tema6.js';
import { tema7 } from './temas/tema7.js';
import { tema8 } from './temas/tema8.js';
import { tema9 } from './temas/tema9.js';
import { tema10 } from './temas/tema10.js';
import { tema11 } from './temas/tema11.js';
import { tema12 } from './temas/tema12.js';
import { tema13 } from './temas/tema13.js';
import { tema14 } from './temas/tema14.js';
import { tema15 } from './temas/tema15.js';
import { tema16 } from './temas/tema16.js';
import { tema17 } from './temas/tema17.js';
import { tema18 } from './temas/tema18.js';
import { tema19 } from './temas/tema19.js';
import { tema20 } from './temas/tema20.js';

// ============================================
// UNIR TODAS LAS PREGUNTAS
// ============================================

export const todasLasPreguntas = [
    ...tema1,
    ...tema2,
    ...tema3,
    ...tema4,
    ...tema5,
    ...tema6,
    ...tema7,
    ...tema8,
    ...tema9,
    ...tema10,
    ...tema11,
    ...tema12,
    ...tema13,
    ...tema14,
    ...tema15,
    ...tema16,
    ...tema17,
    ...tema18,
    ...tema19,
    ...tema20
];

// ============================================
// PREGUNTAS POR DIFICULTAD (para Test Completo)
// ============================================

export const preguntasFaciles = todasLasPreguntas.filter(p => p.dificultad === 'facil');
export const preguntasMedias = todasLasPreguntas.filter(p => p.dificultad === 'media');
export const preguntasDificiles = todasLasPreguntas.filter(p => p.dificultad === 'dificil');

// ============================================
// PREGUNTAS POR TEMA (para Test por Temas)
// ============================================

export const preguntasPorTema = {
    1: { nombre: "Normas generales", preguntas: tema1 },
    2: { nombre: "Señales", preguntas: tema2 },
    3: { nombre: "Circulación", preguntas: tema3 },
    4: { nombre: "Maniobras", preguntas: tema4 },
    5: { nombre: "Velocidades", preguntas: tema5 },
    6: { nombre: "Condiciones adversas", preguntas: tema6 },
    7: { nombre: "Vehículos", preguntas: tema7 },
    8: { nombre: "Conductores", preguntas: tema8 },
    9: { nombre: "Alcoholemia y drogas", preguntas: tema9 },
    10: { nombre: "Seguridad vial", preguntas: tema10 },
    11: { nombre: "Permiso por puntos", preguntas: tema11 },
    12: { nombre: "Señales de obras", preguntas: tema12 },
    13: { nombre: "Transporte", preguntas: tema13 },
    14: { nombre: "Factores de riesgo", preguntas: tema14 },
    15: { nombre: "Medio ambiente", preguntas: tema15 },
    16: { nombre: "ITV", preguntas: tema16 },
    17: { nombre: "Seguros", preguntas: tema17 },
    18: { nombre: "Movilidad", preguntas: tema18 },
    19: { nombre: "Legislación", preguntas: tema19 },
    20: { nombre: "Examen final", preguntas: tema20 }
};

// ============================================
// FUNCIÓN PARA GENERAR TESTS POR NIVEL
// ============================================

export function generarTestsPorNivel(nivel, cantidadTests = 100, preguntasPorTest = 30) {
    let bancoPreguntas = [];
    
    if (nivel === 'facil') bancoPreguntas = [...preguntasFaciles];
    else if (nivel === 'medio') bancoPreguntas = [...preguntasMedias];
    else bancoPreguntas = [...preguntasDificiles];
    
    const tests = [];
    
    for (let i = 1; i <= cantidadTests; i++) {
        const mezcladas = [...bancoPreguntas];
        for (let j = mezcladas.length - 1; j > 0; j--) {
            const k = Math.floor(Math.random() * (j + 1));
            [mezcladas[j], mezcladas[k]] = [mezcladas[k], mezcladas[j]];
        }
        
        const preguntasTest = mezcladas.slice(0, preguntasPorTest).map((p, idx) => ({
            ...p,
            id: `${nivel}_${i}_${idx}`
        }));
        
        tests.push({
            id: i,
            numero: i,
            nombre: `Test ${nivel === 'facil' ? 'Fácil' : nivel === 'medio' ? 'Medio' : 'Difícil'} ${i}`,
            nivel: nivel,
            preguntas: preguntasTest
        });
    }
    
    return tests;
}

// ============================================
// FUNCIONES PARA TEST POR TEMAS
// ============================================

export function obtenerPreguntasPorTema(temaNumero, cantidad = 30) {
    const preguntas = preguntasPorTema[temaNumero]?.preguntas || [];
    const mezcladas = [...preguntas];
    
    for (let i = mezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezcladas[i], mezcladas[j]] = [mezcladas[j], mezcladas[i]];
    }
    
    return mezcladas.slice(0, cantidad);
}

export function obtenerTemas() {
    const temas = [];
    for (let i = 1; i <= 20; i++) {
        if (preguntasPorTema[i] && preguntasPorTema[i].preguntas.length > 0) {
            temas.push({
                numero: i,
                nombre: preguntasPorTema[i].nombre,
                totalPreguntas: preguntasPorTema[i].preguntas.length
            });
        }
    }
    return temas;
}

export function obtenerTestAleatorio(cantidad = 30) {
    const mezcladas = [...todasLasPreguntas];
    for (let i = mezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezcladas[i], mezcladas[j]] = [mezcladas[j], mezcladas[i]];
    }
    return mezcladas.slice(0, cantidad);
}

// ============================================
// FUNCIONES PARA GUARDAR RESULTADOS
// ============================================

export async function guardarResultadoTest(userId, tipoTest, testId, testNombre, resultado) {
    if (!userId) return false;
    
    try {
        const { db, doc, getDoc, updateDoc } = await import('../js/firebase-init.js');
        const userRef = doc(db, "usuarios", userId);
        const userDoc = await getDoc(userRef);
        
        let resultadosTests = {};
        let userData = {};
        
        if (userDoc.exists()) {
            userData = userDoc.data();
            resultadosTests = userData.resultadosTests || {};
        }
        
        const clave = `${tipoTest}_${testId}`;
        
        resultadosTests[clave] = {
            tipo: tipoTest,
            testId: testId,
            testNombre: testNombre,
            aprobado: resultado.aprobado,
            porcentaje: resultado.porcentaje,
            aciertos: resultado.aciertos,
            total: resultado.total,
            fecha: new Date().toISOString()
        };
        
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
        
        return true;
    } catch (error) {
        console.error("Error guardando:", error);
        return false;
    }
}

export async function obtenerResultadosTests(userId) {
    if (!userId) return {};
    
    try {
        const { db, doc, getDoc } = await import('../js/firebase-init.js');
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

// ============================================
// EXPORTAR TODO
// ============================================

export default {
    todasLasPreguntas,
    preguntasFaciles,
    preguntasMedias,
    preguntasDificiles,
    preguntasPorTema,
    generarTestsPorNivel,
    obtenerPreguntasPorTema,
    obtenerTemas,
    obtenerTestAleatorio,
    guardarResultadoTest,
    obtenerResultadosTests
};