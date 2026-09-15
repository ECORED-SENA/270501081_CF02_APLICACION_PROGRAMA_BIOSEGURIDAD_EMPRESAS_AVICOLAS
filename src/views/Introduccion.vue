<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 El Control Integrado de Plagas (CIP) constituye un componente esencial de la bioseguridad en las empresas avícolas, debido a que permite prevenir, identificar y controlar la presencia de organismos que pueden afectar la salud de las aves, la inocuidad de los productos y las condiciones sanitarias de la explotación. Su aplicación articula medidas preventivas, monitoreo permanente y diferentes métodos de intervención, priorizando el control de las condiciones que favorecen el ingreso, refugio, alimentación y reproducción de las plagas.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La implementación del CIP requiere integrar las Buenas Prácticas Avícolas (BPA), el manejo responsable de plaguicidas, la Seguridad y Salud en el Trabajo, la capacitación del personal y la gestión documental. Estas acciones permiten reducir los riesgos asociados con productos químicos, proteger a los trabajadores y mantener procedimientos organizados que faciliten el cumplimiento de las medidas establecidas dentro del programa de bioseguridad.
      .row.align-items-center.mb-0
        .col-xl
          .box___style_1.fit___box_2(data-aos="flip-up")
            p.mb-0 Asimismo, la inspección, el monitoreo, la toma de muestras y el mantenimiento de registros permiten evaluar las condiciones sanitarias de la explotación, identificar cambios o desviaciones y establecer acciones preventivas y correctivas. La información obtenida fortalece la trazabilidad, facilita la toma de decisiones y contribuye al mejoramiento continuo del Programa de Control Integrado de Plagas en las empresas avícolas.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img2.svg', alt='' style="width: 190px").m-auto
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
