<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Inspección, monitoreo y toma de muestras
      .bg___color_2
        .px-5
          .row.align-items-center.mb-5
            .col-xl
              .box___style_1.fit___box_3(data-aos="flip-up")
                p.mb-0 La inspección, el monitoreo y la toma de muestras constituyen actividades de seguimiento dentro del #[b Programa de Control Integrado de Plagas (CIP)]. Su aplicación permite conocer las condiciones sanitarias de la explotación, identificar cambios que requieran intervención y generar información útil para evaluar la eficacia de las medidas de bioseguridad implementadas.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t5/img1.png', alt='' style="width: 400px").m-auto
          p.mb-0 Estas actividades pueden abarcar la presencia de plagas y vectores, la condición sanitaria del agua, el estado de superficies, equipos y utensilios, así como el cumplimiento de los procedimientos establecidos. Los resultados obtenidos deben relacionarse con los registros del programa para facilitar el análisis de tendencias y la toma de decisiones. La frecuencia y alcance del seguimiento dependen del tipo de riesgo, las características de la granja, el origen del agua, los antecedentes sanitarios y los criterios definidos por la organización.
          Separador
          #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.1 Toma de muestras de agua
          p.mb-5 La toma de muestras permite obtener información objetiva sobre la condición microbiológica o fisicoquímica del agua. Para que el resultado sea representativo, el muestreo debe responder a un procedimiento definido y considerar el punto seleccionado, el tipo de análisis y los requisitos del laboratorio receptor.
          .row.align-items-center.mb-5
            .col-xl
              .box___style_1.color___1.fit___box_5(data-aos="flip-up")
                p.mb-0 Las muestras pueden corresponder a diferentes puntos del sistema, como la fuente, el almacenamiento o la red de distribución. La selección depende del aspecto que se necesite evaluar y del problema que se pretenda investigar. Los elementos básicos del proceso se organizan así:
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t5/img2.svg', alt='' style="width: 190px").m-auto
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Punto de muestreo
                      p.mb-0 Permite relacionar el resultado con una ubicación específica del sistema y comparar diferencias entre fuente, almacenamiento y distribución.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Recipiente adecuado
                      p.mb-0 Debe corresponder al tipo de análisis solicitado y conservar las condiciones requeridas para evitar alteraciones de la muestra.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Identificación de la muestra
                      p.mb-0 Relaciona el material recolectado con fecha, hora, ubicación, responsable y análisis solicitado.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Condiciones de conservación
                      p.mb-0 Buscan mantener la integridad de la muestra durante el periodo previo al análisis, según las indicaciones del laboratorio.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Transporte
                      p.mb-0 Debe realizarse bajo las condiciones requeridas para que la muestra llegue al laboratorio sin cambios que comprometan su representatividad.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img7.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Registro
                      p.mb-0 Documenta el origen, las condiciones del muestreo y cualquier novedad que pueda ser relevante para la interpretación posterior.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La organización del proceso debe seguir los procedimientos establecidos por el laboratorio o la autoridad competente para el análisis requerido.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Identificación y trazabilidad de las muestras 
      p.mb-5 La rotulación permite vincular cada muestra con el sitio y momento de recolección. Una identificación incompleta dificulta interpretar los resultados y relacionarlos con las condiciones reales de la explotación. La información mínima puede distribuirse así:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 5.
            span Datos para el registro e identificación de muestras
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Dato
                  th.texto-left Función
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fecha
                  td.texto-left Permite ubicar la muestra dentro de la secuencia de seguimiento sanitario.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Hora
                  td.texto-left Ayuda a diferenciar muestras tomadas el mismo día y aporta contexto sobre las condiciones del momento.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Punto de muestreo
                  td.texto-left Identifica la fuente o área específica de donde procede la muestra.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                  td.texto-left Permite establecer quién realizó o coordinó la actividad.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tipo de análisis
                  td.texto-left Indica qué evaluación fue solicitada y facilita su manejo por parte del laboratorio.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Código de identificación
                  td.texto-left Evita confusiones cuando existen varias muestras pertenecientes a una misma jornada.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Observaciones relevantes
                  td.texto-left Permiten consignar condiciones particulares identificadas durante la actividad.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t3/img36.png" style="max-width: 60px").m-auto
        .col
          h3 Muestreo de superficies, equipos y utensilios
      p.mb-5 Las superficies y elementos presentes en áreas productivas pueden acumular materia orgánica o microorganismos cuando los procedimientos de limpieza y desinfección no producen el resultado esperado. El muestreo permite evaluar puntos seleccionados de acuerdo con el riesgo y comprobar el desempeño de los procedimientos sanitarios. Los métodos empleados deben ser apropiados para el análisis solicitado y estar definidos por el laboratorio o protocolo correspondiente. Las áreas de interés pueden organizarse según su función:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Comederos
              p.mb-0.text-center Valorar las condiciones posteriores a los procedimientos de limpieza y reconocer posibles fuentes de contaminación asociadas con alimento residual.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Bebederos
              p.mb-0.text-center Evaluar puntos que mantienen contacto continuo con agua y que pueden acumular residuos o material biológico.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Mesas o superficies de trabajo
              p.mb-0.text-center Comprobar las condiciones higiénicas de zonas utilizadas durante actividades operativas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Equipos
              p.mb-0.text-center Determinar si los procedimientos aplicados después del uso mantienen las condiciones sanitarias previstas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Bandejas y utensilios
              p.mb-0.text-center Identificar posibles residuos o contaminación en elementos reutilizables relacionados con las labores de la explotación.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Tanques
              p.mb-0.text-center Complementar el seguimiento de la calidad del agua mediante la evaluación de superficies internas cuando corresponda.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Vehículos o elementos de transporte
              p.mb-0.text-center Valorar superficies que puedan participar en el traslado de contaminación entre áreas externas e internas.
          p.mb-5 La selección de puntos debe responder a criterios de riesgo y no únicamente a una rutina fija de muestreo.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t3/img36.png" style="max-width: 60px").m-auto
            .col
              h3 Elementos utilizados para el muestreo
          p.mb-5 Los materiales dependen del método seleccionado y del análisis solicitado. Su función principal es permitir una recolección identificable, protegida y compatible con los requisitos del laboratorio. Los elementos más frecuentes cumplen las siguientes funciones:
          .bg___slider.mb-0
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Dispositivos estériles de recolección
                      p.mb-0 Permiten obtener la muestra reduciendo el riesgo de introducir contaminación externa durante el procedimiento.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Plantillas o delimitadores
                      p.mb-0 Facilitan la selección de un área definida cuando el método requiere comparar superficies de tamaño uniforme.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Elementos de protección personal
                      p.mb-0 Reducen la exposición del trabajador y ayudan a evitar interferencias durante la actividad.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img18.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Material de identificación
                      p.mb-0 Permite rotular cada muestra y conservar su relación con el registro correspondiente.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img19.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Recipiente para transporte
                      p.mb-0 Protege las muestras y facilita mantener las condiciones ambientales definidas durante su traslado.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img20.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Formato de registro
                      p.mb-0 Documenta los datos necesarios para la trazabilidad del procedimiento.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img21.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Verificación de los protocolos
      p.mb-5 La verificación busca determinar si las actividades previstas dentro de los programas de bioseguridad y control de plagas se ejecutan de acuerdo con lo establecido. A diferencia del monitoreo de una plaga o de un parámetro sanitario, esta actividad se concentra en el cumplimiento de los procedimientos. Puede desarrollarse mediante inspecciones, revisión documental, auditorías internas y análisis de resultados. Los aspectos principales incluyen:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Limpieza
              p.mb-0.text-center Comprobar cumplimiento de las actividades programadas, áreas intervenidas y registros asociados.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Desinfección
              p.mb-0.text-center Revisar que se hayan cumplido las condiciones definidas en el procedimiento y que exista evidencia documental de la actividad.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Control de plagas
              p.mb-0.text-center Confirmar que existan monitoreos, registros de hallazgos y acciones relacionadas con los resultados obtenidos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Uso de EPP
              p.mb-0.text-center Verificar que los elementos definidos mediante la evaluación de riesgos se encuentren disponibles y sean utilizados en las actividades que los requieren.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img26.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Manejo de residuos
              p.mb-0.text-center Comprobar que las prácticas correspondan con los procedimientos internos y que no generen condiciones favorables para plagas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Estado de instalaciones
              p.mb-0.text-center Identificar deterioros, aberturas, humedad, obstrucciones u otras condiciones que puedan convertirse en factores de riesgo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Registros
              p.mb-0.text-center Confirmar que la información esté actualizada, completa y relacionada con las actividades realizadas.
          p.mb-0 Los hallazgos deben conducir a acciones de seguimiento cuando exista una desviación que pueda afectar la eficacia del programa.
          Separador
          #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.4 Seguimiento de las condiciones de bioseguridad
          p.mb-5 Una inspección integral debe considerar diferentes componentes sin limitarse únicamente a determinar la presencia o ausencia de plagas. Los criterios de seguimiento pueden desarrollarse así:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t5/img29.png", alt="" style="width: 350px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Condiciones de limpieza").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Revisar acumulación de materia orgánica, residuos y otros factores que puedan favorecer contaminación o servir como fuente de alimento para plagas.
                .row(titulo="Evidencias de plagas").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Identificar indicios recientes y relacionarlos con el área, la frecuencia y los antecedentes del monitoreo.
                .row(titulo="Barreras sanitarias").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Comprobar su estado físico, disponibilidad y funcionamiento conforme al procedimiento establecido.
                .row(titulo="Puntos de control de roedores").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Revisar identificación, integridad y correspondencia con la ubicación documentada en el programa.
          .row.align-items-center.mb-0
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
                .row(titulo="Sistema de agua").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Examinar condiciones generales, registros de tratamiento y resultados disponibles de seguimiento.
                .row(titulo="Documentación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Verificar que las actividades desarrolladas puedan relacionarse con registros completos y actualizados.
                .row(titulo="Condiciones de seguridad laboral").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Confirmar que las tareas observadas se desarrollen bajo los controles previstos dentro del SG-SST.
                .row(titulo="Señalización y circulación").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Revisar restricciones de acceso, identificación de áreas y rutas definidas para personas o vehículos.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img17.png", alt="" style="width: 350px").m-auto
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Indicadores de seguimiento
      p.mb-5 Los indicadores transforman los datos obtenidos durante las inspecciones y monitoreos en información que puede compararse entre periodos. Su selección debe responder a los objetivos del programa y permitir identificar cambios relevantes. Más que registrar valores aislados, conviene analizar su comportamiento a lo largo del tiempo. Los principales indicadores incluidos en el contenido base pueden profundizarse así:
      .bg___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Frecuencia de detección de plagas
                  p.mb-0 Permite establecer si determinados organismos aparecen de manera ocasional, recurrente o creciente en áreas específicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Actividad en puntos de control de roedores
                  p.mb-0 Facilita reconocer cambios en la presencia de roedores y comparar zonas con diferentes niveles de actividad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cumplimiento del cronograma
                  p.mb-0 Permite establecer qué proporción de las actividades programadas fue ejecutada dentro del periodo previsto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Resultados microbiológicos
                  p.mb-0 Ayudan a establecer tendencias en la condición sanitaria de agua o superficies y a relacionarlas con medidas de limpieza, tratamiento o desinfección.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Calidad de los registros
                  p.mb-0 Evalúa si la documentación requerida se encuentra completa y disponible para análisis.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hallazgos de inspección o auditoría
                  p.mb-0 Permite cuantificar desviaciones, reconocer recurrencias y priorizar áreas que requieren intervención.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cierre de acciones correctivas
                  p.mb-0 Facilita comprobar si los hallazgos generan respuestas dentro de los plazos definidos y si las medidas adoptadas resultan suficientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img36.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.6 Gestión de hallazgos 
      p.mb-5 Cuando una inspección, un resultado de laboratorio o un monitoreo identifica una desviación, la respuesta debe orientarse primero a comprender la condición que originó el problema. La acción correctiva atiende una situación existente, mientras que la acción preventiva busca evitar que una condición similar aparezca o se extienda a otras áreas. Algunos ejemplos pueden organizarse de esta manera:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Evidencias de roedores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identificar puntos de ingreso, fuentes de alimento y refugio; revisar el estado de las barreras y los registros de monitoreo; ajustar las medidas del programa según los resultados obtenidos.
            .row(titulo="Resultado no conforme en agua").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar el sistema de abastecimiento, almacenamiento y tratamiento; identificar el punto en el que puede haberse generado la desviación y definir el seguimiento correspondiente.
            .row(titulo="Resultado no conforme en superficies").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar el procedimiento de limpieza y desinfección, las áreas involucradas y las condiciones posteriores a la actividad antes de definir ajustes.
            .row(titulo="Registros incompletos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinar si el problema corresponde al diseño del formato, desconocimiento del procedimiento, falta de seguimiento u otra causa antes de establecer la acción de mejora.
            .row(titulo="Barreras deterioradas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Priorizar mantenimiento o reparación y revisar si la condición permitió el ingreso de organismos o generó otros riesgos.
            .row(titulo="Incumplimiento recurrente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Analizar las causas y establecer medidas que intervengan el origen del problema, en lugar de limitarse a corregir cada evento de forma aislada.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t3/img36.png" style="max-width: 60px").m-auto
        .col
          h3 Registro de inspección y monitoreo
      p.mb-5 La información generada durante el seguimiento debe permitir relacionar el hallazgo con su ubicación, responsable y acción posterior. Para evitar duplicaciones con el capítulo de documentación, el formato puede concentrarse en los datos específicos de la inspección. Una estructura funcional incluye:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Campos para el registro y seguimiento de inspecciones sanitarias
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Campo
                      th.texto-left Información que aporta
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha y hora
                      td.texto-left Ubican cronológicamente la inspección.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Área
                      td.texto-left Identifica el punto o instalación evaluada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aspecto inspeccionado
                      td.texto-left Define si el seguimiento corresponde a plagas, agua, superficies, infraestructura u otra condición.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Hallazgo
                      td.texto-left Describe de manera concreta la condición identificada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Nivel o criterio de valoración
                      td.texto-left Permite clasificar el hallazgo según los parámetros definidos por el programa.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acción definida
                      td.texto-left Registra la medida que debe implementarse a partir del resultado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                      td.texto-left Identifica quién queda encargado del seguimiento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha de revisión
                      td.texto-left Establece cuándo debe comprobarse el resultado de la medida adoptada.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t3/img36.png" style="max-width: 60px").m-auto
            .col
              h3 Registro de toma de muestras
          p El registro de muestreo debe conservar la relación entre la muestra enviada y el resultado recibido posteriormente.
          p Los campos esenciales se distribuyen así:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Campos para el registro, trazabilidad y seguimiento de muestras
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Campo
                      th.texto-left Finalidad
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Código de muestra
                      td.texto-left Identifica de manera única el material recolectado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Fecha y hora
                      td.texto-left Ubican el momento de la toma.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tipo de muestra
                      td.texto-left Diferencia agua, superficie u otro material incluido en el programa.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Lugar o punto
                      td.texto-left Relaciona el resultado con una ubicación precisa.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                      td.texto-left Identifica la persona encargada de la actividad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Análisis solicitado
                      td.texto-left Permite conocer qué parámetro o grupo de parámetros se pretende evaluar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Condiciones de transporte
                      td.texto-left Documenta la información requerida para comprobar que la muestra fue trasladada bajo las condiciones definidas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado
                      td.texto-left Permite incorporar posteriormente el informe del laboratorio al historial del punto evaluado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acción derivada
                      td.texto-left Registra las decisiones adoptadas cuando el resultado requiere seguimiento.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t3/img36.png" style="max-width: 60px").m-auto
        .col
          h3 Integración de resultados para la toma de decisiones
      p.mb-5 Los resultados de inspección, monitoreo y laboratorio adquieren mayor utilidad cuando se analizan conjuntamente. Un hallazgo aislado puede tener un significado limitado, mientras que la comparación entre diferentes fuentes de información permite identificar patrones. Este análisis puede establecer relaciones como las siguientes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img37.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Aumento de plagas + deficiencias de limpieza
              p.mb-0.text-center Puede orientar la revisión de fuentes de alimento, residuos y frecuencia de saneamiento.
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img38.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Actividad de roedores + daños estructurales
              p.mb-0.text-center Permite priorizar medidas de exclusión y mantenimiento antes de depender exclusivamente de otras intervenciones.
        .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img39.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Resultados microbiológicos + fallas en el sistema de agua
              p.mb-0.text-center Facilita dirigir la revisión hacia almacenamiento, tratamiento o distribución.
      .row.justify-content-center.mb-0
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img40.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Hallazgos repetidos + acciones cerradas sin mejora
              p.mb-0.text-center Puede indicar que la causa principal no ha sido intervenida adecuadamente.
        .col-xl-4.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t5/img41.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Registros incompletos + falta de seguimiento
              p.mb-0.text-center Puede dificultar determinar tendencias y justificar decisiones posteriores.
        .col-xl-4.col-md-9.mt-4(data-aos="zoom-in")
          .card___icon_out.h-100
            .row.justify-content-center
              .col-7.mb-3
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t5/img42.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Resultados favorables sostenidos
              p.mb-0.text-center Permiten establecer que las medidas implementadas mantienen las condiciones previstas y continuar su seguimiento.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
