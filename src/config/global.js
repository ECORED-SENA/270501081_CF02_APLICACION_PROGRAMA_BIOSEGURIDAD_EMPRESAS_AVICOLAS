export default {
  global: {
    Name: 'Control integrado de plagas y vectores en empresas avícolas',
    Description:
      'Este componente formativo desarrolla criterios técnicos para implementar el Control Integrado de Plagas en empresas avícolas, articulando bioseguridad, Buenas Prácticas Avícolas, manejo responsable de plaguicidas, Seguridad y Salud en el Trabajo, registros, inspección, monitoreo y toma de muestras. Promueve la prevención, trazabilidad, evaluación de resultados y aplicación de acciones de mejora conforme a procedimientos y normatividad vigente del sector avícola.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Bioseguridad y Buenas Prácticas Avícolas (BPA) aplicadas al control de plagas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Protocolos para el control integrado de plagas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Seguimiento del programa de bioseguridad (nota: hay dos secciones numeradas "1.2")',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plaguicidas, insecticidas y rodenticidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos básicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios para la selección',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Hojas de Datos de Seguridad (HDS)',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Etiquetas y comunicación de peligros',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Técnicas de aplicación dentro del programa de control',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              'Medidas de seguridad antes, durante y después de una intervención',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Almacenamiento',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo: 'Transporte',
            hash: 't_2_9',
          },
          {
            numero: '2.10',
            titulo: 'Lineamientos técnicos para el manejo responsable',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguridad y Salud en el Trabajo en el control de plagas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Principios y objetivos de la Seguridad y Salud en el Trabajo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Gestión preventiva en actividades relacionadas con productos químicos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Riesgos laborales asociados con el control de plagas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Responsabilidades dentro del SG-SST ',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Gestión de incidentes y mejoramiento continuo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Registros y documentación del Programa de Control Integrado de Plagas (CIP)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Función de los registros',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de registros',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Criterios para el diligenciamiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Trazabilidad',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Documentación del programa ',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Conservación y archivo de la documentación ',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Inspección, monitoreo y toma de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Toma de muestras de agua',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Identificación y trazabilidad de las muestras ',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Verificación de los protocolos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Seguimiento de las condiciones de bioseguridad',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Indicadores de seguimiento',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Gestión de hallazgos ',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plan de mejoramiento y manejo de contingencias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Plan de mejoramiento',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Acciones preventivas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Acciones correctivas',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Contingencias',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Atención inicial frente a una posible exposición química ',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Registro del plan de mejoramiento ',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas para prevenir el ingreso y la propagación de enfermedades en la granja.',
    },
    {
      termino: 'Buenas Prácticas Avícolas (BPA)',
      significado:
        'procedimientos que garantizan una producción avícola segura, inocua y sostenible.',
    },
    {
      termino: 'Control integrado de plagas',
      significado:
        'estrategia que combina métodos preventivos, físicos, biológicos y químicos para controlar plagas.',
    },
    {
      termino: 'Detergente',
      significado:
        'sustancia utilizada para remover la suciedad antes de la desinfección.',
    },
    {
      termino: 'Equipo de Protección Personal (EPP)',
      significado:
        'elementos que protegen al trabajador frente a riesgos ocupacionales.',
    },
    {
      termino: 'Inspección',
      significado:
        'evaluación sistemática para verificar las condiciones sanitarias y la presencia de plagas.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'seguimiento periódico para evaluar la eficacia del programa de control.',
    },
    {
      termino: 'Pediluvio',
      significado:
        'dispositivo utilizado para desinfectar el calzado al ingresar a la granja.',
    },
    {
      termino: 'Plaga',
      significado:
        'organismo que ocasiona pérdidas económicas o representa riesgos sanitarios.',
    },
    {
      termino: 'Plaguicida',
      significado:
        'producto destinado a prevenir, controlar o eliminar plagas.',
    },
    {
      termino: 'POES',
      significado:
        'procedimientos estandarizados para la limpieza y desinfección de instalaciones y equipos.',
    },
    {
      termino: 'Registro',
      significado:
        'documento que evidencia la ejecución de las actividades del programa sanitario.',
    },
    {
      termino: 'Rodenticida',
      significado:
        'producto utilizado para el control de poblaciones de roedores.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'seguimiento documentado de los procesos para garantizar su control y verificación.',
    },
    {
      termino: 'Vector',
      significado:
        'organismo que transmite agentes causantes de enfermedades entre animales o personas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 1 de febrero). Mejorar las condiciones de bienestar de las aves, un propósito del ICA. ',
      link: 'https://www.ica.gov.co/noticias/mejorar-condiciones-bienestar-aves ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 29 de marzo). El ICA inició pruebas en campo de la metodología que evaluará el bienestar animal en aves de corral. ',
      link: 'https://www.ica.gov.co/noticias/ica-inicio-metodologia-bienestar-animal-ave-corral ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 2 de mayo). Profesionales del ICA se capacitan en evaluación del bienestar animal en aves de corral. ',
      link: 'https://www.ica.gov.co/noticias/ica-capacitacion-evaluacion-aves-de-corral ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 19 de septiembre). El ICA avanza en extensión agropecuaria con bienestar animal. ',
      link: 'https://www.ica.gov.co/noticias/capacitacion-bienestar-animal-narino ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023, 16 de noviembre). Colombia avanza en bienestar animal en la producción primaria. ',
      link: 'https://www.ica.gov.co/noticias/colombia-avanza-bienestar-animal-produccion-agroal ',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s. f.). Grupo de Inocuidad en la Producción Pecuaria Primaria y Bienestar Animal. ',
      link: 'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias.aspx ',
    },
    {
      referencia:
        'Nicol, C. J., Abeyesinghe, S. M., & Chang, Y.-M. (2024). An analysis of the welfare of fast-growing and slower-growing strains of broiler chicken. Frontiers in Animal Science, 5, Article 1374609. ',
      link: 'https://doi.org/10.3389/fanim.2024.1374609 ',
    },
    {
      referencia:
        'Ozenturk, U., Chen, Z., Jamone, L., & Versace, E. (2023). Robotics for poultry farming: Challenges and opportunities [Preprint]. arXiv. ',
      link: 'https://arxiv.org/abs/2311.05069 ',
    },
    {
      referencia:
        'Yang, X., Dai, H., Wu, Z., Bist, R., Subedi, S., Sun, J., Lu, G., Li, C., Liu, T., & Chai, L. (2023). SAM for poultry science [Preprint]. arXiv. ',
      link: 'https://arxiv.org/abs/2305.10254',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
