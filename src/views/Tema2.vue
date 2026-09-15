<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Plaguicidas, insecticidas y rodenticidas
      .bg___color_2
        .px-5
          .row.align-items-center.mb-5
            .col-xl
              .box___style_1.fit___box_4(data-aos="flip-up")
                p.mb-0 El control químico forma parte del #[b Control Integrado de Plagas (CIP)], pero su incorporación debe responder a una necesidad determinada mediante el monitoreo y la evaluación de las condiciones de la explotación. En las empresas avícolas, los productos destinados al control de insectos, roedores y otros organismos perjudiciales complementan las acciones preventivas, físicas, mecánicas y biológicas implementadas dentro del programa de bioseguridad.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img1.png', alt='' style="width: 400px").m-auto
          p.mb-5 El manejo inadecuado de estos productos puede generar efectos adversos para las personas, los animales y el ambiente, además de favorecer problemas como la resistencia de las poblaciones objetivo o la contaminación de áreas, insumos y productos avícolas. Por esta razón, su gestión requiere personal capacitado, productos autorizados, interpretación adecuada de la etiqueta y de la #[b Hoja de Datos de Seguridad (HDS)], uso de los elementos de protección personal (EPP) definidos para cada caso y cumplimiento de los procedimientos establecidos por la empresa.
          .row.align-items-center.mb-0
            .col-xl
              .box___style_1.color___1.fit___box_5(data-aos="flip-up")
                p.mb-0 La decisión de incorporar un producto químico debe formar parte de una estrategia integral. Esto implica identificar previamente la plaga, determinar su nivel de presencia, corregir las condiciones que favorecen su establecimiento y valorar los resultados obtenidos con las medidas implementadas.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 190px").m-auto
          Separador
          #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.1 Conceptos básicos
          p.mb-5 Los productos utilizados en el control de plagas se diferencian principalmente por el organismo sobre el que están destinados a actuar. Esta distinción facilita su identificación dentro del programa y evita considerar todos los productos químicos como equivalentes. Los principales conceptos se precisan de la siguiente manera:
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Plaguicida
                      p.mb-0 Sustancia química, biológica o mezcla destinada a prevenir, controlar o eliminar organismos considerados plagas. Constituye una categoría general dentro de la cual pueden encontrarse productos dirigidos a diferentes organismos.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Insecticida
                      p.mb-0 Tipo de plaguicida destinado específicamente al control de insectos. En el entorno avícola puede relacionarse con organismos como moscas, cucarachas, escarabajos y mosquitos.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Rodenticida
                      p.mb-0 Producto formulado para el control de roedores, principalmente ratas y ratones. Su incorporación debe responder a un programa de manejo que incluya medidas de exclusión, saneamiento y seguimiento.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Larvicida
                      p.mb-0 Producto dirigido al control de fases larvarias de determinados insectos. Su utilización se relaciona con el manejo de lugares en los que puedan desarrollarse estas etapas.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La selección entre estas categorías depende del organismo identificado y de la estrategia establecida dentro del CIP.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Clasificación
      p.mb-5 Los plaguicidas pueden agruparse de acuerdo con diferentes criterios, entre ellos el organismo objetivo, la formulación y las características del producto. Esta clasificación permite diferenciar su finalidad sin asumir que todos presentan las mismas condiciones de uso o los mismos riesgos. Según el organismo al que están destinados, se reconocen las siguientes categorías:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Insecticidas
                  p.mb-0.text-center Dirigidos al control de insectos. La selección depende de la especie identificada, las condiciones del área y las indicaciones autorizadas para el producto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Rodenticidas
                  p.mb-0.text-center Destinados al control de roedores. Deben integrarse con acciones que reduzcan el acceso a alimento, agua y refugio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Larvicidas
                  p.mb-0.text-center Actúan sobre fases larvarias de determinados insectos y se relacionan con estrategias orientadas a interrumpir su desarrollo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Acaricidas
                  p.mb-0.text-center Dirigidos al control de ácaros cuando estos correspondan al organismo identificado dentro del programa.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Molusquicidas
                  p.mb-0.text-center Destinados al control de moluscos en los contextos para los cuales se encuentren autorizados.
          p.mb-5 Otra forma de diferenciarlos corresponde a su formulación comercial. La formulación influye en características como manejo, almacenamiento y forma autorizada de empleo, por lo que siempre debe consultarse la información específica del producto. Las formulaciones incluidas en el material base se organizan así:
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Polvo mojable (WP)
                      p.mb-0 Presentación sólida formulada para emplearse conforme a las indicaciones técnicas establecidas en la etiqueta. Requiere atención a las condiciones de manipulación y preparación indicadas por el fabricante.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Concentrado emulsionable (EC)
                      p.mb-0 Formulación concentrada cuyo manejo debe ajustarse estrictamente a la información técnica del producto y a las medidas de protección establecidas.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Suspensión concentrada (SC)
                      p.mb-0 Presentación líquida en la que el ingrediente se encuentra disperso en un medio. Sus condiciones de uso dependen de las indicaciones autorizadas.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Polvo seco
                      p.mb-0 Formulación sólida destinada a usos específicos. Deben considerarse las precauciones relacionadas con su manipulación y dispersión.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Cebo
                      p.mb-0 Presentación diseñada para atraer a la plaga objetivo. Es frecuente en programas de control de roedores y requiere ubicación y manejo controlados por personal autorizado.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img17.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Granulado
                      p.mb-0 Formulación sólida utilizada de forma localizada según las indicaciones del producto y las condiciones del programa.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Aerosol
                      p.mb-0 Presentación destinada a aplicaciones puntuales autorizadas. Su empleo exige considerar las condiciones del área, ventilación y restricciones de seguridad señaladas en la etiqueta.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La formulación no determina por sí sola la conveniencia de un producto; debe analizarse junto con el organismo objetivo, el riesgo del área y las condiciones de bioseguridad.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Criterios para la selección
      p.mb-5 La elección de un plaguicida no debe basarse únicamente en su capacidad para disminuir una población determinada. También es necesario considerar las condiciones de la explotación, el riesgo para las aves y las personas, las características del producto y las restricciones establecidas en su documentación técnica. Entre los criterios relevantes se encuentran los siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img20.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Eficacia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relaciona con la capacidad del producto para actuar sobre la plaga objetivo dentro de las condiciones autorizadas. Debe valorarse junto con los resultados del monitoreo posterior.
            .row(titulo="Selectividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si la acción se dirige principalmente al organismo objetivo y qué precauciones adicionales deben adoptarse frente a otros organismos.
            .row(titulo="Persistencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al tiempo durante el cual pueden mantenerse los efectos del producto. Su importancia radica en que puede influir en las restricciones del área y en las medidas posteriores al tratamiento.
            .row(titulo="Toxicidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite reconocer los peligros potenciales para las personas y los animales. Debe interpretarse mediante la etiqueta, la HDS y la clasificación correspondiente.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Compatibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relaciona con las condiciones bajo las cuales un producto puede formar parte de un programa junto con otras medidas. No deben realizarse combinaciones que no estén expresamente autorizadas.
            .row(titulo="Estabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Hace referencia a la conservación de las propiedades del producto cuando permanece almacenado bajo las condiciones establecidas por el fabricante.
            .row(titulo="Área de intervención").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite establecer si el producto está autorizado y resulta pertinente para el lugar en el que se ha identificado el problema, considerando la presencia de aves, alimento, agua o equipos.
            .row(titulo="Organismo objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La identificación correcta de la plaga evita emplear productos que no correspondan con el problema sanitario detectado.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img13.png", alt="" style="width: 350px").m-auto
      p.mb-0 La decisión final debe fundamentarse en la información técnica disponible y en los procedimientos definidos dentro del programa de control.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Hojas de Datos de Seguridad (HDS)
      p La #[b Hoja de Datos de Seguridad (HDS)] reúne información necesaria para reconocer los peligros asociados con un producto químico y establecer medidas para su manejo, almacenamiento y respuesta ante situaciones no previstas.
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2.fit___box_3(data-aos="flip-up")
            p.mb-0 El personal que tenga responsabilidades relacionadas con estos productos debe conocer el contenido pertinente de la HDS antes de intervenir en actividades de almacenamiento, transporte o uso. La información fundamental comprende:
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 190px").m-auto
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificación
                  p.mb-0 Incluye datos que permiten reconocer el producto y su fabricante o proveedor. Facilita diferenciar sustancias y consultar información específica cuando sea necesario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Composición
                  p.mb-0 Contiene información sobre los componentes relevantes del producto, incluidos los ingredientes activos declarados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificación de peligros
                  p.mb-0 Describe los principales riesgos físicos, para la salud o para el ambiente asociados con el producto. Orienta las medidas preventivas que deben adoptarse.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Primeros auxilios
                  p.mb-0 Establece las acciones iniciales indicadas por el fabricante frente a una exposición accidental y la información necesaria para solicitar atención especializada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuesta ante incendios
                  p.mb-0 Contiene orientaciones relacionadas con los peligros del producto en situaciones de incendio y con los medios previstos para su control por personal competente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuesta ante liberaciones accidentales
                  p.mb-0 Establece las medidas generales de seguridad y contención que deben seguirse conforme a los procedimientos de emergencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manipulación
                  p.mb-0 Describe condiciones para reducir riesgos durante las actividades autorizadas con el producto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Almacenamiento
                  p.mb-0 Indica las condiciones ambientales, físicas y de separación necesarias para conservarlo de manera segura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección personal
                  p.mb-0 Identifica los controles y EPP requeridos de acuerdo con los peligros asociados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transporte y eliminación
                  p.mb-0 Proporciona información relacionada con movilización y gestión final conforme a los requisitos aplicables.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img31.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La HDS complementa la etiqueta y debe mantenerse disponible para consulta en los lugares definidos por el programa de seguridad de la empresa.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Etiquetas y comunicación de peligros
      p La etiqueta constituye una fuente esencial de información para identificar el producto, reconocer sus peligros y conocer las condiciones autorizadas de uso. Debe conservarse íntegra y legible durante el almacenamiento y manejo.
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___1.fit___box_5(data-aos="flip-up")
            p.mb-0 Además del nombre comercial, la etiqueta puede incluir información sobre el ingrediente activo, restricciones, precauciones, condiciones de aplicación, tiempos establecidos por el fabricante y clasificación de peligros. Los elementos principales cumplen las siguientes funciones:
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img32.svg', alt='' style="width: 190px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Etiqueta de identificación y seguridad de un producto insecticida
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t2/img33.png', alt='Etiqueta informativa de un insecticida profesional Aviclean 25 EC, con datos sobre ingrediente activo, uso autorizado, condiciones de empleo, precauciones, clasificación de peligro, atención en emergencias, restricciones posteriores, contenido neto, lote, fechas y pictogramas de seguridad. ').m-auto
        .col-xl-6
          .box___style_2(data-aos="fade-left")
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Nombre comercial:] permite identificar el producto específico y diferenciarlo de otras formulaciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Ingrediente activo:] informa la sustancia responsable de la acción principal y facilita el seguimiento técnico dentro del programa.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Uso autorizado:] indica los organismos, situaciones o áreas para los cuales el producto ha sido aprobado según su registro.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Condiciones de empleo:] reúne las indicaciones que deben respetarse durante cualquier actividad autorizada con el producto.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Precauciones:] advierte sobre situaciones que pueden representar riesgo para las personas, los animales, el ambiente o los productos avícolas.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Categoría o clasificación de peligro:] permite reconocer el nivel o tipo de peligro comunicado por el sistema correspondiente.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Restricciones posteriores:] informa medidas como tiempos de reingreso u otras limitaciones que deban respetarse cuando correspondan.
              li.mb-0
                span.fa-li
                  i.fas.fa-feather-alt
                | #[b Datos para emergencias:] facilitan la consulta de información y la solicitud de asistencia frente a incidentes relacionados con el producto.
      p.mb-0 Los pictogramas y demás elementos de comunicación de peligros deben interpretarse de acuerdo con el sistema de clasificación indicado en la etiqueta y en la HDS. No deben sustituirse por símbolos informales cuando se utilicen con fines de seguridad.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Técnicas de aplicación dentro del programa de control
      p.mb-5 Las técnicas de aplicación se seleccionan según el tipo de plaga, las características del área y las condiciones autorizadas para cada producto. Su ejecución corresponde a personal capacitado y debe ajustarse a los procedimientos de la explotación y a la información del fabricante. Desde una perspectiva formativa, las técnicas incluidas en el material base pueden diferenciarse así:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img34.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aspersión
              p.mb-0.text-center Se relaciona con tratamientos autorizados sobre determinadas superficies o instalaciones. Su pertinencia depende del producto y de las condiciones del área.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img35.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Nebulización
              p.mb-0.text-center Puede emplearse en determinados programas para intervenir ambientes autorizados. Requiere controles específicos de seguridad y acceso.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img36.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Espolvoreo
              p.mb-0.text-center Corresponde al uso de formulaciones destinadas a aplicaciones específicas sobre lugares definidos por el programa.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img37.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Cebaderos
              p.mb-0.text-center Se integran principalmente al control de roedores y permiten mantener los productos destinados a este fin en puntos controlados y gestionados dentro del programa.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img38.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aplicación localizada
              p.mb-0.text-center Concentra la intervención en puntos previamente identificados como focos de actividad, evitando extender el tratamiento a áreas que no lo requieren.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img39.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Uso de larvicidas
              p.mb-0.text-center Se dirige a lugares en los que el diagnóstico haya identificado fases larvarias y donde el producto se encuentre autorizado para esa finalidad.
          p.mb-0 La elección de una técnica debe estar respaldada por el diagnóstico y no únicamente por la disponibilidad del producto o del equipo.
          Separador
          #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.7 Medidas de seguridad antes, durante y después de una intervención
          .bg___color_2
            .px-5
              .row.align-items-center.mb-5
                .col-xl
                  .box___style_1.fit___box_3(data-aos="flip-up")
                    p.mb-0 Las actividades relacionadas con productos químicos deben desarrollarse mediante procedimientos estandarizados. Las medidas de seguridad comienzan antes de la intervención y continúan hasta que el área, los equipos, los productos restantes y los registros hayan sido gestionados según lo establecido. Para evitar repeticiones entre las precauciones generales y el procedimiento de aplicación, ambas se integran en una sola secuencia:
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/t2/img40.png', alt='' style="width: 400px").m-auto
              .row.justify-content-center.mb-5
                .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                  .box___card_sinbordes.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t2/img41.png', alt="" ).m-auto
                      h4.text-center Antes
                      .box___card_sinbordes_p
                        p.mb-0.text-center Confirmar la identificación de la plaga y la necesidad de intervención; seleccionar únicamente un producto autorizado para el uso previsto; consultar etiqueta y HDS; comprobar las condiciones del área y de los equipos; disponer de los EPP requeridos; restringir el acceso cuando corresponda y asegurar que alimento, agua y aves no queden expuestos a situaciones no autorizadas.
                .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .box___card_sinbordes.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t2/img42.png', alt="" ).m-auto
                      h4.text-center Durante
                      .box___card_sinbordes_p
                        p.mb-0.text-center Cumplir las condiciones establecidas por el fabricante y por el procedimiento interno; utilizar los EPP definidos; impedir el acceso de personas no autorizadas; evitar actividades incompatibles con el manejo de sustancias químicas y mantener control sobre el área intervenida.
                .col-xl-4.col-md-9(data-aos="fade-left")
                  .box___card_sinbordes.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t2/img43.png', alt="" ).m-auto
                      h4.text-center Después
                      .box___card_sinbordes_p
                        p.mb-0.text-center Cumplir las medidas posteriores señaladas en la etiqueta; gestionar equipos y materiales según el procedimiento; almacenar de forma segura los productos que continúen autorizados para uso; gestionar residuos y envases mediante los mecanismos establecidos; documentar la intervención y posteriormente valorar sus resultados.
              p.mb-0 No deben realizarse mezclas o usos diferentes a los autorizados ni modificarse las condiciones establecidas en la documentación técnica del producto.
              Separador
              #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.8 Almacenamiento
      p.mb-5 A continuación, se presenta un video  sobre las condiciones esenciales para el almacenamiento adecuado de plaguicidas, orientado a prevenir riesgos de exposición, contaminación y deterioro de los productos.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Almacenamiento seguro de plaguicidas
      Separador
      #t_2_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.9 Transporte
      p.mb-5 El transporte debe conservar la integridad de los recipientes y evitar el contacto de los productos con alimentos, agua, personas no autorizadas u otros elementos susceptibles de contaminación. Las condiciones específicas dependen de la clasificación del producto y de los requisitos aplicables. Las prácticas generales incluidas en el material se relacionan así:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-0
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img44.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Mantener el envase original
              p.mb-0.text-center Conserva la identificación, las advertencias y la información técnica vinculada con el producto.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img45.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Separar de alimentos y otros insumos sensibles
              p.mb-0.text-center Disminuye el riesgo de contaminación durante la movilización.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img46.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Proteger de condiciones ambientales inadecuadas
              p.mb-0.text-center Ayuda a mantener la estabilidad del producto conforme a las especificaciones del fabricante.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img47.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Evitar daños en los recipientes
              p.mb-0.text-center Reduce la posibilidad de liberaciones accidentales durante el transporte.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img48.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Disponer de información de seguridad
              p.mb-0.text-center Facilita la actuación del personal competente en caso de presentarse una emergencia.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img49.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Cumplir los requisitos aplicables
              p.mb-0.text-center Garantiza que la movilización se realice de acuerdo con las disposiciones correspondientes al tipo de producto transportado.
          Separador
          #t_2_10.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.10 Lineamientos técnicos para el manejo responsable
          p.mb-5 El manejo responsable se sustenta en decisiones documentadas y en la integración del control químico con las demás estrategias del CIP. Las recomendaciones no deben considerarse acciones aisladas, sino criterios permanentes del programa. Los lineamientos principales comprenden:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img20.png", alt="" style="width: 350px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Utilizar productos autorizados para el uso correspondiente").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Garantiza que la selección se realice dentro del marco sanitario aplicable y de acuerdo con la finalidad aprobada para cada producto.
                .row(titulo="Fundamentar la intervención en el monitoreo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Evita incorporar productos químicos de manera rutinaria cuando no existe evidencia que justifique su utilización.
                .row(titulo="Gestionar el riesgo de resistencia").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Requiere decisiones técnicas que eviten depender reiteradamente de una única estrategia de control y que integren medidas preventivas, físicas, biológicas y químicas.
                .row(titulo="Capacitar al personal").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Fortalece la interpretación de etiquetas y HDS, el reconocimiento de peligros, el uso correcto de EPP y el cumplimiento de los procedimientos internos.
          .row.align-items-center.mb-0
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
                .row(titulo="Mantener registros actualizados").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite documentar fecha, producto empleado, responsable, área intervenida, motivo de la intervención y resultados del seguimiento.
                .row(titulo="Gestionar adecuadamente envases y residuos").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Evita su reutilización inadecuada y favorece su entrega o disposición mediante los programas y mecanismos autorizados conforme a los requisitos ambientales aplicables.
                .row(titulo="Evaluar los resultados").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Permite establecer si la intervención produjo el efecto esperado y si es necesario modificar las medidas preventivas o de control implementadas.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img13.png", alt="" style="width: 300px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
