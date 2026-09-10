<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Control integrado de plagas y vectores en empresas avícolas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos clave relacionados con bioseguridad, control integrado de plagas, manejo responsable de plaguicidas, seguridad laboral, monitoreo y trazabilidad en empresas avícolas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la bioseguridad en una explotación avícola?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar el ingreso y propagación de agentes patógenos, plagas y vectores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar el uso permanente de productos químicos dentro de las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los procedimientos sanitarios mediante controles exclusivamente administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir las actividades de seguimiento efectuadas por el personal responsable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué constituyen las medidas de prevención y exclusión dentro del control integrado de plagas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una alternativa aplicada únicamente después del tratamiento químico establecido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La primera línea de intervención frente a la presencia de plagas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un procedimiento exclusivo para eliminar residuos generados durante la producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una estrategia destinada solamente al almacenamiento de productos químicos autorizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué actividad corresponde al paso de diagnóstico dentro del Control Integrado de Plagas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar únicamente la cantidad de productos químicos utilizados durante la intervención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Instalar barreras físicas sin verificar previamente las condiciones del área afectada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar el organismo presente, las áreas afectadas y los factores favorables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Aplicar productos químicos antes de establecer la naturaleza del problema sanitario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función principal de la etapa de evaluación del CIP?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar solamente los nombres del personal encargado de cada procedimiento realizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar exclusivamente los costos generados durante las actividades de control químico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar nuevos productos sin considerar los resultados obtenidos durante el seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar si las acciones implementadas redujeron la presencia de la plaga.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué caracteriza principalmente a un insecticida dentro del control de plagas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un plaguicida destinado específicamente al control de diferentes especies de insectos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Es un producto utilizado exclusivamente para controlar poblaciones de roedores domésticos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Es una sustancia destinada únicamente a controlar fases larvarias de organismos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Es una formulación utilizada exclusivamente para eliminar moluscos presentes en instalaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la finalidad principal de un rodenticida dentro del programa CIP?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar exclusivamente insectos adultos encontrados alrededor de las instalaciones avícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Controlar principalmente ratas y ratones mediante una estrategia integrada de manejo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar fases larvarias presentes en lugares donde existe acumulación de agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar exclusivamente ácaros presentes en equipos y superficies de producción avícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué criterio de selección de plaguicidas se relaciona con los peligros para personas y animales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La estabilidad del producto durante las condiciones establecidas de almacenamiento seguro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La persistencia de sus efectos durante el periodo posterior a la intervención.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La toxicidad identificada mediante la etiqueta, la HDS y su clasificación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La eficacia demostrada frente al organismo objetivo durante el seguimiento realizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué criterio permite establecer si un producto corresponde al problema sanitario identificado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La duración estimada del producto dentro de su recipiente original cerrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La facilidad disponible para transportar el producto entre diferentes áreas autorizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La presentación comercial elegida para conservar el producto durante su almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La identificación correcta del organismo objetivo presente en el área intervenida.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es la función principal de la Hoja de Datos de Seguridad (HDS)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Informar sobre peligros y medidas para manejar de forma segura un producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar exclusivamente las cantidades de producto aplicadas durante cada tratamiento realizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar únicamente la frecuencia con que debe inspeccionarse una instalación avícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente la etiqueta original colocada por el fabricante del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué información de la HDS orienta las acciones iniciales frente a una exposición accidental?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La información correspondiente al almacenamiento seguro y separación física del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La información correspondiente a primeros auxilios indicada para una exposición accidental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La información relacionada exclusivamente con la composición comercial completa del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La información destinada únicamente al transporte habitual realizado entre diferentes instalaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué función cumple el ingrediente activo indicado en la etiqueta de un plaguicida?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar exclusivamente al establecimiento donde fue adquirido inicialmente el producto químico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Indicar únicamente las condiciones ambientales requeridas para almacenar correctamente el producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Informar la sustancia responsable de la acción principal ejercida por el producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar exclusivamente el tiempo disponible para registrar una intervención en campo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué debe hacerse con la etiqueta durante el almacenamiento y manejo del producto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Retirarla después de registrar la información básica correspondiente al producto utilizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reemplazarla mediante símbolos internos establecidos libremente por cada empresa avícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modificarla según las condiciones particulares observadas durante cada intervención sanitaria realizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conservarla íntegra y legible para mantener disponible la información esencial del producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Qué técnica concentra el tratamiento en puntos previamente identificados como focos de actividad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La aplicación localizada dirigida únicamente hacia los puntos donde existe actividad detectada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La nebulización general aplicada rutinariamente sobre todas las áreas de la explotación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El espolvoreo permanente realizado sin considerar el diagnóstico previo del problema encontrado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La aspersión extendida sobre zonas donde no existen evidencias de actividad registrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué debe verificarse antes de realizar una intervención con productos químicos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente que exista suficiente cantidad de producto disponible dentro del almacén.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La plaga, la necesidad de intervención, la etiqueta, la HDS y los EPP.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solamente que el equipo seleccionado haya sido utilizado previamente por otro trabajador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente que las instalaciones permanezcan abiertas durante todo el procedimiento de aplicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué práctica es fundamental durante el transporte de productos para control de plagas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Trasladar los productos junto con alimentos para aprovechar mejor el espacio disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cambiar los productos hacia recipientes sin identificación para facilitar su manipulación posterior.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener los productos separados de alimentos, agua y otros insumos sensibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Transportar los envases abiertos para verificar continuamente el estado del contenido almacenado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Por qué debe fundamentarse la intervención química en los resultados del monitoreo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para aumentar periódicamente la cantidad de productos utilizados dentro del programa establecido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para eliminar la necesidad de aplicar controles físicos, preventivos y biológicos complementarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para permitir aplicaciones rutinarias sin considerar evidencias de presencia de organismos perjudiciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para evitar tratamientos químicos cuando no existe evidencia que justifique su utilización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una función del Sistema de Gestión de Seguridad y Salud en el Trabajo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar peligros, valorar riesgos, establecer controles y realizar seguimiento de las condiciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazar las medidas preventivas mediante el uso exclusivo de equipos de protección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar los registros relacionados con incidentes ocurridos durante actividades de control sanitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Delegar únicamente al trabajador la responsabilidad sobre todos los riesgos laborales existentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué finalidad tiene el uso adecuado de los Elementos de Protección Personal (EPP)?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar completamente todos los peligros existentes antes de iniciar cualquier actividad laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Disminuir la exposición residual cuando otros controles no eliminan totalmente el peligro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir los procedimientos internos definidos para manipular sustancias químicas de forma segura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evitar la necesidad de capacitar al personal responsable de realizar actividades de intervención.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué permite el mantenimiento de registros actualizados dentro del programa CIP?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar la necesidad de realizar evaluaciones posteriores a las actividades de intervención ejecutadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir los procesos de inspección mediante información administrativa sin verificación en campo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documentar fechas, responsables, áreas intervenidas, productos utilizados y resultados obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la información disponible para evitar comparaciones entre diferentes periodos de seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Para qué deben utilizarse los hallazgos obtenidos durante el seguimiento del programa?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para justificar automáticamente la aplicación periódica de productos químicos en todas las áreas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para mantener procedimientos existentes aunque se hayan detectado desviaciones durante la inspección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para eliminar registros antiguos sin analizar las causas relacionadas con problemas recurrentes encontrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para corregir desviaciones, fortalecer procedimientos y orientar acciones continuas de mejoramiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
