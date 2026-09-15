<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Bioseguridad y Buenas Prácticas Avícolas (BPA) aplicadas al control de plagas
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_3(data-aos="flip-up")
            p.mb-0 La bioseguridad comprende el conjunto de medidas preventivas orientadas a evitar el ingreso, establecimiento y propagación de agentes patógenos, plagas y vectores dentro de las explotaciones avícolas. Su aplicación contribuye a proteger la salud de las aves, mantener condiciones adecuadas de producción, favorecer la inocuidad de los productos avícolas y disminuir las pérdidas asociadas con enfermedades e infestaciones.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='' style="width: 400px").m-auto
      p.mb-5 Las #[b Buenas Prácticas Avícolas (BPA)] complementan este enfoque mediante procedimientos técnicos y administrativos relacionados con la infraestructura, el manejo sanitario, la limpieza y desinfección, el control de plagas, el agua, la alimentación, los residuos, el bienestar animal y la capacitación del personal. La articulación de estos componentes permite organizar las actividades de la granja bajo criterios preventivos y facilita el cumplimiento de los requisitos establecidos por las autoridades competentes.
      .row.align-items-center.mb-0
        .col-xl
          .box___style_1.color___1.fit___box_1(data-aos="flip-up")
            p.mb-0 En el control integrado de plagas, la bioseguridad tiene especial importancia porque actúa sobre las condiciones que favorecen el ingreso, refugio, alimentación y reproducción de organismos perjudiciales. De esta forma, las medidas de prevención y exclusión constituyen la primera línea de intervención antes de recurrir a otros métodos de control. 
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 190px").m-auto
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Protocolos para el control integrado de plagas
      p.mb-5 Los protocolos para el control integrado de plagas deben definir responsabilidades, frecuencias de inspección, métodos de seguimiento, criterios de intervención y mecanismos de registro. Esta organización permite desarrollar las acciones en una secuencia lógica y sustentar las decisiones en información obtenida durante el monitoreo.
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_3(data-aos="flip-up")
            p.mb-0 La intervención debe comenzar con medidas preventivas relacionadas con orden, limpieza, almacenamiento, eliminación de fuentes de alimento y refugio, mantenimiento de instalaciones y cierre de puntos de ingreso. El uso de insecticidas, rodenticidas u otros productos químicos se incorpora cuando los criterios definidos dentro del programa justifican su aplicación. El proceso comprende varias etapas complementarias:
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img3.png', alt='' style="width: 400px").m-auto
      .bg___color_1
        .px-5 
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Diagnóstico
                    p.mb-0 Determina el organismo presente, las áreas afectadas y las condiciones que pueden estar favoreciendo su establecimiento. Constituye la base para seleccionar medidas acordes con el problema identificado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img4.svg', alt='' style="width: 140px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 140px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Inspección
                    p.mb-0 Comprende el seguimiento de puntos críticos, refugios, fuentes de alimento, accesos y evidencias de actividad. Los hallazgos deben ubicarse y registrarse para establecer su distribución y evolución.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Prevención
                    p.mb-0 Busca modificar las condiciones que permiten el ingreso, alimentación, refugio o reproducción mediante saneamiento, orden, manejo de residuos, mantenimiento y exclusión.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 140px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 140px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Control físico
                    p.mb-0 Emplea barreras, trampas u otros mecanismos destinados a impedir el ingreso, limitar el desplazamiento o reducir la presencia de organismos sin depender exclusivamente de productos químicos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 5. Control biológico
                    p.mb-0 Considera el empleo de enemigos naturales u otras alternativas biológicas cuando sean técnicamente aplicables y compatibles con las condiciones de la explotación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img8.svg', alt='' style="width: 140px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img9.svg', alt='' style="width: 140px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 6. Control químico
                    p.mb-0 Se incorpora cuando los criterios del programa justifican su necesidad. Debe formar parte de una estrategia integrada y no reemplazar las medidas preventivas, físicas o de saneamiento.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 7. Evaluación
                    p.mb-0 Determina si las acciones implementadas redujeron la actividad o presencia de la plaga. Los resultados permiten decidir si la estrategia debe mantenerse, modificarse o reforzarse.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img10.svg', alt='' style="width: 140px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img11.svg', alt='' style="width: 140px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 8. Registro
                    p.mb-0 Documenta hallazgos, fechas, áreas intervenidas, responsables, medidas aplicadas y resultados. Esta información permite comparar periodos y sustentar decisiones posteriores.
      p.mb-0 La secuencia puede ajustarse según el tipo de organismo y las condiciones de la granja, pero debe conservar el principio de intervenir primero sobre los factores que favorecen la presencia de plagas.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Seguimiento del programa de bioseguridad (nota: hay dos secciones numeradas "1.2")
      p El seguimiento permite comprobar si los procedimientos se aplican de acuerdo con lo establecido y si las medidas mantienen las condiciones sanitarias requeridas. La revisión debe incluir puntos relacionados con el ingreso, las barreras sanitarias, la limpieza, el control de plagas, los residuos, los registros y las prácticas del personal.
      p.mb-5 Los aspectos de control pueden organizarse mediante criterios que permitan documentar no solo el cumplimiento, sino también los hallazgos y las acciones necesarias:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img12.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Control de ingreso del personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprobar que el acceso se realice por los puntos definidos, que se cumplan las medidas sanitarias establecidas y que los registros requeridos se encuentren diligenciados. Registrar cumplimiento, hallazgos y acciones correctivas cuando correspondan.
            .row(titulo="Pediluvios en funcionamiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar ubicación, condiciones de uso, limpieza y mantenimiento conforme al procedimiento establecido. Documentar deficiencias que puedan reducir su función sanitaria.
            .row(titulo="Rodaluvios operativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprobar que se encuentren disponibles en los puntos establecidos y que su funcionamiento corresponda con el procedimiento definido para el ingreso de vehículos.
            .row(titulo="Programa de limpieza y desinfección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Verificar cumplimiento de frecuencias, áreas intervenidas, responsables y registros. Los hallazgos deben relacionarse con las acciones requeridas para corregir incumplimientos.
            .row(titulo="Programa de control de plagas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar evidencias de actividad, registros de monitoreo, estado de barreras, puntos de control y resultados de las intervenciones realizadas.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Manejo adecuado de residuos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprobar separación, almacenamiento temporal, retiro y condiciones de los lugares destinados para su manejo, especialmente cuando puedan convertirse en fuente de alimento o refugio para plagas.
            .row(titulo="Registros actualizados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Confirmar que la información sea legible, completa, corresponda con las actividades ejecutadas y permita identificar fechas, responsables y resultados.
            .row(titulo="Capacitación del personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprobar que los trabajadores hayan recibido orientación sobre los procedimientos que les corresponden y que existan soportes de las actividades desarrolladas.
            .row(titulo="Uso correcto de EPP").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisar que los elementos requeridos para cada actividad estén disponibles y sean utilizados de acuerdo con los riesgos y procedimientos establecidos.
            .row(titulo="Cumplimiento de las BPA").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Evaluar la aplicación conjunta de los componentes sanitarios, ambientales, de bienestar, alimentación, agua, bioseguridad y registros que correspondan a la explotación.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img13.png", alt="" style="width: 400px").m-auto
      p.mb-5 Los hallazgos derivados del seguimiento deben utilizarse para corregir desviaciones, fortalecer los procedimientos y orientar las acciones de mejora. El valor del registro radica en que permite comparar periodos, identificar recurrencias y sustentar decisiones basadas en las condiciones reales de la explotación.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img14.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La bioseguridad, las Buenas Prácticas Avícolas y el control integrado de plagas forman parte de un mismo enfoque preventivo. Su articulación permite actuar sobre las rutas de ingreso, las condiciones que favorecen la permanencia de organismos perjudiciales y los factores que pueden incrementar el riesgo sanitario, mediante procedimientos documentados, responsabilidades definidas y seguimiento continuo.

</template>

<script>
export default {
  name: 'Tema1',
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
