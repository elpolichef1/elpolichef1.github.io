// ============================================
// SISTEMA DE ESTADÍSTICAS Y GRÁFICOS
// ============================================

// Función para obtener todas las estadísticas del usuario
function obtenerEstadisticasCompletas() {
    const currentUser = getCurrentUser();
    if (!currentUser) return null;
    
    // Obtener todos los tests realizados
    const tests = JSON.parse(localStorage.getItem('dgt_tests') || '[]');
    const testsUsuario = tests.filter(test => test.userId === currentUser.id);
    
    // Estadísticas generales
    const totalTests = testsUsuario.length;
    let totalAciertos = 0;
    let totalPreguntas = 0;
    let mejorResultado = 0;
    let peorResultado = 100;
    let temasEstudiados = new Set();
    
    // Estadísticas por tema
    const estadisticasPorTema = {};
    for (let i = 1; i <= 20; i++) {
        estadisticasPorTema[i] = { aciertos: 0, total: 0, tests: 0 };
    }
    
    testsUsuario.forEach(test => {
        totalAciertos += test.aciertos;
        totalPreguntas += test.total;
        const porcentaje = Math.round((test.aciertos / test.total) * 100);
        
        if (porcentaje > mejorResultado) mejorResultado = porcentaje;
        if (porcentaje < peorResultado) peorResultado = porcentaje;
        
        if (test.tema) {
            temasEstudiados.add(test.tema);
            estadisticasPorTema[test.tema].aciertos += test.aciertos;
            estadisticasPorTema[test.tema].total += test.total;
            estadisticasPorTema[test.tema].tests++;
        }
    });
    
    const porcentajeGlobal = totalPreguntas > 0 ? Math.round((totalAciertos / totalPreguntas) * 100) : 0;
    const testsAprobados = testsUsuario.filter(t => (t.aciertos / t.total) >= 0.9).length;
    const tasaAprobados = totalTests > 0 ? Math.round((testsAprobados / totalTests) * 100) : 0;
    
    return {
        totalTests,
        totalAciertos,
        totalPreguntas,
        porcentajeGlobal,
        mejorResultado,
        peorResultado: peorResultado === 100 ? 0 : peorResultado,
        temasEstudiados: temasEstudiados.size,
        testsAprobados,
        tasaAprobados,
        estadisticasPorTema,
        testsRecientes: testsUsuario.slice(-10).reverse()
    };
}

// Función para crear gráfico circular (donut chart)
function crearGraficoCircular(elementoId, porcentaje, colores = ['#fbbf24', '#e2e8f0']) {
    const canvas = document.getElementById(elementoId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const ancho = canvas.width;
    const alto = canvas.height;
    const centroX = ancho / 2;
    const centroY = alto / 2;
    const radio = Math.min(ancho, alto) / 2 - 5;
    
    ctx.clearRect(0, 0, ancho, alto);
    
    // Círculo de fondo (gris)
    ctx.beginPath();
    ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
    ctx.fillStyle = colores[1];
    ctx.fill();
    
    // Círculo de progreso (dorado)
    const anguloFinal = (porcentaje / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(centroX, centroY);
    ctx.arc(centroX, centroY, radio, -Math.PI / 2, -Math.PI / 2 + anguloFinal);
    ctx.lineTo(centroX, centroY);
    ctx.fillStyle = colores[0];
    ctx.fill();
    
    // Círculo interior blanco (efecto donut)
    ctx.beginPath();
    ctx.arc(centroX, centroY, radio * 0.6, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    
    // Texto del porcentaje
    ctx.font = `bold ${radio * 0.4}px 'Inter', sans-serif`;
    ctx.fillStyle = '#1e293b';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${porcentaje}%`, centroX, centroY);
}

// Función para crear gráfico de barras
function crearGraficoBarras(elementoId, datos, etiquetas) {
    const canvas = document.getElementById(elementoId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const ancho = canvas.width;
    const alto = canvas.height;
    const margenIzq = 40;
    const margenDer = 20;
    const margenSup = 20;
    const margenInf = 40;
    const anchoBarra = (ancho - margenIzq - margenDer) / datos.length * 0.7;
    const espacioBarra = (ancho - margenIzq - margenDer) / datos.length;
    
    ctx.clearRect(0, 0, ancho, alto);
    
    // Encontrar valor máximo
    const maxValor = Math.max(...datos, 1);
    
    // Dibujar barras
    for (let i = 0; i < datos.length; i++) {
        const x = margenIzq + i * espacioBarra + (espacioBarra - anchoBarra) / 2;
        const altura = (datos[i] / maxValor) * (alto - margenSup - margenInf);
        const y = alto - margenInf - altura;
        
        // Barra
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(x, y, anchoBarra, altura);
        
        // Etiqueta
        ctx.font = '10px "Inter", sans-serif';
        ctx.fillStyle = '#64748b';
        ctx.textAlign = 'center';
        ctx.fillText(etiquetas[i], x + anchoBarra / 2, alto - margenInf + 15);
        
        // Valor
        ctx.fillStyle = '#1e293b';
        ctx.fillText(`${datos[i]}%`, x + anchoBarra / 2, y - 5);
    }
    
    // Dibujar ejes
    ctx.beginPath();
    ctx.moveTo(margenIzq, margenSup);
    ctx.lineTo(margenIzq, alto - margenInf);
    ctx.lineTo(ancho - margenDer, alto - margenInf);
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
}

// Función para actualizar la página de perfil con estadísticas
function actualizarPerfilConEstadisticas() {
    const stats = obtenerEstadisticasCompletas();
    if (!stats) return;
    
    // Actualizar texto de estadísticas
    document.getElementById('totalTests').textContent = stats.totalTests;
    document.getElementById('totalAciertos').textContent = stats.totalAciertos;
    document.getElementById('totalPreguntas').textContent = stats.totalPreguntas;
    document.getElementById('porcentajeGlobal').textContent = `${stats.porcentajeGlobal}%`;
    document.getElementById('mejorResultado').textContent = `${stats.mejorResultado}%`;
    document.getElementById('peorResultado').textContent = `${stats.peorResultado}%`;
    document.getElementById('temasEstudiados').textContent = `${stats.temasEstudiados}/20`;
    document.getElementById('testsAprobados').textContent = stats.testsAprobados;
    document.getElementById('tasaAprobados').textContent = `${stats.tasaAprobados}%`;
    
    // Crear gráfico circular de progreso global
    crearGraficoCircular('graficoGlobal', stats.porcentajeGlobal);
    
    // Crear gráfico de rendimiento por temas (top 6)
    const temasRendimiento = [];
    const temasNombres = [];
    for (let i = 1; i <= 20; i++) {
        const tema = stats.estadisticasPorTema[i];
        if (tema.total > 0) {
            const porcentaje = Math.round((tema.aciertos / tema.total) * 100);
            temasRendimiento.push(porcentaje);
            temasNombres.push(`T${i}`);
        }
    }
    // Tomar solo los primeros 6 para el gráfico
    if (temasRendimiento.length > 0) {
        crearGraficoBarras('graficoTemas', temasRendimiento.slice(0, 8), temasNombres.slice(0, 8));
    }
    
    // Actualizar tests recientes
    const recentList = document.getElementById('recentTestsList');
    if (recentList && stats.testsRecientes.length > 0) {
        recentList.innerHTML = stats.testsRecientes.map(test => {
            const fecha = new Date(test.fecha).toLocaleDateString('es-ES');
            const porcentaje = Math.round((test.aciertos / test.total) * 100);
            const aprobado = porcentaje >= 90;
            const tipo = test.tema ? `Tema ${test.tema}` : (test.tipo || 'Test');
            return `
                <div class="test-reciente-item ${aprobado ? 'aprobado' : 'suspendido'}">
                    <div class="test-reciente-info">
                        <span class="test-reciente-tipo">${tipo}</span>
                        <span class="test-reciente-fecha">${fecha}</span>
                    </div>
                    <div class="test-reciente-resultado">
                        <span class="test-reciente-aciertos">${test.aciertos}/${test.total}</span>
                        <span class="test-reciente-porcentaje ${aprobado ? 'aprobado-text' : 'suspendido-text'}">${porcentaje}%</span>
                        <span class="test-reciente-estado">${aprobado ? '✅ Aprobado' : '❌ Suspendido'}</span>
                    </div>
                </div>
            `;
        }).join('');
    } else if (recentList) {
        recentList.innerHTML = '<div class="empty-tests"><i class="fas fa-clipboard-list"></i><p>No has realizado ningún test aún. ¡Empieza a practicar!</p></div>';
    }
}

// Función para actualizar el progreso de temas
function actualizarProgresoTemas() {
    const progreso = localStorage.getItem('aprobadoya_progreso');
    const temasCompletados = progreso ? Object.values(JSON.parse(progreso)).filter(v => v === true).length : 0;
    const porcentaje = Math.round((temasCompletados / 20) * 100);
    
    const temasProgressFill = document.getElementById('temasProgressFill');
    const temasProgressText = document.getElementById('temasProgressText');
    if (temasProgressFill) temasProgressFill.style.width = `${porcentaje}%`;
    if (temasProgressText) temasProgressText.textContent = `${temasCompletados}/20 temas (${porcentaje}%)`;
}

// Función para actualizar el progreso de tests
function actualizarProgresoTests() {
    const tests = JSON.parse(localStorage.getItem('dgt_tests') || '[]');
    const totalTests = tests.length;
    const objetivoTests = 50;
    const porcentaje = Math.min(Math.round((totalTests / objetivoTests) * 100), 100);
    
    const testsProgressFill = document.getElementById('testsProgressFill');
    const testsProgressText = document.getElementById('testsProgressText');
    if (testsProgressFill) testsProgressFill.style.width = `${porcentaje}%`;
    if (testsProgressText) testsProgressText.textContent = `${totalTests}/${objetivoTests} tests (${porcentaje}%)`;
}