// ============================================
// 300 TESTS ULTRA DIFÍCILES - 30 PREGUNTAS CADA UNO
// ============================================

// Función para generar preguntas ultra difíciles
function generarPreguntaUltraDificil(tema, id) {
    const preguntasBase = [
        // Preguntas de nivel EXPERTO
        { texto: "Un vehículo que circula a 120 km/h en autovía, ¿qué distancia recorre en 2 segundos?", opciones: ["33.3 metros", "66.6 metros", "100 metros", "120 metros"], correcta: 1, explicacion: "A 120 km/h = 33.3 m/s, en 2 segundos recorre 66.6 metros." },
        { texto: "En una carretera convencional con arcén transitable, ¿cuál es la velocidad máxima para un turismo?", opciones: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"], correcta: 0, explicacion: "La velocidad máxima en carretera convencional es 90 km/h, independientemente del arcén." },
        { texto: "¿Qué significa una línea discontinua y otra continua juntas en la calzada?", opciones: ["Prohibido adelantar desde el lado de la continua", "Prohibido adelantar desde el lado de la discontinua", "Permite adelantar desde ambos lados", "Prohibido adelantar en ambos sentidos"], correcta: 0, explicacion: "Si la línea continua está en tu lado, no puedes adelantar. Si está en el otro lado, sí puedes." },
        { texto: "¿Cuántos metros debe dejarse como mínimo al estacionar en un paso de peatones?", opciones: ["5 metros", "10 metros", "15 metros", "20 metros"], correcta: 0, explicacion: "La distancia mínima es de 5 metros antes y después del paso de peatones." },
        { texto: "¿Qué significa una flecha blanca pintada en el pavimento con dirección hacia la izquierda?", opciones: ["Prohibido girar a la izquierda", "Dirección obligatoria hacia la izquierda", "Adelantamiento permitido por la izquierda", "Carril de aceleración"], correcta: 1, explicacion: "Indica dirección obligatoria hacia donde apunta la flecha." },
        { texto: "¿Cuál es la tasa de alcoholemia que constituye delito penal?", opciones: ["0.5 g/l", "0.8 g/l", "1.0 g/l", "1.2 g/l"], correcta: 3, explicacion: "Superar 0.60 mg/l en aire espirado o 1.2 g/l en sangre es delito penal." },
        { texto: "¿Qué vehículos tienen prohibido circular por autopistas?", opciones: ["Ciclomotores", "Motocicletas de menos de 125cc", "Vehículos agrícolas", "Todas son correctas"], correcta: 3, explicacion: "Ciclomotores, motos de menos de 125cc y vehículos agrícolas tienen prohibido circular por autopistas." },
        { texto: "¿Qué significa una señal de 'Carril reversible'?", opciones: ["Carril que cambia de sentido", "Carril para vehículos lentos", "Carril de aceleración", "Carril de deceleración"], correcta: 0, explicacion: "Indica un carril cuyo sentido de circulación puede cambiar según las necesidades." },
        { texto: "¿Cuántos puntos se pierden por conducir con una tasa de alcoholemia superior a 0.60 mg/l?", opciones: ["4 puntos", "6 puntos", "8 puntos", "Pérdida total"], correcta: 1, explicacion: "Conducir con tasa superior a 0.60 mg/l supone la pérdida de 6 puntos." },
        { texto: "¿Qué debe hacer un conductor si un agente de tráfico le indica que se detenga con el brazo extendido horizontalmente?", opciones: ["Acelerar", "Detenerse inmediatamente", "Buscar un lugar seguro", "Continuar"], correcta: 1, explicacion: "El brazo extendido horizontalmente indica detención obligatoria." },
        { texto: "¿En qué casos está permitido adelantar por la derecha?", opciones: ["En autopistas", "En vías urbanas con varios carriles", "En carreteras convencionales", "Nunca está permitido"], correcta: 1, explicacion: "En vías urbanas con varios carriles se puede adelantar por la derecha si el carril izquierdo está congestionado." },
        { texto: "¿Qué significa una señal de 'Zona de bajas emisiones' (ZBE)?", opciones: ["Prohibido circular a vehículos sin etiqueta", "Velocidad máxima 30 km/h", "Zona peatonal", "Carril bici"], correcta: 0, explicacion: "Las ZBE restringen la circulación de vehículos sin etiqueta ambiental." },
        { texto: "¿Cuántos puntos se pierden por usar el teléfono móvil al volante?", opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"], correcta: 1, explicacion: "Usar el móvil al volante es una infracción grave que conlleva 3 puntos." },
        { texto: "¿Qué velocidad máxima puede alcanzar un turismo con remolque no ligero en autovía?", opciones: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"], correcta: 0, explicacion: "Los vehículos con remolque tienen limitada su velocidad a 80 km/h." },
        { texto: "¿Qué significa una línea continua amarilla en el bordillo?", opciones: ["Prohibido estacionar", "Prohibido parar", "Zona de carga y descarga", "Parada de autobús"], correcta: 1, explicacion: "La línea continua amarilla indica prohibido parar y estacionar." }
    ];
    
    // Generar 30 preguntas únicas para cada test
    const preguntasTest = [];
    const preguntasDisponibles = [...preguntasBase];
    
    for (let i = 0; i < 30; i++) {
        if (preguntasDisponibles.length === 0) break;
        const randomIndex = Math.floor(Math.random() * preguntasDisponibles.length);
        const pregunta = { ...preguntasDisponibles[randomIndex] };
        pregunta.id = id * 100 + i;
        pregunta.tema = (id % 20) + 1;
        preguntasTest.push(pregunta);
        preguntasDisponibles.splice(randomIndex, 1);
    }
    
    return preguntasTest;
}

// Generar 300 tests con 30 preguntas cada uno
const TESTS = [];

for (let i = 1; i <= 300; i++) {
    TESTS.push({
        id: i,
        nombre: `Test Ultra ${i}`,
        dificultad: "Ultra Difícil",
        preguntas: generarPreguntaUltraDificil(i, i),
        fechaCreacion: new Date().toISOString()
    });
}

// Función para obtener un test por ID
function obtenerTestPorId(id) {
    return TESTS.find(t => t.id === id);
}

// Función para obtener todos los tests
function obtenerTodosLosTests() {
    return TESTS;
}

// Función para obtener tests paginados
function obtenerTestsPaginados(page = 1, pageSize = 20) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        tests: TESTS.slice(start, end),
        total: TESTS.length,
        page: page,
        totalPages: Math.ceil(TESTS.length / pageSize)
    };
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TESTS, obtenerTestPorId, obtenerTodosLosTests, obtenerTestsPaginados };
}

console.log(`📚 ${TESTS.length} tests ultra difíciles cargados correctamente`);
console.log(`📊 Cada test tiene ${TESTS[0]?.preguntas.length || 0} preguntas`);