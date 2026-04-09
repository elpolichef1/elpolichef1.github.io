// test/data/temas/tema9.js
// TEMA 9: ALCOHOLEMIA Y DROGAS - 150 PREGUNTAS

export const tema9 = [
    // ==================== TASAS DE ALCOHOLEMIA ====================
    {
        id: 901,
        texto: "¿Cuál es la tasa máxima de alcohol para conductores en general?",
        opciones: ["0,5 g/l en sangre", "0,3 g/l en sangre", "0,25 g/l en sangre", "0,0 g/l en sangre"],
        correcta: 0,
        explicacion: "La tasa máxima general es de 0,5 gramos por litro de sangre.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 902,
        texto: "¿Cuál es la tasa máxima de alcohol para conductores noveles?",
        opciones: ["0,5 g/l", "0,3 g/l", "0,25 g/l", "0,0 g/l"],
        correcta: 1,
        explicacion: "Los conductores noveles tienen un límite de 0,3 g/l.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 903,
        texto: "¿Cuál es la tasa máxima de alcohol para conductores profesionales?",
        opciones: ["0,5 g/l", "0,3 g/l", "0,15 g/l", "0,0 g/l"],
        correcta: 1,
        explicacion: "Los conductores profesionales tienen un límite de 0,3 g/l.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 904,
        texto: "¿Cuál es la tasa máxima en aire espirado para conductores en general?",
        opciones: ["0,25 mg/l", "0,15 mg/l", "0,30 mg/l", "0,50 mg/l"],
        correcta: 0,
        explicacion: "La tasa máxima en aire espirado es 0,25 mg/l.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 905,
        texto: "¿Cuál es la tasa máxima en aire espirado para conductores noveles?",
        opciones: ["0,15 mg/l", "0,25 mg/l", "0,30 mg/l", "0,10 mg/l"],
        correcta: 0,
        explicacion: "Los conductores noveles tienen un límite de 0,15 mg/l.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 906,
        texto: "¿Cuál es la tasa máxima en aire espirado para conductores profesionales?",
        opciones: ["0,15 mg/l", "0,25 mg/l", "0,30 mg/l", "0,10 mg/l"],
        correcta: 0,
        explicacion: "Los conductores profesionales tienen un límite de 0,15 mg/l.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 907,
        texto: "¿A partir de qué tasa se considera delito penal?",
        opciones: ["0,6 mg/l en aire", "0,5 mg/l en aire", "0,8 mg/l en aire", "1,0 mg/l en aire"],
        correcta: 0,
        explicacion: "Superar 0,6 mg/l en aire es delito penal.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 908,
        texto: "¿A partir de qué tasa en sangre se considera delito penal?",
        opciones: ["1,2 g/l", "1,0 g/l", "0,8 g/l", "1,5 g/l"],
        correcta: 0,
        explicacion: "Superar 1,2 g/l en sangre es delito penal.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 909,
        texto: "¿Qué tasa tiene un conductor que da positivo en la prueba de alcoholemia?",
        opciones: ["Superior a 0,25 mg/l", "Superior a 0,15 mg/l", "Superior a 0,30 mg/l", "Superior a 0,50 mg/l"],
        correcta: 0,
        explicacion: "Se considera positivo superior a 0,25 mg/l en aire.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 910,
        texto: "¿Qué tasa tiene un conductor novel que da positivo?",
        opciones: ["Superior a 0,15 mg/l", "Superior a 0,25 mg/l", "Superior a 0,30 mg/l", "Superior a 0,10 mg/l"],
        correcta: 0,
        explicacion: "Para noveles, positivo es superior a 0,15 mg/l.",
        tema: 9,
        dificultad: "media"
    },

    // ==================== SANCIONES POR ALCOHOLEMIA ====================
    {
        id: 911,
        texto: "¿Qué sanción tiene dar positivo en alcoholemia (0,25-0,50 mg/l)?",
        opciones: ["500€ y 4 puntos", "500€ y 6 puntos", "1000€ y 6 puntos", "1000€ y 4 puntos"],
        correcta: 0,
        explicacion: "Positivo leve: 500€ y 4 puntos.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 912,
        texto: "¿Qué sanción tiene dar positivo en alcoholemia (más de 0,50 mg/l)?",
        opciones: ["500€ y 4 puntos", "500€ y 6 puntos", "1000€ y 6 puntos", "1000€ y 4 puntos"],
        correcta: 1,
        explicacion: "Positivo grave: 500€ y 6 puntos.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 913,
        texto: "¿Qué sanción tiene dar positivo en alcoholemia siendo conductor novel?",
        opciones: ["500€ y 4 puntos", "500€ y 6 puntos", "1000€ y 6 puntos", "1000€ y 4 puntos"],
        correcta: 0,
        explicacion: "Los noveles tienen la misma sanción.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 914,
        texto: "¿Qué sanción tiene dar positivo en alcoholemia siendo conductor profesional?",
        opciones: ["500€ y 4 puntos", "500€ y 6 puntos", "1000€ y 6 puntos", "1000€ y 4 puntos"],
        correcta: 0,
        explicacion: "Los profesionales tienen la misma sanción.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 915,
        texto: "¿Qué sanción tiene negarse a realizar la prueba de alcoholemia?",
        opciones: ["500€ y 4 puntos", "1000€ y 6 puntos", "Delito penal con prisión", "Pérdida del carnet"],
        correcta: 2,
        explicacion: "Negarse es un delito penal con penas de prisión.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 916,
        texto: "¿Qué sanción tiene superar 0,60 mg/l en aire?",
        opciones: ["500€ y 4 puntos", "500€ y 6 puntos", "Delito penal", "1000€ y 6 puntos"],
        correcta: 2,
        explicacion: "Superar 0,60 mg/l es delito penal.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 917,
        texto: "¿Qué sanción tiene superar 1,2 g/l en sangre?",
        opciones: ["500€ y 4 puntos", "500€ y 6 puntos", "Delito penal", "1000€ y 6 puntos"],
        correcta: 2,
        explicacion: "Superar 1,2 g/l es delito penal.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 918,
        texto: "¿Puede la policía realizar pruebas de alcoholemia sin sospecha?",
        opciones: ["Sí, en controles preventivos", "No", "Solo con sospecha", "Solo en accidentes"],
        correcta: 0,
        explicacion: "Sí, pueden realizar controles preventivos aleatorios.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 919,
        texto: "¿Puede un conductor negarse a soplar?",
        opciones: ["No, es delito", "Sí", "Depende", "Solo si está seguro"],
        correcta: 0,
        explicacion: "Negarse a soplar es un delito penal.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 920,
        texto: "¿Qué ocurre si da positivo en un control de alcoholemia?",
        opciones: ["Multa y puntos", "Inmovilización del vehículo", "Prisión si es reincidente", "Todas son correctas"],
        correcta: 3,
        explicacion: "Puede tener todas esas consecuencias.",
        tema: 9,
        dificultad: "media"
    },

    // ==================== EFECTOS DEL ALCOHOL ====================
    {
        id: 921,
        texto: "¿Qué efectos tiene el alcohol en la conducción?",
        opciones: ["Aumenta el tiempo de reacción", "Reduce la coordinación", "Afecta la visión", "Todas son correctas"],
        correcta: 3,
        explicacion: "El alcohol tiene todos esos efectos negativos.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 922,
        texto: "¿Cómo afecta el alcohol al tiempo de reacción?",
        opciones: ["Lo aumenta", "Lo disminuye", "No lo afecta", "Lo duplica"],
        correcta: 0,
        explicacion: "El alcohol aumenta el tiempo de reacción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 923,
        texto: "¿Cómo afecta el alcohol a la visión?",
        opciones: ["Reduce el campo visual", "Mejora la visión", "No afecta", "Aumenta la visión periférica"],
        correcta: 0,
        explicacion: "El alcohol reduce el campo visual.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 924,
        texto: "¿Cómo afecta el alcohol a la coordinación?",
        opciones: ["La reduce", "La mejora", "No afecta", "La duplica"],
        correcta: 0,
        explicacion: "El alcohol reduce la coordinación motora.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 925,
        texto: "¿Cómo afecta el alcohol a la percepción del riesgo?",
        opciones: ["La reduce", "La aumenta", "No afecta", "La duplica"],
        correcta: 0,
        explicacion: "El alcohol reduce la percepción del riesgo.",
        tema: 9,
        dificultad: "facil"
    },

    // ==================== ELIMINACIÓN DEL ALCOHOL ====================
    {
        id: 926,
        texto: "¿Cuánto tiempo tarda el cuerpo en eliminar una copa de alcohol?",
        opciones: ["1 hora", "30 minutos", "2 horas", "4 horas"],
        correcta: 0,
        explicacion: "El cuerpo tarda aproximadamente 1 hora por copa.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 927,
        texto: "¿El café quita el alcohol?",
        opciones: ["No", "Sí", "Depende", "Un poco"],
        correcta: 0,
        explicacion: "El café no elimina el alcohol del organismo.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 928,
        texto: "¿La ducha fría quita el alcohol?",
        opciones: ["No", "Sí", "Depende", "Un poco"],
        correcta: 0,
        explicacion: "La ducha fría no elimina el alcohol.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 929,
        texto: "¿Hacer ejercicio quita el alcohol?",
        opciones: ["No", "Sí", "Depende", "Un poco"],
        correcta: 0,
        explicacion: "El ejercicio no elimina el alcohol.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 930,
        texto: "¿Comer quita el alcohol?",
        opciones: ["No, solo retrasa su absorción", "Sí", "Depende", "Un poco"],
        correcta: 0,
        explicacion: "Comer retrasa la absorción pero no elimina el alcohol.",
        tema: 9,
        dificultad: "media"
    },

    // ==================== ALCOHOL Y CONDUCCIÓN ====================
    {
        id: 931,
        texto: "¿Cuándo se puede conducir después de beber?",
        opciones: ["Cuando la tasa esté por debajo del límite", "Después de 8 horas", "Al día siguiente", "Nunca"],
        correcta: 0,
        explicacion: "Solo cuando la tasa sea legal.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 932,
        texto: "¿La tasa de alcohol es la misma para todos?",
        opciones: ["No, depende del peso, sexo, etc.", "Sí", "Depende de la edad", "Depende del vehículo"],
        correcta: 0,
        explicacion: "La tasa varía según múltiples factores.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 933,
        texto: "¿Las mujeres tienen la misma tolerancia al alcohol que los hombres?",
        opciones: ["No, suelen tener menos", "Sí", "Depende", "Más"],
        correcta: 0,
        explicacion: "Las mujeres suelen tener menor tolerancia al alcohol.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 934,
        texto: "¿El alcohol afecta más a los conductores noveles?",
        opciones: ["Sí, tienen menos experiencia", "No", "Depende", "Igual"],
        correcta: 0,
        explicacion: "Los noveles tienen menos experiencia y más riesgo.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 935,
        texto: "¿Es seguro conducir con una tasa de 0,3 g/l?",
        opciones: ["No, cualquier alcohol afecta", "Sí", "Depende", "Es legal pero no seguro"],
        correcta: 0,
        explicacion: "Cualquier cantidad de alcohol afecta a la conducción.",
        tema: 9,
        dificultad: "facil"
    },

    // ==================== DROGAS ====================
    {
        id: 936,
        texto: "¿Está permitido conducir bajo los efectos de las drogas?",
        opciones: ["No", "Sí", "Depende de la droga", "Solo medicamentos"],
        correcta: 0,
        explicacion: "Está totalmente prohibido.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 937,
        texto: "¿Qué sanción tiene conducir bajo efectos de drogas?",
        opciones: ["500€ y 6 puntos", "1000€ y 6 puntos", "Delito penal", "Pérdida del carnet"],
        correcta: 2,
        explicacion: "Conducir bajo efectos de drogas es un delito penal.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 938,
        texto: "¿Qué efectos tienen las drogas en la conducción?",
        opciones: ["Alteran la percepción", "Aumentan el riesgo", "Reducen los reflejos", "Todas son correctas"],
        correcta: 3,
        explicacion: "Las drogas tienen todos esos efectos negativos.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 939,
        texto: "¿El cannabis afecta a la conducción?",
        opciones: ["Sí, mucho", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "El cannabis afecta gravemente a la conducción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 940,
        texto: "¿La cocaína afecta a la conducción?",
        opciones: ["Sí, mucho", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "La cocaína afecta gravemente a la conducción.",
        tema: 9,
        dificultad: "facil"
    },

    // ==================== DROGAS Y CONDUCCIÓN ====================
    {
        id: 941,
        texto: "¿Qué efectos tiene el cannabis en la conducción?",
        opciones: ["Relaja, afecta reflejos", "Estimula", "No afecta", "Mejora"],
        correcta: 0,
        explicacion: "El cannabis relaja y afecta los reflejos.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 942,
        texto: "¿Qué efectos tiene la cocaína en la conducción?",
        opciones: ["Sobreexcitación, agresividad", "Relajación", "Sueño", "No afecta"],
        correcta: 0,
        explicacion: "La cocaína causa sobreexcitación y agresividad.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 943,
        texto: "¿Qué efectos tiene el éxtasis en la conducción?",
        opciones: ["Alucinaciones, desorientación", "Relajación", "Sueño", "No afecta"],
        correcta: 0,
        explicacion: "El éxtasis puede causar alucinaciones.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 944,
        texto: "¿Qué efectos tienen las anfetaminas en la conducción?",
        opciones: ["Sobreexcitación, falsa seguridad", "Relajación", "Sueño", "No afecta"],
        correcta: 0,
        explicacion: "Las anfetaminas dan falsa sensación de seguridad.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 945,
        texto: "¿Qué efectos tienen los alucinógenos en la conducción?",
        opciones: ["Alucinaciones, pérdida de realidad", "Relajación", "Sueño", "No afecta"],
        correcta: 0,
        explicacion: "Los alucinógenos pueden causar pérdida de realidad.",
        tema: 9,
        dificultad: "dificil"
    },

    // ==================== MEDICAMENTOS ====================
    {
        id: 946,
        texto: "¿Los medicamentos pueden afectar a la conducción?",
        opciones: ["Sí", "No", "Solo los psicotropos", "Solo los antibióticos"],
        correcta: 0,
        explicacion: "Muchos medicamentos pueden afectar a la conducción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 947,
        texto: "¿Qué debe hacer si toma medicación?",
        opciones: ["Consultar si afecta a la conducción", "Conducir igual", "Aumentar velocidad", "Ignorar"],
        correcta: 0,
        explicacion: "Debe consultar si la medicación afecta a la conducción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 948,
        texto: "¿Los ansiolíticos afectan a la conducción?",
        opciones: ["Sí, causan somnolencia", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "Los ansiolíticos pueden causar somnolencia.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 949,
        texto: "¿Los antidepresivos afectan a la conducción?",
        opciones: ["Sí, pueden afectar", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "Algunos antidepresivos pueden afectar.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 950,
        texto: "¿Los antihistamínicos afectan a la conducción?",
        opciones: ["Sí, causan somnolencia", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "Los antihistamínicos pueden causar somnolencia.",
        tema: 9,
        dificultad: "facil"
    },

    // ==================== DROGAS Y ALCOHOL COMBINADOS ====================
    {
        id: 951,
        texto: "¿Es más peligroso combinar alcohol y drogas?",
        opciones: ["Sí, los efectos se multiplican", "No", "Igual", "Depende"],
        correcta: 0,
        explicacion: "La combinación multiplica los efectos negativos.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 952,
        texto: "¿Alcohol y cannabis juntos son más peligrosos?",
        opciones: ["Sí, potencian sus efectos", "No", "Igual", "Depende"],
        correcta: 0,
        explicacion: "La combinación potencia los efectos.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 953,
        texto: "¿Alcohol y cocaína juntos son más peligrosos?",
        opciones: ["Sí, muy peligroso", "No", "Igual", "Depende"],
        correcta: 0,
        explicacion: "La combinación es muy peligrosa.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 954,
        texto: "¿Qué efectos tiene combinar alcohol y medicamentos?",
        opciones: ["Potenciación de efectos", "Reducción de efectos", "No pasa nada", "Depende"],
        correcta: 0,
        explicacion: "Se potencian los efectos de ambos.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 955,
        texto: "¿Es legal combinar alcohol y medicamentos?",
        opciones: ["Sí, pero peligroso", "No", "Depende", "Solo recetados"],
        correcta: 0,
        explicacion: "Es legal pero muy peligroso.",
        tema: 9,
        dificultad: "facil"
    },

    // ==================== CONTROL DE ALCOHOLEMIA ====================
    {
        id: 956,
        texto: "¿Qué es el etilómetro?",
        opciones: ["Aparato que mide el alcohol en aire", "Aparato que mide drogas", "Aparato de radar", "Aparato de velocidad"],
        correcta: 0,
        explicacion: "El etilómetro mide la tasa de alcohol en aire espirado.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 957,
        texto: "¿Qué es la prueba de alcoholemia?",
        opciones: ["Prueba para medir alcohol", "Prueba de drogas", "Prueba de velocidad", "Prueba de reflejos"],
        correcta: 0,
        explicacion: "Es la prueba para medir la tasa de alcohol.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 958,
        texto: "¿Puede la policía hacer pruebas de alcoholemia en cualquier lugar?",
        opciones: ["Sí, en controles preventivos", "No", "Solo en accidentes", "Solo con sospecha"],
        correcta: 0,
        explicacion: "Pueden hacer controles preventivos aleatorios.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 959,
        texto: "¿Qué pasa si la primera prueba de alcoholemia da positiva?",
        opciones: ["Se hace una segunda prueba", "Multa inmediata", "Prisión", "Pérdida de carnet"],
        correcta: 0,
        explicacion: "Se realiza una segunda prueba de confirmación.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 960,
        texto: "¿Qué ocurre si da positivo en el control de alcoholemia?",
        opciones: ["Multa y puntos", "Inmovilización del vehículo", "Citación judicial", "Todas son correctas"],
        correcta: 3,
        explicacion: "Puede tener todas esas consecuencias.",
        tema: 9,
        dificultad: "media"
    },

    // ==================== ALCOHOL Y ACCIDENTES ====================
    {
        id: 961,
        texto: "¿El alcohol está presente en muchos accidentes?",
        opciones: ["Sí, en un alto porcentaje", "No", "En pocos", "En ninguno"],
        correcta: 0,
        explicacion: "El alcohol está presente en muchos accidentes graves.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 962,
        texto: "¿El alcohol aumenta la gravedad de los accidentes?",
        opciones: ["Sí", "No", "Depende", "Poco"],
        correcta: 0,
        explicacion: "El alcohol aumenta la gravedad de los accidentes.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 963,
        texto: "¿Qué porcentaje de accidentes mortales están relacionados con el alcohol?",
        opciones: ["Alto porcentaje", "Bajo porcentaje", "Muy bajo", "Ninguno"],
        correcta: 0,
        explicacion: "Un alto porcentaje de accidentes mortales están relacionados con el alcohol.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 964,
        texto: "¿El alcohol afecta más en conductores jóvenes?",
        opciones: ["Sí, por inexperiencia", "No", "Igual", "Depende"],
        correcta: 0,
        explicacion: "Los jóvenes tienen menos experiencia y más riesgo.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 965,
        texto: "¿El alcohol afecta más en conductores nocturnos?",
        opciones: ["Sí, la noche tiene más riesgo", "No", "Igual", "Depende"],
        correcta: 0,
        explicacion: "La noche tiene más factores de riesgo.",
        tema: 9,
        dificultad: "facil"
    },

    // ==================== ALCOHOL Y PUNTOS ====================
    {
        id: 966,
        texto: "¿Cuántos puntos se pierden por alcoholemia positiva?",
        opciones: ["4 o 6 puntos", "2 puntos", "3 puntos", "8 puntos"],
        correcta: 0,
        explicacion: "Se pierden 4 o 6 puntos según la tasa.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 967,
        texto: "¿Se pueden recuperar los puntos perdidos por alcoholemia?",
        opciones: ["Sí, con cursos", "No", "Depende", "Solo con el tiempo"],
        correcta: 0,
        explicacion: "Se pueden recuperar con cursos de sensibilización.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 968,
        texto: "¿Cuánto tiempo tarda en recuperar los puntos?",
        opciones: ["2 años sin infracciones", "1 año", "3 años", "6 meses"],
        correcta: 0,
        explicacion: "2 años sin infracciones para recuperar el saldo inicial.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 969,
        texto: "¿Los cursos de alcoholemia recuperan puntos?",
        opciones: ["Sí, hasta 4 puntos", "No", "Depende", "2 puntos"],
        correcta: 0,
        explicacion: "Los cursos permiten recuperar hasta 4 puntos.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 970,
        texto: "¿Cuántas veces se puede hacer el curso de alcoholemia?",
        opciones: ["Cada 2 años", "Una vez al año", "Cada 3 años", "Solo una vez"],
        correcta: 0,
        explicacion: "Se puede hacer cada 2 años.",
        tema: 9,
        dificultad: "dificil"
    },

    // ==================== PREVENCIÓN ====================
    {
        id: 971,
        texto: "¿Qué es mejor si va a beber?",
        opciones: ["Designar un conductor", "Beber menos", "Esperar más tiempo", "Todas son correctas"],
        correcta: 3,
        explicacion: "Todas esas medidas son recomendables.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 972,
        texto: "¿Qué es un conductor alternativo?",
        opciones: ["El que no bebe y conduce", "El que bebe menos", "El más sobrio", "El más joven"],
        correcta: 0,
        explicacion: "Es quien no bebe y se encarga de conducir.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 973,
        texto: "¿Es recomendable beber agua entre copas?",
        opciones: ["Sí, ayuda", "No", "Depende", "No influye"],
        correcta: 0,
        explicacion: "Beber agua ayuda a hidratarse pero no elimina alcohol.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 974,
        texto: "¿Qué hacer si ha bebido y tiene que conducir?",
        opciones: ["Esperar varias horas", "Beber café", "Ducharse", "Comer"],
        correcta: 0,
        explicacion: "Lo único que funciona es esperar.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 975,
        texto: "¿Es mejor no beber nada si va a conducir?",
        opciones: ["Sí, la opción más segura", "No", "Depende", "Poco"],
        correcta: 0,
        explicacion: "La opción más segura es no beber nada.",
        tema: 9,
        dificultad: "facil"
    },

    // ==================== ADICIONALES ====================
    {
        id: 976,
        texto: "¿Qué es la tasa de alcoholemia?",
        opciones: ["Cantidad de alcohol en sangre", "Cantidad de alcohol en orina", "Cantidad de alcohol en saliva", "Cantidad de alcohol en sudor"],
        correcta: 0,
        explicacion: "Es la cantidad de alcohol en la sangre.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 977,
        texto: "¿Qué unidad se usa para medir el alcohol en sangre?",
        opciones: ["Gramos por litro (g/l)", "Miligramos por litro (mg/l)", "Porcentaje (%)", "Partes por millón (ppm)"],
        correcta: 0,
        explicacion: "Se mide en gramos por litro de sangre.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 978,
        texto: "¿Qué unidad se usa para medir el alcohol en aire espirado?",
        opciones: ["Miligramos por litro (mg/l)", "Gramos por litro (g/l)", "Porcentaje (%)", "Partes por millón (ppm)"],
        correcta: 0,
        explicacion: "Se mide en miligramos por litro de aire espirado.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 979,
        texto: "¿Qué es un alcoholímetro?",
        opciones: ["Aparato para medir alcohol", "Aparato para medir drogas", "Aparato de radar", "Aparato de velocidad"],
        correcta: 0,
        explicacion: "Es un aparato para medir la tasa de alcohol.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 980,
        texto: "¿Los alcoholímetros caseros son fiables?",
        opciones: ["Relativamente", "Sí", "No", "Muy fiables"],
        correcta: 0,
        explicacion: "Tienen cierta fiabilidad pero no son oficiales.",
        tema: 9,
        dificultad: "media"
    },

    // ==================== MÁS PREGUNTAS ====================
    {
        id: 981,
        texto: "¿El alcohol afecta a la conducción desde la primera copa?",
        opciones: ["Sí", "No", "Depende", "Solo a partir de la segunda"],
        correcta: 0,
        explicacion: "Cualquier cantidad de alcohol afecta a la conducción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 982,
        texto: "¿La resaca afecta a la conducción?",
        opciones: ["Sí, mucho", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "La resaca también afecta a la conducción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 983,
        texto: "¿Se puede conducir con resaca?",
        opciones: ["No es recomendable", "Sí", "Depende", "Es legal"],
        correcta: 0,
        explicacion: "La resaca afecta a la conducción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 984,
        texto: "¿El alcohol afecta más a los conductores mayores?",
        opciones: ["Sí, metabolizan peor", "No", "Igual", "Depende"],
        correcta: 0,
        explicacion: "Los mayores metabolizan el alcohol más lentamente.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 985,
        texto: "¿El alcohol afecta más a las mujeres?",
        opciones: ["Sí, por menor peso y metabolismo", "No", "Igual", "Depende"],
        correcta: 0,
        explicacion: "Las mujeres suelen tener menor tolerancia.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 986,
        texto: "¿Qué es la tolerancia al alcohol?",
        opciones: ["Capacidad de resistir sus efectos", "No beber", "Beber poco", "Beber rápido"],
        correcta: 0,
        explicacion: "Es la capacidad de resistir los efectos del alcohol.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 987,
        texto: "¿La tolerancia significa que se puede conducir mejor?",
        opciones: ["No, el riesgo es el mismo", "Sí", "Depende", "Un poco"],
        correcta: 0,
        explicacion: "La tolerancia no reduce el riesgo de accidente.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 988,
        texto: "¿Qué es el coma etílico?",
        opciones: ["Pérdida de conciencia por alcohol", "Embriaguez leve", "Intoxicación", "Resaca"],
        correcta: 0,
        explicacion: "Es la pérdida de conciencia por exceso de alcohol.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 989,
        texto: "¿A qué tasa se puede llegar al coma etílico?",
        opciones: ["3-4 g/l", "1-2 g/l", "0,5-1 g/l", "5-6 g/l"],
        correcta: 0,
        explicacion: "A partir de 3-4 gramos por litro puede haber coma.",
        tema: 9,
        dificultad: "dificil"
    },
    {
        id: 990,
        texto: "¿El alcohol es una droga?",
        opciones: ["Sí, es una droga legal", "No", "Depende", "Solo es bebida"],
        correcta: 0,
        explicacion: "El alcohol es una droga legal.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 991,
        texto: "¿Qué es el alcoholismo?",
        opciones: ["Adicción al alcohol", "Beber mucho", "Beber a diario", "Beber en exceso"],
        correcta: 0,
        explicacion: "Es la adicción al alcohol.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 992,
        texto: "¿El alcoholismo afecta a la conducción?",
        opciones: ["Sí, gravemente", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "El alcoholismo afecta gravemente a la conducción.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 993,
        texto: "¿Qué es la abstinencia de alcohol?",
        opciones: ["Síntomas al dejar de beber", "Beber mucho", "Beber poco", "No beber"],
        correcta: 0,
        explicacion: "Son los síntomas al dejar de beber.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 994,
        texto: "¿La abstinencia afecta a la conducción?",
        opciones: ["Sí", "No", "Poco", "Depende"],
        correcta: 0,
        explicacion: "La abstinencia también afecta a la conducción.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 995,
        texto: "¿Qué es el síndrome de abstinencia?",
        opciones: ["Conjunto de síntomas al dejar una droga", "Beber mucho", "Beber poco", "No beber"],
        correcta: 0,
        explicacion: "Son los síntomas al dejar una droga.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 996,
        texto: "¿El alcohol es causa de muchos accidentes laborales?",
        opciones: ["Sí", "No", "Pocos", "Ninguno"],
        correcta: 0,
        explicacion: "El alcohol causa muchos accidentes laborales.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 997,
        texto: "¿Las empresas pueden hacer pruebas de alcoholemia?",
        opciones: ["Sí, en algunos sectores", "No", "Depende", "Siempre"],
        correcta: 0,
        explicacion: "En sectores como el transporte sí.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 998,
        texto: "¿Qué sanción tiene dar positivo en alcoholemia en el trabajo?",
        opciones: ["Depende del convenio", "Multa", "Prisión", "Nada"],
        correcta: 0,
        explicacion: "Depende del convenio colectivo.",
        tema: 9,
        dificultad: "media"
    },
    {
        id: 999,
        texto: "¿Es legal conducir después de beber una cerveza?",
        opciones: ["Depende de la tasa", "Sí", "No", "Solo en casa"],
        correcta: 0,
        explicacion: "Depende de si supera la tasa legal.",
        tema: 9,
        dificultad: "facil"
    },
    {
        id: 1000,
        texto: "¿Cuál es la mejor opción si va a beber?",
        opciones: ["No conducir", "Beber poco", "Esperar", "Comer"],
        correcta: 0,
        explicacion: "La mejor opción es no conducir.",
        tema: 9,
        dificultad: "facil"
    }
];

export default tema9;