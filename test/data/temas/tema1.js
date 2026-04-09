// test/data/temas/tema1.js
// TEMA 1: DOCUMENTACIÓN Y PERMISOS DE CONDUCIR - 200 PREGUNTAS

export const tema1 = [
    // ==================== DOCUMENTACIÓN OBLIGATORIA ====================
    {
        id: 1,
        texto: "¿Qué documentos debe llevar obligatoriamente un conductor?",
        opciones: ["Permiso de conducir", "Permiso de circulación", "Permiso de conducir y permiso de circulación", "Permiso de conducir, permiso de circulación e ITV en vigor"],
        correcta: 3,
        explicacion: "Debe llevar permiso de conducir, permiso de circulación y la ITV en vigor.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 2,
        texto: "¿Cuánto tiempo tienes para presentar los documentos si no los llevas encima?",
        opciones: ["5 días", "10 días", "15 días", "20 días"],
        correcta: 1,
        explicacion: "Tienes 10 días hábiles para presentar la documentación en una Jefatura de Tráfico.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 3,
        texto: "¿Qué documento acredita la titularidad del vehículo?",
        opciones: ["Permiso de circulación", "Permiso de conducir", "Informe de ITV", "Certificado de seguro"],
        correcta: 0,
        explicacion: "El permiso de circulación acredita la titularidad del vehículo.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 4,
        texto: "¿Qué documento acredita que el conductor está autorizado para conducir?",
        opciones: ["Permiso de circulación", "Permiso de conducir", "DNI", "Tarjeta ITV"],
        correcta: 1,
        explicacion: "El permiso de conducir acredita que está autorizado para conducir.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 5,
        texto: "¿Dónde debe colocarse la pegatina de la ITV?",
        opciones: ["En el maletero", "En la guantera", "En la luna delantera derecha", "En la luna trasera"],
        correcta: 2,
        explicacion: "La pegatina de la ITV debe colocarse en la luna delantera derecha (desde el interior del vehículo).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 6,
        texto: "¿Qué sanción tiene no llevar el permiso de conducir?",
        opciones: ["100 €", "200 €", "500 €", "No hay sanción si lo presentas después"],
        correcta: 0,
        explicacion: "No llevar el permiso de conducir tiene una sanción de 100 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 7,
        texto: "¿Qué sanción tiene no llevar la ITV en vigor?",
        opciones: ["100 €", "200 €", "500 €", "Inmovilización del vehículo"],
        correcta: 1,
        explicacion: "No llevar la ITV en vigor tiene una sanción de 200 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 8,
        texto: "¿Qué sanción tiene no llevar el permiso de circulación?",
        opciones: ["100 €", "200 €", "500 €", "10 €"],
        correcta: 0,
        explicacion: "No llevar el permiso de circulación tiene una sanción de 100 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 9,
        texto: "¿Se puede conducir con el permiso de conducir caducado?",
        opciones: ["Sí", "No", "Sí, durante 30 días", "Sí, durante 15 días"],
        correcta: 1,
        explicacion: "No se puede conducir con el permiso caducado.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 10,
        texto: "¿Qué plazo tienes para renovar el permiso de conducir después de caducar?",
        opciones: ["15 días", "30 días", "3 meses", "No hay plazo, caduca automáticamente"],
        correcta: 3,
        explicacion: "Si caduca, no puedes conducir hasta renovarlo. No hay plazo de gracia.",
        tema: 1,
        dificultad: "media"
    },

    // ==================== PERMISOS DE CONDUCIR ====================
    {
        id: 11,
        texto: "¿Qué vehículos se pueden conducir con el permiso B?",
        opciones: ["Turismos hasta 3500 kg y 9 plazas", "Camiones", "Autobuses", "Motocicletas de cualquier cilindrada"],
        correcta: 0,
        explicacion: "El permiso B permite conducir turismos hasta 3500 kg y 9 plazas (incluido el conductor).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 12,
        texto: "¿Qué vehículos se pueden conducir con el permiso A?",
        opciones: ["Turismos", "Camiones", "Motocicletas", "Ciclomotores"],
        correcta: 2,
        explicacion: "El permiso A permite conducir motocicletas sin límite de cilindrada.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 13,
        texto: "¿Qué vehículos se pueden conducir con el permiso C?",
        opciones: ["Turismos", "Camiones", "Motocicletas", "Autobuses"],
        correcta: 1,
        explicacion: "El permiso C permite conducir camiones de más de 3500 kg.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 14,
        texto: "¿Qué vehículos se pueden conducir con el permiso D?",
        opciones: ["Turismos", "Camiones", "Motocicletas", "Autobuses"],
        correcta: 3,
        explicacion: "El permiso D permite conducir autobuses de más de 9 plazas.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 15,
        texto: "¿Con qué permiso se puede conducir un turismo con remolque de más de 750 kg?",
        opciones: ["B", "B+E", "C", "D"],
        correcta: 1,
        explicacion: "El permiso B+E permite conducir turismo con remolque de más de 750 kg (conjunto hasta 3500 kg).",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 16,
        texto: "¿A qué edad se puede obtener el permiso B?",
        opciones: ["16 años", "17 años", "18 años", "21 años"],
        correcta: 2,
        explicacion: "El permiso B se puede obtener a los 18 años cumplidos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 17,
        texto: "¿A qué edad se puede obtener el permiso A (ilimitado)?",
        opciones: ["18 años", "20 años", "21 años", "24 años"],
        correcta: 1,
        explicacion: "El permiso A ilimitado se puede obtener a los 20 años, con 2 años de antigüedad en A2.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 18,
        texto: "¿A qué edad se puede obtener el permiso C?",
        opciones: ["18 años", "21 años", "24 años", "25 años"],
        correcta: 1,
        explicacion: "El permiso C se puede obtener a los 21 años.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 19,
        texto: "¿A qué edad se puede obtener el permiso D?",
        opciones: ["21 años", "24 años", "25 años", "30 años"],
        correcta: 1,
        explicacion: "El permiso D se puede obtener a los 24 años.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 20,
        texto: "¿Qué permiso necesitas para conducir una moto de 125cc?",
        opciones: ["A1", "A2", "A", "B con 3 años de antigüedad"],
        correcta: 0,
        explicacion: "El permiso A1 permite conducir motos de hasta 125cc (hasta 15 CV).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 21,
        texto: "¿Qué vehículos se pueden conducir con el permiso BTP?",
        opciones: ["Tractores", "Quads y motocarros", "Camiones", "Autobuses"],
        correcta: 1,
        explicacion: "El permiso BTP permite conducir quads, motocarros y vehículos de tres ruedas.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 22,
        texto: "¿A qué edad se puede obtener el permiso BTP?",
        opciones: ["14 años", "15 años", "16 años", "18 años"],
        correcta: 2,
        explicacion: "El permiso BTP se puede obtener a los 16 años.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 23,
        texto: "¿Qué vehículos se pueden conducir con el permiso AM?",
        opciones: ["Ciclomotores y motos hasta 50cc", "Turismos", "Camiones", "Quads"],
        correcta: 0,
        explicacion: "El permiso AM permite conducir ciclomotores y motos de hasta 50cc.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 24,
        texto: "¿A qué edad se puede obtener el permiso AM?",
        opciones: ["14 años", "15 años", "16 años", "18 años"],
        correcta: 1,
        explicacion: "El permiso AM se puede obtener a los 15 años.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 25,
        texto: "¿Puede un conductor con permiso B conducir una moto de 125cc?",
        opciones: ["Sí", "No", "Sí, con 3 años de antigüedad", "Sí, con 5 años de antigüedad"],
        correcta: 2,
        explicacion: "Sí, si tiene 3 años de antigüedad en el permiso B.",
        tema: 1,
        dificultad: "media"
    },

    // ==================== PERIODO DE PRÁCTICAS ====================
    {
        id: 26,
        texto: "¿Cuánto dura el periodo de prácticas para el permiso B?",
        opciones: ["6 meses", "1 año", "2 años", "3 años"],
        correcta: 1,
        explicacion: "El periodo de prácticas para el permiso B es de 1 año.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 27,
        texto: "¿Qué velocidad máxima puede circular un conductor novel en autovía?",
        opciones: ["90 km/h", "100 km/h", "110 km/h", "120 km/h"],
        correcta: 0,
        explicacion: "Los conductores noveles tienen limitada su velocidad a 90 km/h en autovía.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 28,
        texto: "¿Qué velocidad máxima puede circular un conductor novel en carretera convencional?",
        opciones: ["70 km/h", "80 km/h", "90 km/h", "100 km/h"],
        correcta: 1,
        explicacion: "Los conductores noveles tienen limitada su velocidad a 80 km/h en carretera convencional.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 29,
        texto: "¿Qué distintivo deben llevar los conductores noveles?",
        opciones: ["Señal V-13", "Señal V-1", "Señal V-2", "Señal V-3"],
        correcta: 0,
        explicacion: "Los conductores noveles deben llevar la señal V-13 (triángulo con una L).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 30,
        texto: "¿Dónde debe colocarse la señal de conductor novel?",
        opciones: ["En el maletero", "En la luna trasera", "En la guantera", "En el techo"],
        correcta: 1,
        explicacion: "La señal V-13 debe colocarse en la luna trasera, visible por detrás.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 31,
        texto: "¿Cuántos puntos tiene inicialmente un conductor novel?",
        opciones: ["6 puntos", "8 puntos", "10 puntos", "12 puntos"],
        correcta: 1,
        explicacion: "Un conductor novel tiene inicialmente 8 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 32,
        texto: "¿Qué alcoholemia máxima puede tener un conductor novel?",
        opciones: ["0,15 g/l", "0,25 g/l", "0,30 g/l", "0,50 g/l"],
        correcta: 0,
        explicacion: "Los conductores noveles tienen una tasa máxima de 0,15 g/l en sangre.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 33,
        texto: "¿Qué sanción tiene no llevar la señal de conductor novel?",
        opciones: ["80 €", "100 €", "200 €", "300 €"],
        correcta: 1,
        explicacion: "No llevar la señal V-13 tiene una sanción de 100 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 34,
        texto: "¿Puede un conductor novel acompañar a otro conductor novel?",
        opciones: ["Sí", "No", "Sí, con un acompañante mayor de 25 años", "Sí, solo de día"],
        correcta: 1,
        explicacion: "Un conductor novel no puede acompañar a otro conductor novel.",
        tema: 1,
        dificultad: "dificil"
    },
    {
        id: 35,
        texto: "¿Cuándo pierde la condición de conductor novel?",
        opciones: ["Al cumplir 1 año", "Al cumplir 2 años", "Al cumplir 3 años", "Al cumplir 18 años"],
        correcta: 0,
        explicacion: "Pierde la condición de conductor novel al cumplir 1 año desde la obtención del permiso.",
        tema: 1,
        dificultad: "facil"
    },

    // ==================== PUNTOS DEL CARNET ====================
    {
        id: 36,
        texto: "¿Con cuántos puntos se obtiene el carnet por primera vez?",
        opciones: ["6 puntos", "8 puntos", "10 puntos", "12 puntos"],
        correcta: 1,
        explicacion: "Por primera vez se obtiene con 8 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 37,
        texto: "¿Cuántos puntos tiene un conductor experimentado?",
        opciones: ["8 puntos", "10 puntos", "12 puntos", "15 puntos"],
        correcta: 2,
        explicacion: "Un conductor experimentado tiene 12 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 38,
        texto: "¿Cuántos puntos se pueden recuperar con un curso de sensibilización?",
        opciones: ["2 puntos", "4 puntos", "6 puntos", "8 puntos"],
        correcta: 2,
        explicacion: "Con un curso se pueden recuperar hasta 6 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 39,
        texto: "¿Cada cuánto tiempo se pueden hacer cursos de recuperación de puntos?",
        opciones: ["Cada 6 meses", "Cada 1 año", "Cada 2 años", "Cada 3 años"],
        correcta: 2,
        explicacion: "Se pueden hacer cursos cada 2 años.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 40,
        texto: "¿Qué sanción tiene conducir sin puntos?",
        opciones: ["Multa de 500 €", "Multa de 1.000 €", "Multa de 6.000 € y prisión", "Multa de 500 € y prisión"],
        correcta: 2,
        explicacion: "Conducir sin puntos es delito penal con multa de 6.000 € y prisión de 3 a 6 meses.",
        tema: 1,
        dificultad: "dificil"
    },
    {
        id: 41,
        texto: "¿Puedes recuperar puntos si no has perdido ninguno?",
        opciones: ["Sí, hasta 2 puntos", "Sí, hasta 4 puntos", "Sí, hasta 6 puntos", "No, solo si has perdido"],
        correcta: 2,
        explicacion: "Puedes recuperar hasta 6 puntos sin haber perdido ninguno mediante cursos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 42,
        texto: "¿Cuántos puntos se pierden por usar el móvil al volante?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 2,
        explicacion: "Usar el móvil al volante (sujetándolo) resta 4 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 43,
        texto: "¿Cuántos puntos se pierden por no usar el cinturón de seguridad?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 1,
        explicacion: "No usar el cinturón de seguridad (o no usarlo correctamente) resta 3 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 44,
        texto: "¿Cuántos puntos se pierden por superar la velocidad máxima en 30 km/h en vía urbana?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 2,
        explicacion: "Superar en 30 km/h el límite en vía urbana resta 4 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 45,
        texto: "¿Cuántos puntos se pierden por dar positivo en alcohol?",
        opciones: ["2 puntos", "4 puntos", "6 puntos", "8 puntos"],
        correcta: 1,
        explicacion: "Dar positivo en alcohol (0,25-0,50 mg/l) resta 4 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 46,
        texto: "¿Cuántos puntos se pierden por dar positivo en drogas?",
        opciones: ["2 puntos", "4 puntos", "6 puntos", "8 puntos"],
        correcta: 2,
        explicacion: "Dar positivo en drogas resta 6 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 47,
        texto: "¿Cuántos puntos se pierden por conducir temerariamente?",
        opciones: ["4 puntos", "6 puntos", "8 puntos", "10 puntos"],
        correcta: 1,
        explicacion: "Conducir temerariamente (poniendo en peligro a otros) resta 6 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 48,
        texto: "¿Cuántos puntos se pierden por participar en carreras ilegales?",
        opciones: ["4 puntos", "6 puntos", "8 puntos", "10 puntos"],
        correcta: 1,
        explicacion: "Participar en carreras ilegales resta 6 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 49,
        texto: "¿Cuántos puntos se pierden por saltarse un semáforo en rojo?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 2,
        explicacion: "Saltarse un semáforo en rojo resta 4 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 50,
        texto: "¿Cuántos puntos se pierden por no respetar la prioridad de paso?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 1,
        explicacion: "No respetar la prioridad de paso resta 3 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 51,
        texto: "¿Cuántos puntos se pierden por adelantar en curva sin visibilidad?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 1,
        explicacion: "Adelantar en curva sin visibilidad resta 4 puntos (infracción grave).",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 52,
        texto: "¿Cuántos puntos se pierden por no mantener la distancia de seguridad?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 1,
        explicacion: "No mantener la distancia de seguridad resta 3 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 53,
        texto: "¿Cuántos puntos se pierden por usar auriculares al volante?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 1,
        explicacion: "Usar auriculares o cascos al volante resta 3 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 54,
        texto: "¿Cuántos puntos se pierden por no llevar casco en moto?",
        opciones: ["2 puntos", "3 puntos", "4 puntos", "6 puntos"],
        correcta: 0,
        explicacion: "No llevar casco en moto (o llevarlo mal puesto) resta 2 puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 55,
        texto: "¿Puede un conductor con 0 puntos recuperar el carnet?",
        opciones: ["Sí", "No", "Sí, con curso", "Sí, esperando 6 meses"],
        correcta: 2,
        explicacion: "Sí, realizando un curso de sensibilización y recuperación de puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 56,
        texto: "¿Cuánto tiempo debe esperar para recuperar el carnet tras perder todos los puntos?",
        opciones: ["3 meses", "6 meses", "1 año", "2 años"],
        correcta: 1,
        explicacion: "Debe esperar 6 meses antes de poder realizar el curso de recuperación.",
        tema: 1,
        dificultad: "dificil"
    },
    {
        id: 57,
        texto: "¿Qué curso debe hacer para recuperar puntos?",
        opciones: ["Curso de conducción", "Curso de sensibilización", "Curso de mecánica", "Curso de primeros auxilios"],
        correcta: 1,
        explicacion: "Debe hacer un curso de sensibilización y recuperación de puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 58,
        texto: "¿Cuántas horas dura el curso de sensibilización?",
        opciones: ["8 horas", "12 horas", "16 horas", "24 horas"],
        correcta: 3,
        explicacion: "El curso de recuperación de puntos dura 24 horas.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 59,
        texto: "¿Se puede recuperar puntos sin hacer curso?",
        opciones: ["Sí, con el tiempo", "No", "Sí, pagando multa", "Sí, con examen"],
        correcta: 0,
        explicacion: "Sí, si no cometes infracciones durante 2 años recuperas puntos automáticamente.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 60,
        texto: "¿Cuántos puntos recuperas por no cometer infracciones en 2 años?",
        opciones: ["4 puntos", "6 puntos", "8 puntos", "10 puntos"],
        correcta: 2,
        explicacion: "Recuperas 8 puntos si no cometes infracciones en 2 años (hasta el saldo inicial).",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 61,
        texto: "¿Cuántos puntos recuperas por no cometer infracciones en 3 años?",
        opciones: ["10 puntos", "12 puntos", "14 puntos", "16 puntos"],
        correcta: 1,
        explicacion: "Recuperas el saldo inicial de 12 puntos.",
        tema: 1,
        dificultad: "media"
    },

    // ==================== SEGURO OBLIGATORIO ====================
    {
        id: 62,
        texto: "¿Es obligatorio tener seguro de responsabilidad civil?",
        opciones: ["Sí", "No", "Solo para turismos", "Solo para motos"],
        correcta: 0,
        explicacion: "Es obligatorio para todos los vehículos a motor.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 63,
        texto: "¿Qué cubre el seguro obligatorio?",
        opciones: ["Daños propios", "Responsabilidad civil a terceros", "Robo", "Incendio"],
        correcta: 1,
        explicacion: "El seguro obligatorio cubre la responsabilidad civil a terceros (daños que causes).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 64,
        texto: "¿Qué sanción tiene circular sin seguro?",
        opciones: ["Multa de 500 €", "Multa de 1.000 €", "Multa de 2.000 € e inmovilización", "Multa de 3.000 €"],
        correcta: 2,
        explicacion: "Circular sin seguro tiene multa de 2.000 € e inmovilización del vehículo.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 65,
        texto: "¿Dónde se debe llevar el comprobante del seguro?",
        opciones: ["En el vehículo", "En casa", "En la Jefatura", "No es necesario llevarlo"],
        correcta: 0,
        explicacion: "El comprobante del seguro debe llevarse en el vehículo (físico o digital).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 66,
        texto: "¿Qué documento acredita que el vehículo tiene seguro?",
        opciones: ["Tarjeta de la ITV", "Permiso de circulación", "Certificado del seguro", "Factura de compra"],
        correcta: 2,
        explicacion: "El certificado del seguro (tarjeta verde) acredita que el vehículo está asegurado.",
        tema: 1,
        dificultad: "facil"
    },

    // ==================== ITV (INSPECCIÓN TÉCNICA) ====================
    {
        id: 67,
        texto: "¿Cada cuánto tiempo pasa la ITV un turismo nuevo?",
        opciones: ["2 años", "3 años", "4 años", "5 años"],
        correcta: 2,
        explicacion: "Un turismo nuevo pasa la ITV a los 4 años de su primera matriculación.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 68,
        texto: "¿Cada cuánto tiempo pasa la ITV un turismo de 4 a 10 años?",
        opciones: ["Cada 1 año", "Cada 2 años", "Cada 3 años", "Cada 4 años"],
        correcta: 1,
        explicacion: "De 4 a 10 años pasa ITV cada 2 años.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 69,
        texto: "¿Cada cuánto tiempo pasa la ITV un turismo de más de 10 años?",
        opciones: ["Cada 6 meses", "Cada 1 año", "Cada 2 años", "Cada 3 años"],
        correcta: 1,
        explicacion: "Los turismos de más de 10 años pasan ITV cada año.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 70,
        texto: "¿Se puede circular con la ITV caducada?",
        opciones: ["Sí", "No", "Sí, durante 15 días", "Sí, durante 30 días"],
        correcta: 1,
        explicacion: "No se puede circular con la ITV caducada. Es una infracción grave.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 71,
        texto: "¿Qué significa ITV desfavorable?",
        opciones: ["No puede circular", "Puede circular con limitaciones", "Debe repetir la ITV", "No puede circular hasta reparar"],
        correcta: 3,
        explicacion: "Con ITV desfavorable no puede circular hasta reparar los defectos y pasar revisión.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 72,
        texto: "¿Qué significa ITV negativa?",
        opciones: ["No puede circular", "Puede circular con limitaciones", "Debe repetir en 2 meses", "No puede circular hasta reparar"],
        correcta: 3,
        explicacion: "Con ITV negativa (defectos graves) no puede circular hasta reparar y pasar nueva ITV.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 73,
        texto: "¿Cuánto tiempo tienes para reparar un defecto leve de ITV?",
        opciones: ["15 días", "1 mes", "2 meses", "3 meses"],
        correcta: 2,
        explicacion: "Para un defecto leve tienes 2 meses para reparar sin necesidad de pasar ITV nuevamente.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 74,
        texto: "¿Qué sanción tiene circular con ITV desfavorable?",
        opciones: ["200 €", "500 €", "1.000 €", "Inmovilización"],
        correcta: 0,
        explicacion: "Circular con ITV desfavorable tiene sanción de 200 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 75,
        texto: "¿Qué sanción tiene circular con ITV negativa?",
        opciones: ["200 € e inmovilización", "500 € e inmovilización", "1.000 €", "Solo inmovilización"],
        correcta: 1,
        explicacion: "Circular con ITV negativa tiene sanción de 500 € e inmovilización del vehículo.",
        tema: 1,
        dificultad: "media"
    },

    // ==================== ALCOHOL Y DROGAS ====================
    {
        id: 76,
        texto: "¿Cuál es la tasa máxima de alcohol para conductores particulares?",
        opciones: ["0,15 g/l", "0,25 g/l", "0,30 g/l", "0,50 g/l"],
        correcta: 3,
        explicacion: "La tasa máxima es 0,50 g/l en sangre o 0,25 mg/l en aire espirado.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 77,
        texto: "¿Cuál es la tasa máxima de alcohol para conductores profesionales?",
        opciones: ["0,15 g/l", "0,25 g/l", "0,30 g/l", "0,50 g/l"],
        correcta: 1,
        explicacion: "Los conductores profesionales (camiones, autobuses, taxis) tienen tasa máxima de 0,25 g/l.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 78,
        texto: "¿Cuál es la tasa máxima de alcohol para conductores noveles?",
        opciones: ["0,15 g/l", "0,25 g/l", "0,30 g/l", "0,50 g/l"],
        correcta: 0,
        explicacion: "Los conductores noveles (primer año) tienen tasa máxima de 0,15 g/l.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 79,
        texto: "¿Está permitido conducir bajo los efectos de las drogas?",
        opciones: ["Sí", "No", "Sí, si son medicinales", "Sí, en pequeñas cantidades"],
        correcta: 1,
        explicacion: "Está totalmente prohibido conducir bajo los efectos de cualquier tipo de droga.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 80,
        texto: "¿Qué sanción tiene dar positivo en alcohol (0,25-0,50 mg/l)?",
        opciones: ["500 € y 4 puntos", "500 € y 6 puntos", "1000 € y 6 puntos", "2000 € y 8 puntos"],
        correcta: 0,
        explicacion: "Dar positivo en alcohol (entre 0,25-0,50 mg/l) tiene sanción de 500 € y 4 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 81,
        texto: "¿Qué sanción tiene dar positivo en alcohol (más de 0,50 mg/l)?",
        opciones: ["500 € y 4 puntos", "500 € y 6 puntos", "1000 € y 6 puntos", "2000 € y 8 puntos"],
        correcta: 1,
        explicacion: "Dar positivo en alcohol (más de 0,50 mg/l) tiene sanción de 500 € y 6 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 82,
        texto: "¿Qué sanción tiene dar positivo en drogas?",
        opciones: ["500 € y 4 puntos", "1000 € y 6 puntos", "1500 € y 8 puntos", "2000 € y 10 puntos"],
        correcta: 1,
        explicacion: "Dar positivo en drogas tiene sanción de 1000 € y 6 puntos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 83,
        texto: "¿Puedes negarte a realizar la prueba de alcoholemia?",
        opciones: ["Sí", "No", "Sí, si es por la noche", "Sí, si tienes prisa"],
        correcta: 1,
        explicacion: "Negarse a realizar la prueba es delito penal (negativa a someterse a las pruebas).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 84,
        texto: "¿Qué es el delito de negativa a la prueba de alcoholemia?",
        opciones: ["Multa de 500 €", "Multa de 1000 €", "Prisión de 6 meses a 1 año", "Prisión de 1 a 3 años"],
        correcta: 2,
        explicacion: "La negativa es delito con prisión de 6 meses a 1 año y multa.",
        tema: 1,
        dificultad: "dificil"
    },
    {
        id: 85,
        texto: "¿A quién pueden someter a la prueba de alcoholemia?",
        opciones: ["Solo a conductores", "A conductores y peatones", "A cualquier usuario de la vía", "Solo a profesionales"],
        correcta: 2,
        explicacion: "Pueden someter a cualquier usuario de la vía (conductores, peatones, ciclistas, etc.).",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 86,
        texto: "¿Cuánto tiempo tarda el cuerpo en eliminar el alcohol?",
        opciones: ["0,1 g/l por hora", "0,2 g/l por hora", "0,3 g/l por hora", "0,5 g/l por hora"],
        correcta: 0,
        explicacion: "El cuerpo elimina aproximadamente 0,1 g/l de alcohol por hora (muy lento).",
        tema: 1,
        dificultad: "dificil"
    },

    // ==================== RENOVACIÓN DEL PERMISO ====================
    {
        id: 87,
        texto: "¿Cada cuánto tiempo se renueva el permiso B para menores de 65 años?",
        opciones: ["5 años", "10 años", "15 años", "20 años"],
        correcta: 1,
        explicacion: "Para menores de 65 años se renueva cada 10 años.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 88,
        texto: "¿Cada cuánto tiempo se renueva el permiso B para mayores de 65 años?",
        opciones: ["2 años", "3 años", "5 años", "10 años"],
        correcta: 2,
        explicacion: "Para mayores de 65 años se renueva cada 5 años.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 89,
        texto: "¿Cada cuánto tiempo se renueva el permiso C y D?",
        opciones: ["2 años", "3 años", "5 años", "10 años"],
        correcta: 2,
        explicacion: "Los permisos profesionales (C y D) se renuevan cada 5 años.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 90,
        texto: "¿Qué requisitos hay para renovar el permiso?",
        opciones: ["Examen teórico", "Examen práctico", "Informe psicotécnico", "Examen médico"],
        correcta: 3,
        explicacion: "Para renovar se necesita un examen médico (reconocimiento psicofísico).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 91,
        texto: "¿Se puede conducir con el permiso caducado mientras se renueva?",
        opciones: ["Sí", "No", "Sí, durante 30 días", "Sí, con justificante"],
        correcta: 1,
        explicacion: "No se puede conducir con el permiso caducado, ni siquiera mientras se renueva.",
        tema: 1,
        dificultad: "facil"
    },

    // ==================== PERMISOS EXTRANJEROS ====================
    {
        id: 92,
        texto: "¿Puede un turista conducir en España con su permiso extranjero?",
        opciones: ["Sí", "No", "Solo si es de la UE", "Solo durante 3 meses"],
        correcta: 0,
        explicacion: "Los turistas pueden conducir con su permiso válido durante 6 meses.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 93,
        texto: "¿Cuánto tiempo puede conducir un residente extranjero con su permiso original?",
        opciones: ["3 meses", "6 meses", "1 año", "2 años"],
        correcta: 1,
        explicacion: "Los residentes extranjeros tienen 6 meses para canjear su permiso por uno español.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 94,
        texto: "¿Los permisos de la UE son válidos en España?",
        opciones: ["Sí", "No", "Solo algunos", "Depende del país"],
        correcta: 0,
        explicacion: "Los permisos de la UE son válidos en toda la Unión Europea.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 95,
        texto: "¿Qué permiso internacional necesitas fuera de la UE?",
        opciones: ["Permiso internacional", "Permiso especial", "Ninguno", "Visado"],
        correcta: 0,
        explicacion: "Fuera de la UE se necesita el Permiso Internacional (además del nacional).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 96,
        texto: "¿Dónde se puede obtener el Permiso Internacional?",
        opciones: ["Jefatura de Tráfico", "Ayuntamiento", "Policía Local", "Notaría"],
        correcta: 0,
        explicacion: "El Permiso Internacional se obtiene en la Jefatura de Tráfico.",
        tema: 1,
        dificultad: "facil"
    },

    // ==================== EDADES PARA CONDUCIR ====================
    {
        id: 97,
        texto: "¿A qué edad se puede conducir un ciclomotor?",
        opciones: ["14 años", "15 años", "16 años", "18 años"],
        correcta: 1,
        explicacion: "Los ciclomotores se pueden conducir desde los 15 años (permiso AM).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 98,
        texto: "¿A qué edad se puede conducir un quad?",
        opciones: ["14 años", "15 años", "16 años", "18 años"],
        correcta: 2,
        explicacion: "Los quads se pueden conducir desde los 16 años (permiso BTP).",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 99,
        texto: "¿A qué edad se puede conducir un turismo?",
        opciones: ["16 años", "17 años", "18 años", "21 años"],
        correcta: 2,
        explicacion: "Los turismos se pueden conducir desde los 18 años (permiso B).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 100,
        texto: "¿A qué edad se puede obtener el permiso A2?",
        opciones: ["16 años", "18 años", "20 años", "21 años"],
        correcta: 1,
        explicacion: "El permiso A2 (motos hasta 47 CV) se puede obtener a los 18 años.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 101,
        texto: "¿A qué edad se puede obtener el permiso A ilimitado?",
        opciones: ["18 años", "20 años", "21 años", "24 años"],
        correcta: 1,
        explicacion: "El permiso A ilimitado se puede obtener a los 20 años (con 2 años de experiencia en A2).",
        tema: 1,
        dificultad: "media"
    },

    // ==================== DOCUMENTOS DEL VEHÍCULO ====================
    {
        id: 102,
        texto: "¿Qué es la tarjeta de inspección técnica?",
        opciones: ["Permiso de circulación", "Ficha técnica", "Certificado de ITV", "Seguro"],
        correcta: 1,
        explicacion: "La tarjeta de inspección técnica es la ficha técnica del vehículo.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 103,
        texto: "¿Qué datos contiene el permiso de circulación?",
        opciones: ["Conductor", "Propietario y características", "Seguro", "Última ITV"],
        correcta: 1,
        explicacion: "El permiso de circulación contiene datos del propietario y características del vehículo.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 104,
        texto: "¿Qué documento debe llevar un remolque?",
        opciones: ["Permiso de circulación", "Ficha técnica", "Ambos", "Ninguno"],
        correcta: 2,
        explicacion: "Los remolques deben llevar permiso de circulación y ficha técnica.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 105,
        texto: "¿Qué plazo hay para notificar un cambio de domicilio?",
        opciones: ["15 días", "30 días", "45 días", "60 días"],
        correcta: 0,
        explicacion: "Hay 15 días para notificar el cambio de domicilio a Tráfico.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 106,
        texto: "¿Qué plazo hay para notificar la venta del vehículo?",
        opciones: ["5 días", "10 días", "15 días", "30 días"],
        correcta: 1,
        explicacion: "Hay 10 días para notificar la venta del vehículo.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 107,
        texto: "¿Qué es la transferencia de vehículo?",
        opciones: ["Cambio de propietario", "Cambio de seguro", "Cambio de ITV", "Cambio de matrícula"],
        correcta: 0,
        explicacion: "La transferencia es el cambio de titularidad del vehículo.",
        tema: 1,
        dificultad: "facil"
    },

    // ==================== SANCIONES GENERALES ====================
    {
        id: 108,
        texto: "¿Qué es una sanción leve?",
        opciones: ["Hasta 100 €", "Hasta 200 €", "Hasta 500 €", "Más de 500 €"],
        correcta: 0,
        explicacion: "Las sanciones leves son de hasta 100 €.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 109,
        texto: "¿Qué es una sanción grave?",
        opciones: ["100 € a 200 €", "200 € a 500 €", "500 € a 1.000 €", "Más de 1.000 €"],
        correcta: 1,
        explicacion: "Las sanciones graves son de 200 € a 500 €.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 110,
        texto: "¿Qué es una sanción muy grave?",
        opciones: ["200 € a 500 €", "500 € a 1.000 €", "Más de 500 €", "Más de 1.000 €"],
        correcta: 1,
        explicacion: "Las sanciones muy graves son de 500 € a 1.000 €.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 111,
        texto: "¿Tienes descuento por pronto pago?",
        opciones: ["20%", "30%", "50%", "No hay descuento"],
        correcta: 2,
        explicacion: "Por pronto pago (dentro de los 20 días naturales) tienes un 50% de descuento.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 112,
        texto: "¿Cuánto tiempo tienes para el pronto pago?",
        opciones: ["10 días", "15 días", "20 días", "30 días"],
        correcta: 2,
        explicacion: "Tienes 20 días naturales para acogerte al pronto pago con 50% descuento.",
        tema: 1,
        dificultad: "media"
    },

    // ==================== ALQUILER DE VEHÍCULOS ====================
    {
        id: 113,
        texto: "¿Qué documentos necesita para alquilar un vehículo?",
        opciones: ["Permiso de conducir y DNI", "Permiso de conducir y tarjeta", "Permiso de conducir y seguro", "DNI y tarjeta"],
        correcta: 0,
        explicacion: "Necesita permiso de conducir en vigor y DNI o pasaporte.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 114,
        texto: "¿Puede alquilar un vehículo un conductor novel?",
        opciones: ["Sí", "No", "Sí, con suplemento", "Depende de la empresa"],
        correcta: 2,
        explicacion: "Sí, pero suele tener un suplemento por juventud o menor experiencia.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 115,
        texto: "¿Qué seguro debe tener un vehículo de alquiler?",
        opciones: ["Seguro a terceros", "Seguro a todo riesgo", "Ambos son posibles", "Ninguno"],
        correcta: 2,
        explicacion: "Puede tener seguro a terceros (obligatorio) o a todo riesgo (voluntario).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 116,
        texto: "¿Quién es responsable de las multas en un vehículo alquilado?",
        opciones: ["El conductor", "La empresa de alquiler", "Ambos", "El propietario"],
        correcta: 0,
        explicacion: "El conductor es el responsable de las multas, aunque la empresa facilita sus datos.",
        tema: 1,
        dificultad: "facil"
    },

    // ==================== VEHÍCULOS PRIORITARIOS ====================
    {
        id: 117,
        texto: "¿Qué vehículos tienen prioridad de paso?",
        opciones: ["Ambulancias", "Policía", "Bomberos", "Todos los anteriores en servicio urgente"],
        correcta: 3,
        explicacion: "Todos los vehículos prioritarios en servicio urgente (con sirena y luces) tienen prioridad.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 118,
        texto: "¿Qué deben hacer los conductores ante una ambulancia con sirena?",
        opciones: ["Acelerar", "Detenerse", "Facilitar el paso", "Ignorar"],
        correcta: 2,
        explicacion: "Deben facilitar el paso a los vehículos prioritarios, apartándose a la derecha.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 119,
        texto: "¿Puede una ambulancia saltarse un semáforo en rojo?",
        opciones: ["Sí, con precaución", "No", "Sí, siempre", "Solo de noche"],
        correcta: 0,
        explicacion: "Sí, con las debidas precauciones y en servicio urgente (sirena y luces).",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 120,
        texto: "¿Qué distintivo tienen los vehículos prioritarios?",
        opciones: ["Luces y sirenas", "Pegatinas", "Matrícula especial", "Color especial"],
        correcta: 0,
        explicacion: "Llevan luces y sirenas para señalizar su prioridad en servicio urgente.",
        tema: 1,
        dificultad: "facil"
    },

    // ==================== PREGUNTAS ADICIONALES (121-200) ====================
    {
        id: 121,
        texto: "¿Dónde se expide el permiso de conducir?",
        opciones: ["Ayuntamiento", "Jefatura de Tráfico", "Policía Local", "Notaría"],
        correcta: 1,
        explicacion: "El permiso de conducir se expide en la Jefatura de Tráfico.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 122,
        texto: "¿Qué es la autorización administrativa para conducir?",
        opciones: ["Permiso de circulación", "Permiso de conducir", "ITV", "Seguro"],
        correcta: 1,
        explicacion: "El permiso de conducir es la autorización administrativa para conducir vehículos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 123,
        texto: "¿Puede la DGT retirar el permiso de conducir?",
        opciones: ["Sí", "No", "Solo los jueces", "Solo la policía"],
        correcta: 0,
        explicacion: "Sí, la DGT puede retirar el permiso por pérdida total de puntos o resolución judicial.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 124,
        texto: "¿Puede un extranjero obtener el permiso español?",
        opciones: ["Sí", "No", "Solo si es residente", "Solo si tiene trabajo"],
        correcta: 0,
        explicacion: "Sí, si cumple los requisitos de edad y residencia en España.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 125,
        texto: "¿Qué es el permiso por puntos?",
        opciones: ["Sistema de penalización", "Sistema de bonificación", "Sistema de puntos por buen comportamiento", "Sistema de puntos por cursos"],
        correcta: 0,
        explicacion: "Es un sistema que penaliza las infracciones con pérdida de puntos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 126,
        texto: "¿Los conductores profesionales tienen el mismo sistema de puntos?",
        opciones: ["Sí", "No", "Tienen menos puntos", "Tienen más puntos"],
        correcta: 0,
        explicacion: "Sí, tienen el mismo sistema de puntos (12 puntos iniciales).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 127,
        texto: "¿Puede un conductor novel perder el carnet por acumulación de puntos?",
        opciones: ["Sí", "No", "Solo si pierde 4 puntos", "Solo si pierde 6 puntos"],
        correcta: 0,
        explicacion: "Sí, también puede perderlo por acumulación (tiene 8 puntos iniciales).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 128,
        texto: "¿Qué es el certificado de aptitud psicofísica?",
        opciones: ["Reconocimiento médico", "Examen teórico", "Examen práctico", "Curso de conducción"],
        correcta: 0,
        explicacion: "Es el reconocimiento médico para obtener o renovar el permiso.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 129,
        texto: "¿Dónde se puede hacer el reconocimiento médico?",
        opciones: ["En cualquier centro médico", "Solo en centros autorizados", "En la Jefatura", "En el hospital"],
        correcta: 1,
        explicacion: "Debe hacerse en centros de reconocimiento autorizados por la DGT.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 130,
        texto: "¿Puede conducir una persona con gafas si no las lleva puestas?",
        opciones: ["Sí", "No", "Sí, si ve bien", "Solo de día"],
        correcta: 1,
        explicacion: "No, debe llevar las gafas si están indicadas como restricción en el permiso.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 131,
        texto: "¿Qué sanción tiene no llevar las gafas prescritas?",
        opciones: ["80 €", "100 €", "200 €", "500 €"],
        correcta: 2,
        explicacion: "No llevar las gafas prescritas (si están en el permiso) tiene sanción de 200 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 132,
        texto: "¿Puede un conductor con diabetes conducir?",
        opciones: ["Sí", "No", "Sí, con control médico", "Sí, con informe"],
        correcta: 2,
        explicacion: "Sí, si está controlada y tiene el informe médico favorable.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 133,
        texto: "¿Puede un conductor epiléptico conducir?",
        opciones: ["Sí", "No", "Sí, sin crisis en 1 año", "Sí, sin crisis en 2 años"],
        correcta: 2,
        explicacion: "Sí, si no ha tenido crisis epilépticas en el último año.",
        tema: 1,
        dificultad: "dificil"
    },
    {
        id: 134,
        texto: "¿Qué enfermedades debe notificar a la DGT?",
        opciones: ["Todas", "Solo las graves", "Las que afectan a la conducción", "Ninguna"],
        correcta: 2,
        explicacion: "Debe notificar las enfermedades que afectan a la capacidad de conducción.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 135,
        texto: "¿Qué es la declaración de venta del vehículo?",
        opciones: ["Documento que notifica la venta", "Contrato de compraventa", "Factura", "Permiso de circulación"],
        correcta: 0,
        explicacion: "Es el documento que notifica la venta a Tráfico.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 136,
        texto: "¿Qué plazo hay para notificar la baja del vehículo?",
        opciones: ["15 días", "30 días", "45 días", "60 días"],
        correcta: 0,
        explicacion: "Hay 15 días para notificar la baja definitiva del vehículo.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 137,
        texto: "¿Puede un menor de edad ser propietario de un vehículo?",
        opciones: ["Sí", "No", "Sí, con autorización", "Sí, desde 16 años"],
        correcta: 0,
        explicacion: "Sí, puede ser propietario aunque no pueda conducir.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 138,
        texto: "¿Qué es la tasa de Tráfico?",
        opciones: ["Impuesto para la DGT", "Multa", "Precio del carnet", "Precio de la ITV"],
        correcta: 0,
        explicacion: "Es el impuesto que se paga por los trámites en la DGT.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 139,
        texto: "¿Dónde se pagan las tasas de Tráfico?",
        opciones: ["En el banco", "En la Jefatura", "Online", "Todas las anteriores"],
        correcta: 3,
        explicacion: "Se pueden pagar en banco, en Jefatura de Tráfico u online.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 140,
        texto: "¿Qué es la Jefatura de Tráfico?",
        opciones: ["Oficina de la DGT", "Policía Local", "Ayuntamiento", "Notaría"],
        correcta: 0,
        explicacion: "Es la oficina de la DGT donde se hacen los trámites.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 141,
        texto: "¿Se pueden hacer trámites online con la DGT?",
        opciones: ["Sí", "No", "Solo algunos", "Solo con certificado"],
        correcta: 0,
        explicacion: "Sí, muchos trámites se pueden hacer online en la sede electrónica.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 142,
        texto: "¿Qué es la app miDGT?",
        opciones: ["App de la DGT", "Juego de tráfico", "Red social", "Mapa de carreteras"],
        correcta: 0,
        explicacion: "Es la aplicación oficial de la DGT para trámites y consultas.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 143,
        texto: "¿Se puede llevar el permiso de conducir en el móvil?",
        opciones: ["Sí", "No", "Sí, con miDGT", "Solo físico"],
        correcta: 2,
        explicacion: "Sí, a través de la app miDGT es válido como documento.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 144,
        texto: "¿Qué es la Dirección General de Tráfico (DGT)?",
        opciones: ["Organismo de tráfico", "Policía", "Ayuntamiento", "Ministerio"],
        correcta: 0,
        explicacion: "Es el organismo encargado de la gestión del tráfico y la seguridad vial.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 145,
        texto: "¿Qué número de teléfono tiene la DGT para información?",
        opciones: ["060", "010", "012", "091"],
        correcta: 0,
        explicacion: "El 060 es el teléfono de información de la DGT.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 146,
        texto: "¿Qué significa la señal V-13?",
        opciones: ["Conductor novel", "Vehiculo lento", "Discapacitado", "Peligro"],
        correcta: 0,
        explicacion: "La señal V-13 es la placa de conductor novel (L).",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 147,
        texto: "¿Qué significa la señal V-2?",
        opciones: ["Conductor novel", "Vehiculo lento", "Discapacitado", "Peligro"],
        correcta: 2,
        explicacion: "La señal V-2 indica que el conductor tiene discapacidad auditiva.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 148,
        texto: "¿Qué significa la señal V-1?",
        opciones: ["Conductor novel", "Vehiculo lento", "Discapacitado", "Peligro"],
        correcta: 0,
        explicacion: "La señal V-1 es la placa de conductor novel (L) antigua.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 149,
        texto: "¿Qué significa la señal V-3?",
        opciones: ["Conductor novel", "Vehiculo lento", "Discapacitado", "Peligro"],
        correcta: 1,
        explicacion: "La señal V-3 indica un vehículo que circula a velocidad reducida.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 150,
        texto: "¿Puede un conductor de 16 años conducir una moto de 125cc?",
        opciones: ["Sí", "No", "Sí, con el permiso A1", "Sí, con el permiso AM"],
        correcta: 1,
        explicacion: "No, el permiso A1 (125cc) se obtiene a los 16 años sí, es posible.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 151,
        texto: "¿Cuántas preguntas tiene el examen teórico de la DGT?",
        opciones: ["20 preguntas", "25 preguntas", "30 preguntas", "40 preguntas"],
        correcta: 2,
        explicacion: "El examen teórico consta de 30 preguntas.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 152,
        texto: "¿Cuántos fallos se permiten en el examen teórico?",
        opciones: ["2 fallos", "3 fallos", "4 fallos", "5 fallos"],
        correcta: 1,
        explicacion: "Se permiten máximo 3 fallos en el examen de 30 preguntas.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 153,
        texto: "¿Puedes presentarte al examen práctico sin aprobar el teórico?",
        opciones: ["Sí", "No", "Sí, si tienes permiso anterior", "Solo para renovaciones"],
        correcta: 1,
        explicacion: "No, es obligatorio aprobar primero el examen teórico.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 154,
        texto: "¿Cuánto tiempo tienes para aprobar el práctico tras aprobar el teórico?",
        opciones: ["3 meses", "6 meses", "1 año", "2 años"],
        correcta: 3,
        explicacion: "Tienes 2 años para aprobar el examen práctico.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 155,
        texto: "¿Qué pasa si no apruebas el práctico en 2 años?",
        opciones: ["Pierdes el teórico", "Puedes seguir", "Solo pierdes un intento", "Te convalidan"],
        correcta: 0,
        explicacion: "Pierdes el teórico y debes volver a examinarte.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 156,
        texto: "¿Puede un profesor de autoescuela acompañar en el examen práctico?",
        opciones: ["Sí", "No", "Solo el examinador", "Solo el alumno"],
        correcta: 0,
        explicacion: "Sí, el profesor puede ir en el vehículo durante el examen.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 157,
        texto: "¿Cuánto cuesta aproximadamente la renovación del permiso de conducir?",
        opciones: ["15-20 €", "20-25 €", "25-30 €", "30-40 €"],
        correcta: 2,
        explicacion: "Cuesta entre 25 y 30 € más el reconocimiento médico.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 158,
        texto: "¿Puede un ciudadano de la UE canjear su permiso por el español?",
        opciones: ["Sí", "No", "Solo si es residente", "Solo si trabaja"],
        correcta: 0,
        explicacion: "Sí, puede canjearlo voluntariamente aunque sea válido.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 159,
        texto: "¿Qué es el certificado de antecedentes de tráfico?",
        opciones: ["Multas pendientes", "Historial de puntos", "ITV pasadas", "Seguros contratados"],
        correcta: 1,
        explicacion: "Es un informe con el historial de puntos y sanciones.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 160,
        texto: "¿Dónde se puede solicitar el certificado de antecedentes de tráfico?",
        opciones: ["Online", "Jefatura", "Ambas", "Ayuntamiento"],
        correcta: 2,
        explicacion: "Se puede solicitar online o en la Jefatura de Tráfico.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 161,
        texto: "¿Qué es un vehículo histórico?",
        opciones: ["Más de 30 años", "Más de 25 años", "Más de 40 años", "Más de 50 años"],
        correcta: 0,
        explicacion: "Se considera histórico un vehículo con más de 30 años de antigüedad.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 162,
        texto: "¿Qué ITV necesita un vehículo histórico?",
        opciones: ["ITV normal", "ITV especial", "No necesita", "Cada 2 años"],
        correcta: 0,
        explicacion: "Necesita ITV normal pero con periodicidad diferente.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 163,
        texto: "¿Puede un extranjero no residente conducir con su permiso más de 6 meses?",
        opciones: ["Sí", "No", "Sí, si canjea", "Sí, si es de la UE"],
        correcta: 1,
        explicacion: "No, el límite es 6 meses para no residentes.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 164,
        texto: "¿Qué es el permiso de conducción internacional?",
        opciones: ["Traducción del permiso", "Permiso nuevo", "Carnet diferente", "Visa"],
        correcta: 0,
        explicacion: "Es una traducción oficial del permiso nacional.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 165,
        texto: "¿Cuánto cuesta el Permiso Internacional?",
        opciones: ["5-10 €", "10-15 €", "15-20 €", "20-25 €"],
        correcta: 0,
        explicacion: "Cuesta entre 5 y 10 € aproximadamente.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 166,
        texto: "¿Qué vigencia tiene el Permiso Internacional?",
        opciones: ["1 año", "2 años", "3 años", "5 años"],
        correcta: 0,
        explicacion: "Tiene vigencia de 1 año.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 167,
        texto: "¿Puede un menor de 18 años conducir un turismo en España?",
        opciones: ["Sí", "No", "Sí, con acompañante", "Sí, en prácticas"],
        correcta: 1,
        explicacion: "No, la edad mínima para el permiso B son 18 años.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 168,
        texto: "¿Qué es la formación vial?",
        opciones: ["Educación vial", "Cursos de conducción", "Ambas", "Exámenes"],
        correcta: 2,
        explicacion: "Es la educación vial y los cursos de conducción.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 169,
        texto: "¿Pueden las autoescuelas hacer exámenes oficiales?",
        opciones: ["Sí", "No", "Solo los examinadores de la DGT", "Solo los profesores"],
        correcta: 2,
        explicacion: "Solo los examinadores de la DGT pueden hacer los exámenes oficiales.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 170,
        texto: "¿Cuánto dura un examen práctico de conducir?",
        opciones: ["15-20 min", "20-25 min", "25-30 min", "30-35 min"],
        correcta: 2,
        explicacion: "Suele durar entre 25 y 30 minutos aproximadamente.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 171,
        texto: "¿Puedes usar tu propio vehículo para el examen práctico?",
        opciones: ["Sí", "No", "Sí, si cumple requisitos", "Solo el de la autoescuela"],
        correcta: 2,
        explicacion: "Sí, si cumple con todos los requisitos técnicos.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 172,
        texto: "¿Qué requisitos debe cumplir un vehículo para examen práctico?",
        opciones: ["Doble mando", "ITV en vigor", "Seguro", "Todos los anteriores"],
        correcta: 3,
        explicacion: "Debe tener doble mando, ITV y seguro.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 173,
        texto: "¿Puedes grabar el examen práctico?",
        opciones: ["Sí", "No", "Sí, con permiso", "Solo la DGT"],
        correcta: 1,
        explicacion: "No está permitido grabar el examen práctico.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 174,
        texto: "¿Cuántos intentos tienes para aprobar el práctico?",
        opciones: ["3 intentos", "4 intentos", "Ilimitados", "6 intentos"],
        correcta: 2,
        explicacion: "Tienes intentos ilimitados dentro de los 2 años del teórico.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 175,
        texto: "¿Qué es la tasa de examen práctico?",
        opciones: ["30 €", "50 €", "70 €", "90 €"],
        correcta: 2,
        explicacion: "La tasa del examen práctico es de aproximadamente 70 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 176,
        texto: "¿Qué es la tasa de examen teórico?",
        opciones: ["20 €", "30 €", "40 €", "50 €"],
        correcta: 1,
        explicacion: "La tasa del examen teórico es de aproximadamente 30 €.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 177,
        texto: "¿Puede un conductor con discapacidad adaptar su vehículo?",
        opciones: ["Sí", "No", "Solo con permiso", "Solo algunos"],
        correcta: 0,
        explicacion: "Sí, puede adaptar el vehículo a sus necesidades.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 178,
        texto: "¿Qué es un vehículo adaptado?",
        opciones: ["Con mandos especiales", "Con matrícula especial", "Con color especial", "Con luces especiales"],
        correcta: 0,
        explicacion: "Es un vehículo con mandos especiales para personas con discapacidad.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 179,
        texto: "¿Qué documento acredita la adaptación del vehículo?",
        opciones: ["Certificado de adaptación", "ITV", "Permiso", "Seguro"],
        correcta: 0,
        explicacion: "El certificado de adaptación acredita las modificaciones.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 180,
        texto: "¿Puede la DGT suspender el permiso sin pérdida de puntos?",
        opciones: ["Sí", "No", "Solo los jueces", "Solo por alcohol"],
        correcta: 0,
        explicacion: "Sí, por resolución judicial o por incapacidad sobrevenida.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 181,
        texto: "¿Qué es la suspensión cautelar del permiso?",
        opciones: ["Suspensión temporal", "Pérdida definitiva", "Multa", "Curso obligatorio"],
        correcta: 0,
        explicacion: "Es una suspensión temporal mientras se investiga un delito.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 182,
        texto: "¿Puede un juez retirar el permiso de conducir?",
        opciones: ["Sí", "No", "Solo la DGT", "Solo la policía"],
        correcta: 0,
        explicacion: "Sí, un juez puede retirar el permiso por delitos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 183,
        texto: "¿Qué es el delito contra la seguridad vial?",
        opciones: ["Exceso de velocidad grave", "Conducir sin puntos", "Conducir borracho", "Todos los anteriores"],
        correcta: 3,
        explicacion: "Varias infracciones graves son delito penal.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 184,
        texto: "¿Cuántas fases tiene el permiso por puntos?",
        opciones: ["1", "2", "3", "4"],
        correcta: 1,
        explicacion: "Tiene dos fases: saldo inicial y recuperación.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 185,
        texto: "¿Pueden los conductores profesionales recuperar puntos con cursos?",
        opciones: ["Sí", "No", "Solo si no son profesionales", "Solo para particulares"],
        correcta: 0,
        explicacion: "Sí, también pueden recuperar puntos con cursos.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 186,
        texto: "¿Qué es el curso de conducción segura?",
        opciones: ["Curso voluntario", "Curso obligatorio", "Curso de puntos", "Curso de mecánica"],
        correcta: 0,
        explicacion: "Es un curso voluntario para mejorar la conducción.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 187,
        texto: "¿Dónde se realizan los cursos de conducción segura?",
        opciones: ["Autoescuelas", "Circuitos", "Online", "Todos los anteriores"],
        correcta: 1,
        explicacion: "Suelen realizarse en circuitos cerrados.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 188,
        texto: "¿Qué es el carnet por horas?",
        opciones: ["Sistema de alquiler", "Permiso temporal", "Curso intensivo", "Examen rápido"],
        correcta: 0,
        explicacion: "Es un sistema de alquiler de vehículos por horas.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 189,
        texto: "¿Necesitas carnet para alquilar un patinete eléctrico?",
        opciones: ["Sí", "No", "Solo si supera 25 km/h", "Solo si supera 50 km/h"],
        correcta: 2,
        explicacion: "Si supera 25 km/h necesita carnet AM.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 190,
        texto: "¿Qué es un VMP (Vehículo de Movilidad Personal)?",
        opciones: ["Patinete eléctrico", "Bicicleta", "Moto", "Coche"],
        correcta: 0,
        explicacion: "Los VMP son patinetes eléctricos y similares.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 191,
        texto: "¿Puede un VMP circular por autovía?",
        opciones: ["Sí", "No", "Solo por el arcén", "Solo de día"],
        correcta: 1,
        explicacion: "No, está prohibido circular con VMP por autovías.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 192,
        texto: "¿Qué casco necesita un VMP?",
        opciones: ["No obligatorio", "Casco de bici", "Casco homologado", "Cualquier casco"],
        correcta: 0,
        explicacion: "No es obligatorio, pero sí recomendable.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 193,
        texto: "¿Puede un menor de edad usar un VMP?",
        opciones: ["Sí", "No", "Sí, desde 16 años", "Sí, desde 15 años"],
        correcta: 2,
        explicacion: "Sí, desde los 16 años.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 194,
        texto: "¿Qué es la Dirección General de Tráfico?",
        opciones: ["Organismo estatal", "Policía Local", "Ayuntamiento", "Empresa privada"],
        correcta: 0,
        explicacion: "Es un organismo autónomo del Ministerio del Interior.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 195,
        texto: "¿Quién es el máximo responsable de la DGT?",
        opciones: ["Director General", "Ministro", "Rey", "Presidente"],
        correcta: 0,
        explicacion: "El Director General de Tráfico.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 196,
        texto: "¿Dónde está la sede central de la DGT?",
        opciones: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correcta: 0,
        explicacion: "Está en Madrid, en la calle Josefa Valcárcel.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 197,
        texto: "¿Qué es el Observatorio Nacional de Seguridad Vial?",
        opciones: ["Órgano asesor", "Policía", "Juzgado", "Autoescuela"],
        correcta: 0,
        explicacion: "Es un órgano asesor de la DGT.",
        tema: 1,
        dificultad: "media"
    },
    {
        id: 198,
        texto: "¿Qué es la Estrategia de Seguridad Vial?",
        opciones: ["Plan de la DGT", "Ley de tráfico", "Reglamento", "Normativa"],
        correcta: 0,
        explicacion: "Es el plan de acción de la DGT para reducir accidentes.",
        tema: 1,
        dificultad: "facil"
    },
    {
        id: 199,
        texto: "¿Cuándo se creó la DGT?",
        opciones: ["1959", "1960", "1961", "1962"],
        correcta: 0,
        explicacion: "La DGT se creó en 1959.",
        tema: 1,
        dificultad: "dificil"
    },
    {
        id: 200,
        texto: "¿Qué es la 'Víctima 0'?",
        opciones: ["Primer muerto en accidente", "Campaña de seguridad", "Ley de tráfico", "Curso vial"],
        correcta: 0,
        explicacion: "Es el concepto de cero víctimas mortales en accidentes.",
        tema: 1,
        dificultad: "media"
    }
];

export default tema1;