// ============================================
// 300 TESTS DIVIDIDOS POR NIVELES
// ============================================

const preguntasBase = [
    { texto: "¿Cuál es la prioridad de paso en una intersección sin señalizar?", opciones: ["La de la izquierda", "La de la derecha", "La del vehículo más rápido", "La del vehículo más grande"], correcta: 1, explicacion: "Prioridad la derecha." },
    { texto: "¿Qué documentación es obligatoria llevar en el vehículo?", opciones: ["Permiso de circulación", "Permiso de conducir", "ITV en vigor", "Todas son correctas"], correcta: 3, explicacion: "Debe llevar permiso de conducir, permiso de circulación e ITV." },
    { texto: "¿Qué sanción tiene usar el teléfono móvil mientras se conduce?", opciones: ["100€", "200€ y 3 puntos", "300€", "500€"], correcta: 1, explicacion: "Infracción grave: 200€ y 3 puntos." },
    { texto: "¿Qué significa la señal de STOP?", opciones: ["Ceda el paso", "Detención obligatoria", "Prohibido el paso", "Precaución"], correcta: 1, explicacion: "Detención obligatoria." },
    { texto: "¿A qué velocidad máxima puede circular un turismo en autovía?", opciones: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"], correcta: 2, explicacion: "120 km/h." },
    { texto: "¿Qué indica una línea continua en la calzada?", opciones: ["Prohibido adelantar", "Prohibido estacionar", "Sentido prohibido", "Zona de carga"], correcta: 0, explicacion: "Prohíbe adelantar." },
    { texto: "¿Cuándo está permitido usar el claxon?", opciones: ["Siempre", "Para saludar", "Para evitar un accidente", "En zonas urbanas"], correcta: 2, explicacion: "Solo para evitar accidentes." },
    { texto: "¿Qué deben hacer los conductores al aproximarse a un paso a nivel?", opciones: ["Aumentar velocidad", "Detenerse", "Reducir velocidad", "Tocar claxon"], correcta: 2, explicacion: "Reducir velocidad y extremar precaución." },
    { texto: "¿Qué significa la señal de 'Ceda el paso'?", opciones: ["Detenerse", "Prioridad", "Prohibido", "Ceder el paso"], correcta: 3, explicacion: "Obligación de ceder el paso." },
    { texto: "¿Cuántos puntos tiene inicialmente un conductor novel?", opciones: ["12", "10", "8", "6"], correcta: 2, explicacion: "8 puntos iniciales." }
];

function crearTest(id, nombre, nivel) {
    const mezcladas = [...preguntasBase];
    for (let i = mezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezcladas[i], mezcladas[j]] = [mezcladas[j], mezcladas[i]];
    }
    const preguntasTest = mezcladas.slice(0, 30).map((p, idx) => ({
        id: id * 100 + idx,
        texto: p.texto,
        opciones: [...p.opciones],
        correcta: p.correcta,
        explicacion: p.explicacion
    }));
    return { id: id, nombre: nombre, nivel: nivel, preguntas: preguntasTest };
}

const TESTS_POR_NIVEL = { facil: [], medio: [], dificil: [] };

for (let i = 1; i <= 100; i++) TESTS_POR_NIVEL.facil.push(crearTest(i, `Test Fácil ${i}`, "facil"));
for (let i = 101; i <= 200; i++) TESTS_POR_NIVEL.medio.push(crearTest(i, `Test Medio ${i - 100}`, "medio"));
for (let i = 201; i <= 300; i++) TESTS_POR_NIVEL.dificil.push(crearTest(i, `Test Difícil ${i - 200}`, "dificil"));

function obtenerTestsPorNivel(nivel) {
    switch(nivel) {
        case "facil": return TESTS_POR_NIVEL.facil;
        case "medio": return TESTS_POR_NIVEL.medio;
        case "dificil": return TESTS_POR_NIVEL.dificil;
        default: return [];
    }
}

function obtenerTestPorId(id) {
    const todos = [...TESTS_POR_NIVEL.facil, ...TESTS_POR_NIVEL.medio, ...TESTS_POR_NIVEL.dificil];
    return todos.find(t => t.id === id);
}

function obtenerTestsPaginados(nivel, page = 1, pageSize = 20) {
    const tests = obtenerTestsPorNivel(nivel);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        tests: tests.slice(start, end),
        total: tests.length,
        page: page,
        totalPages: Math.ceil(tests.length / pageSize)
    };
}

console.log("✅ tests-niveles.js cargado");