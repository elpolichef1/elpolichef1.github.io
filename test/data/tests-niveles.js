// ============================================
// 300 TESTS DIVIDIDOS POR NIVELES
// 100 tests Fáciles | 100 tests Medios | 100 tests Difíciles
// Cada test tiene 30 preguntas
// ============================================

// ==================== PREGUNTAS BASE POR DIFICULTAD ====================

// Preguntas Fáciles (Nivel 1)
const preguntasFaciles = [
    { texto: "¿Cuál es la velocidad máxima en una vía urbana?", opciones: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"], correcta: 2, explicacion: "La velocidad máxima en vías urbanas es de 50 km/h." },
    { texto: "¿Qué documento es obligatorio llevar en el coche?", opciones: ["Permiso de conducir", "Permiso de circulación", "ITV en vigor", "Todas son correctas"], correcta: 3, explicacion: "Es obligatorio llevar el permiso de conducir, permiso de circulación e ITV." },
    { texto: "¿Qué significa la señal de STOP?", opciones: ["Ceda el paso", "Detención obligatoria", "Prohibido el paso", "Precaución"], correcta: 1, explicacion: "La señal STOP indica detención obligatoria." },
    { texto: "¿A qué velocidad máxima puede circular un turismo en autovía?", opciones: ["100 km/h", "110 km/h", "120 km/h", "130 km/h"], correcta: 2, explicacion: "La velocidad máxima en autovía es 120 km/h." },
    { texto: "¿Qué significa una línea continua en la carretera?", opciones: ["Prohibido adelantar", "Prohibido estacionar", "Prohibido girar", "Prohibido circular"], correcta: 0, explicacion: "La línea continua prohíbe adelantar y cruzar sobre ella." },
    { texto: "¿Qué deben hacer los peatones en un paso de peatones?", opciones: ["Cruzar corriendo", "Cruzar con precaución", "Tienen prioridad", "Esperar a que no pasen coches"], correcta: 2, explicacion: "Los peatones tienen prioridad en los pasos de peatones." },
    { texto: "¿Cuántos puntos tiene un conductor novel?", opciones: ["12 puntos", "10 puntos", "8 puntos", "6 puntos"], correcta: 2, explicacion: "Los conductores noveles tienen 8 puntos iniciales." },
    { texto: "¿Qué significa la señal de Ceda el paso?", opciones: ["Detenerse siempre", "Ceder el paso si es necesario", "Tener prioridad", "Prohibido el paso"], correcta: 1, explicacion: "Debe ceder el paso a los vehículos que circulan por la vía." },
    { texto: "¿Cuándo está permitido usar el teléfono móvil al volante?", opciones: ["Siempre con manos libres", "Nunca", "Solo en caso de emergencia", "Con el coche parado"], correcta: 2, explicacion: "Solo en caso de emergencia, y con manos libres." },
    { texto: "¿Qué significa el color rojo de un semáforo?", opciones: ["Precaución", "Paso permitido", "Detención obligatoria", "Acelerar"], correcta: 2, explicacion: "El rojo indica detención obligatoria." }
];

// Preguntas Medias (Nivel 2)
const preguntasMedias = [
    { texto: "En una intersección sin señalizar, ¿quién tiene prioridad?", opciones: ["El de la izquierda", "El de la derecha", "El más rápido", "El más grande"], correcta: 1, explicacion: "Prioridad la derecha en intersecciones sin señalizar." },
    { texto: "¿Qué sanción tiene usar el móvil al volante?", opciones: ["100€ y 2 puntos", "200€ y 3 puntos", "300€ y 4 puntos", "500€ y 6 puntos"], correcta: 1, explicacion: "Infracción grave: 200€ y 3 puntos." },
    { texto: "¿Cuál es la tasa de alcoholemia máxima para conductores noveles?", opciones: ["0.3 g/l", "0.5 g/l", "0.8 g/l", "1.0 g/l"], correcta: 0, explicacion: "Los noveles tienen límite de 0.3 g/l en sangre." },
    { texto: "¿Qué indica una línea discontinua en la calzada?", opciones: ["Prohibido adelantar", "Permite adelantar si es seguro", "Prohibido cambiar de carril", "Zona de estacionamiento"], correcta: 1, explicacion: "La línea discontinua permite adelantar si es seguro." },
    { texto: "¿Qué significa una flecha blanca pintada en el pavimento?", opciones: ["Dirección obligatoria", "Prohibido girar", "Zona de estacionamiento", "Carril de aceleración"], correcta: 0, explicacion: "Indica dirección obligatoria hacia donde apunta." },
    { texto: "¿Qué velocidad máxima puede alcanzar un camión en autovía?", opciones: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"], correcta: 1, explicacion: "Los camiones tienen limitada su velocidad a 90 km/h." },
    { texto: "¿Qué significa una línea continua amarilla en el bordillo?", opciones: ["Prohibido estacionar", "Prohibido parar", "Zona de carga", "Parada de autobús"], correcta: 1, explicacion: "Prohíbe parar y estacionar." },
    { texto: "¿Cuántos puntos se pierden por no usar el cinturón?", opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"], correcta: 1, explicacion: "No usar el cinturón son 3 puntos." },
    { texto: "¿Qué significa la luz amarilla intermitente de un semáforo?", opciones: ["Paso prohibido", "Precaución, prioridad de paso", "Paso obligatorio", "Fin de prohibición"], correcta: 1, explicacion: "Indica precaución y que se debe ceder el paso." },
    { texto: "¿Qué deben hacer los conductores al aproximarse a un paso a nivel?", opciones: ["Aumentar velocidad", "Detenerse siempre", "Reducir velocidad y extremar precaución", "Tocar el claxon"], correcta: 2, explicacion: "Deben reducir la velocidad y extremar la precaución." }
];

// Preguntas Difíciles (Nivel 3) - Ultra difíciles
const preguntasDificiles = [
    { texto: "Un vehículo a 120 km/h, ¿qué distancia recorre en 2 segundos?", opciones: ["33.3 metros", "66.6 metros", "100 metros", "120 metros"], correcta: 1, explicacion: "120 km/h = 33.3 m/s, en 2 segundos: 66.6 metros." },
    { texto: "¿Qué significa una línea discontinua y otra continua juntas en la calzada?", opciones: ["Prohibido adelantar desde el lado de la continua", "Prohibido adelantar desde el lado de la discontinua", "Permite adelantar desde ambos lados", "Prohibido adelantar en ambos sentidos"], correcta: 0, explicacion: "Si la línea continua está en tu lado, no puedes adelantar." },
    { texto: "¿Cuántos metros debe dejarse como mínimo al estacionar en un paso de peatones?", opciones: ["5 metros", "10 metros", "15 metros", "20 metros"], correcta: 0, explicacion: "La distancia mínima es de 5 metros antes y después." },
    { texto: "¿Cuál es la tasa de alcoholemia que constituye delito penal?", opciones: ["0.5 g/l", "0.8 g/l", "1.0 g/l", "1.2 g/l"], correcta: 3, explicacion: "Superar 1.2 g/l en sangre es delito penal." },
    { texto: "¿Qué vehículos tienen prohibido circular por autopistas?", opciones: ["Ciclomotores", "Motocicletas de menos de 125cc", "Vehículos agrícolas", "Todas son correctas"], correcta: 3, explicacion: "Todos estos vehículos tienen prohibido circular por autopistas." },
    { texto: "¿Qué significa una señal de 'Carril reversible'?", opciones: ["Carril que cambia de sentido", "Carril para vehículos lentos", "Carril de aceleración", "Carril de deceleración"], correcta: 0, explicacion: "Carril cuyo sentido puede cambiar según necesidades." },
    { texto: "¿Cuántos puntos se pierden por conducir con tasa superior a 0.60 mg/l?", opciones: ["4 puntos", "6 puntos", "8 puntos", "Pérdida total"], correcta: 1, explicacion: "Conducir con tasa superior a 0.60 mg/l son 6 puntos." },
    { texto: "¿En qué casos está permitido adelantar por la derecha?", opciones: ["En autopistas", "En vías urbanas con varios carriles", "En carreteras convencionales", "Nunca está permitido"], correcta: 1, explicacion: "En vías urbanas con varios carriles se puede adelantar por la derecha." },
    { texto: "¿Qué significa una señal de 'Zona de bajas emisiones' (ZBE)?", opciones: ["Prohibido circular a vehículos sin etiqueta", "Velocidad máxima 30 km/h", "Zona peatonal", "Carril bici"], correcta: 0, explicacion: "Las ZBE restringen la circulación de vehículos sin etiqueta ambiental." },
    { texto: "¿Qué velocidad máxima puede alcanzar un turismo con remolque no ligero en autovía?", opciones: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"], correcta: 0, explicacion: "Los vehículos con remolque tienen limitada su velocidad a 80 km/h." }
];

// Generar preguntas adicionales para cada nivel (hasta tener suficientes para 100 tests)
function generarPreguntasParaNivel(base, nivel, cantidad) {
    const preguntas = [...base];
    const temas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const letras = ['A', 'B', 'C', 'D'];
    
    for (let i = preguntas.length; i < cantidad; i++) {
        const tema = temas[i % temas.length];
        const letraCorrecta = Math.floor(Math.random() * 4);
        preguntas.push({
            texto: `Pregunta de nivel ${nivel} sobre el tema ${tema} (${i + 1}): ¿Cuál es la afirmación correcta?`,
            opciones: [
                `Opción A - Respuesta ${letraCorrecta === 0 ? 'correcta' : 'incorrecta'}`,
                `Opción B - Respuesta ${letraCorrecta === 1 ? 'correcta' : 'incorrecta'}`,
                `Opción C - Respuesta ${letraCorrecta === 2 ? 'correcta' : 'incorrecta'}`,
                `Opción D - Respuesta ${letraCorrecta === 3 ? 'correcta' : 'incorrecta'}`
            ],
            correcta: letraCorrecta,
            explicacion: `Explicación detallada de la pregunta ${i + 1} del nivel ${nivel}.`
        });
    }
    return preguntas;
}

// Generar bancos de preguntas
const bancoFacil = generarPreguntasParaNivel(preguntasFaciles, "Fácil", 300);
const bancoMedio = generarPreguntasParaNivel(preguntasMedias, "Medio", 300);
const bancoDificil = generarPreguntasParaNivel(preguntasDificiles, "Difícil", 300);

// Función para crear un test con 30 preguntas aleatorias de un banco
function crearTest(id, nombre, nivel, bancoPreguntas) {
    // Mezclar preguntas
    const mezcladas = [...bancoPreguntas];
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
    
    return {
        id: id,
        nombre: nombre,
        nivel: nivel,
        preguntas: preguntasTest,
        fechaCreacion: new Date().toISOString()
    };
}

// Generar 100 tests por nivel
const TESTS_POR_NIVEL = {
    facil: [],
    medio: [],
    dificil: []
};

// Generar tests fáciles
for (let i = 1; i <= 100; i++) {
    TESTS_POR_NIVEL.facil.push(crearTest(i, `Test Fácil ${i}`, "Fácil", bancoFacil));
}

// Generar tests medios
for (let i = 101; i <= 200; i++) {
    TESTS_POR_NIVEL.medio.push(crearTest(i, `Test Medio ${i - 100}`, "Medio", bancoMedio));
}

// Generar tests difíciles
for (let i = 201; i <= 300; i++) {
    TESTS_POR_NIVEL.dificil.push(crearTest(i, `Test Difícil ${i - 200}`, "Difícil", bancoDificil));
}

// Función para obtener tests por nivel
function obtenerTestsPorNivel(nivel) {
    switch(nivel) {
        case "facil": return TESTS_POR_NIVEL.facil;
        case "medio": return TESTS_POR_NIVEL.medio;
        case "dificil": return TESTS_POR_NIVEL.dificil;
        default: return [...TESTS_POR_NIVEL.facil, ...TESTS_POR_NIVEL.medio, ...TESTS_POR_NIVEL.dificil];
    }
}

// Función para obtener un test por ID
function obtenerTestPorId(id) {
    const todos = [...TESTS_POR_NIVEL.facil, ...TESTS_POR_NIVEL.medio, ...TESTS_POR_NIVEL.dificil];
    return todos.find(t => t.id === id);
}

// Función para obtener tests paginados por nivel
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

console.log(`📚 Tests generados:`);
console.log(`   ✅ Fáciles: ${TESTS_POR_NIVEL.facil.length} tests`);
console.log(`   ✅ Medios: ${TESTS_POR_NIVEL.medio.length} tests`);
console.log(`   ✅ Difíciles: ${TESTS_POR_NIVEL.dificil.length} tests`);
console.log(`📊 Total: 300 tests (100 por nivel)`);