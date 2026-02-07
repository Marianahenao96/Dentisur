import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ortodonciaIconImage from '../assets/images/ortodoncia-icon.png'
import blanqueamientoIconImage from '../assets/images/blanqueamiento-icon.png'
import disenoSonrisaIconImage from '../assets/images/diseno-sonrisa-icon.png'
import implantesIconImage from '../assets/images/implantes-icon.png'
import endodonciaIconImage from '../assets/images/endodoncia-icon.png'
import periodonciaIconImage from '../assets/images/periodoncia-icon.png'
import profilaxisIconImage from '../assets/images/profilaxis-icon.png'

const serviciosData = {
  ortodoncia: {
    title: 'Ortodoncia',
    icon: '',
    iconImage: ortodonciaIconImage,
    description: 'La ortodoncia es una especialidad de la odontología que se encarga de corregir la posición de los dientes y la mordida mediante el uso de aparatos ortodóncicos.',
    especificaciones: [
      'Corrección de dientes mal alineados',
      'Mejora de la mordida y oclusión',
      'Tratamiento de apiñamiento dental',
      'Corrección de espacios entre dientes',
      'Alineación de mandíbulas',
      'Ortodoncia tradicional con brackets metálicos',
      'Ortodoncia estética con brackets cerámicos'
    ],
    preguntasFrecuentes: [
      {
        pregunta: '¿A qué edad se puede iniciar un tratamiento de ortodoncia?',
        respuesta: 'El tratamiento de ortodoncia puede iniciarse a partir de los 7-8 años, cuando los dientes permanentes comienzan a erupcionar. Sin embargo, no hay límite de edad para adultos.'
      },
      {
        pregunta: '¿Cuánto tiempo dura un tratamiento de ortodoncia?',
        respuesta: 'La duración promedio de un tratamiento de ortodoncia es de 18 a 24 meses, aunque puede variar según la complejidad del caso.'
      },
      {
        pregunta: '¿Duele el tratamiento de ortodoncia?',
        respuesta: 'Puede haber molestias leves los primeros días después de colocar o ajustar los brackets, pero generalmente son tolerables y desaparecen en pocos días.'
      },
      {
        pregunta: '¿Puedo comer normalmente con brackets?',
        respuesta: 'Sí, pero se recomienda evitar alimentos muy duros, pegajosos o que puedan dañar los brackets. Se debe mantener una buena higiene dental.'
      }
    ]
  },
  blanqueamiento: {
    title: 'Blanqueamiento Dental',
    icon: '',
    iconImage: blanqueamientoIconImage,
    description: 'El blanqueamiento dental es un procedimiento estético que aclara el color de los dientes, eliminando manchas y decoloraciones para lograr una sonrisa más brillante.',
    especificaciones: [
      'Blanqueamiento casero con férulas personalizadas',
      'Eliminación de manchas por tabaco, café, té',
      'Aclaramiento de dientes descoloridos',
      'Tratamiento seguro y efectivo',
      'Mantenimiento de resultados con cuidados adecuados',
      'Consulta previa para evaluar candidatura'
    ],
    preguntasFrecuentes: [
      {
        pregunta: '¿Es seguro el blanqueamiento dental?',
        respuesta: 'Sí, cuando es realizado por un profesional. Utilizamos productos aprobados y controlamos el proceso para evitar sensibilidad excesiva.'
      },
      {
        pregunta: '¿Cuánto duran los resultados?',
        respuesta: 'Los resultados pueden durar de 1 a 3 años, dependiendo de los hábitos alimenticios y de higiene. Se recomienda evitar alimentos y bebidas que manchen los dientes.'
      },
      {
        pregunta: '¿El blanqueamiento causa sensibilidad?',
        respuesta: 'Puede haber sensibilidad temporal durante y después del tratamiento, pero es manejable y desaparece en pocos días. Usamos productos con agentes desensibilizantes.'
      },
      {
        pregunta: '¿Todos los dientes se pueden blanquear?',
        respuesta: 'La mayoría de los dientes naturales responden bien al blanqueamiento. Las coronas, carillas y empastes no se blanquean, por lo que pueden necesitar reemplazo después del tratamiento.'
      }
    ]
  },
  'diseno-sonrisa': {
    title: 'Diseño de Sonrisa',
    icon: '',
    iconImage: disenoSonrisaIconImage,
    description: 'El diseño de sonrisa es un tratamiento estético integral que planifica y crea una sonrisa personalizada que se adapta perfectamente a tu rostro y personalidad.',
    especificaciones: [
      'Carillas dentales de porcelana, resina o cerómero',
      'Corrección de forma, tamaño y color',
      'Alineación y proporción dental',
      'Mejora de la línea de la sonrisa',
      'Tratamiento integral y coordinado',
      'Resultados naturales y duraderos'
    ],
    preguntasFrecuentes: [
      {
        pregunta: '¿En qué consiste el diseño de sonrisa?',
        respuesta: 'Es un proceso que incluye análisis facial, diseño digital, y aplicación de tratamientos como carillas, blanqueamiento y ortodoncia para crear la sonrisa ideal.'
      },
      {
        pregunta: '¿Cuánto tiempo toma el tratamiento?',
        respuesta: 'Depende de la complejidad, pero generalmente entre 2 a 6 meses. El diseño inicial y la planificación toman unas semanas.'
      },
      {
        pregunta: '¿Cuánto duran las carillas?',
        respuesta: 'Las carillas de porcelana pueden durar 10-15 años o más con cuidados adecuados. Las de cerómero duran aproximadamente 8-10 años, mientras que las de resina duran aproximadamente 3 a 5 años.'
      }
    ]
  },
  implantes: {
    title: 'Implantes Dentales',
    icon: '',
    iconImage: implantesIconImage,
    description: 'Los implantes dentales son la solución más avanzada para reemplazar dientes perdidos. Son raíces artificiales de titanio que se integran con el hueso y sostienen coronas o prótesis.',
    especificaciones: [
      'Implantes de titanio de alta calidad',
      'Integración ósea (osteointegración)',
      'Reemplazo de dientes individuales',
      'Prótesis sobre implantes',
      'Rehabilitación completa de boca',
      'Cirugía mínimamente invasiva',
      'Resultados permanentes y naturales',
      'Mantenimiento de estructura ósea'
    ],
    preguntasFrecuentes: [
      {
        pregunta: '¿Los implantes duelen?',
        respuesta: 'El procedimiento se realiza con anestesia local. Puede haber molestias postoperatorias leves que se controlan con medicamentos. La mayoría de pacientes reportan menos dolor del esperado.'
      },
      {
        pregunta: '¿Cuánto tiempo dura el proceso completo?',
        respuesta: 'Generalmente de 3 a 6 meses, incluyendo la colocación del implante, período de cicatrización (2-4 meses) y colocación de la corona final.'
      },
      {
        pregunta: '¿Quién puede recibir implantes?',
        respuesta: 'La mayoría de personas con buena salud general y suficiente hueso. Se realiza una evaluación previa con radiografías y tomografías para determinar la viabilidad.'
      },
      {
        pregunta: '¿Cuánto duran los implantes?',
        respuesta: 'Con cuidados adecuados y mantenimiento regular, los implantes pueden durar toda la vida. La corona puede necesitar reemplazo después de 10-15 años.'
      }
    ]
  },
  endodoncia: {
    title: 'Endodoncia',
    icon: '💉',
    iconImage: endodonciaIconImage,
    description: 'La endodoncia, también conocida como tratamiento de conducto, es un procedimiento que salva dientes que de otra manera tendrían que ser extraídos, eliminando la pulpa infectada.',
    especificaciones: [
      'Tratamiento de conductos radiculares',
      'Eliminación de pulpa infectada',
      'Limpieza y desinfección de canales',
      'Sellado hermético de conductos',
      'Salvamento de dientes naturales',
      'Alivio del dolor dental',
      'Prevención de infecciones',
      'Restauración funcional del diente'
    ],
    preguntasFrecuentes: [
      {
        pregunta: '¿Duele el tratamiento de endodoncia?',
        respuesta: 'El procedimiento se realiza con anestesia local, por lo que no debería doler. El objetivo es aliviar el dolor que ya existe por la infección.'
      },
      {
        pregunta: '¿Cuántas citas se necesitan?',
        respuesta: 'La mayoría de endodoncias se completan en 1-2 citas, dependiendo de la complejidad del caso y el número de conductos.'
      },
      {
        pregunta: '¿El diente se debilita después del tratamiento?',
        respuesta: 'El diente puede quedar más frágil, por lo que generalmente se recomienda colocar una corona para protegerlo y restaurar su función completa.'
      },
      {
        pregunta: '¿Cuánto dura un diente con endodoncia?',
        respuesta: 'Con cuidados adecuados y una restauración apropiada, un diente tratado con endodoncia puede durar toda la vida, igual que un diente natural.'
      }
    ]
  },
  periodoncia: {
    title: 'Periodoncia',
    icon: '',
    iconImage: periodonciaIconImage,
    description: 'La periodoncia trata las enfermedades de las encías y los tejidos que sostienen los dientes, como gingivitis y periodontitis, para mantener una salud bucal óptima.',
    especificaciones: [
      'Tratamiento de gingivitis',
      'Tratamiento de periodontitis',
      'Limpieza profunda (raspado y alisado radicular)',
      'Cirugía periodontal cuando es necesario',
      'Mantenimiento periodontal',
      'Prevención de pérdida dental',
      'Regeneración de tejidos',
      'Mejora de salud bucal general'
    ],
    preguntasFrecuentes: [
      {
        pregunta: '¿Qué es la enfermedad periodontal?',
        respuesta: 'Es una infección de las encías y tejidos que sostienen los dientes, causada por bacterias. Si no se trata, puede llevar a la pérdida de dientes.'
      },
      {
        pregunta: '¿Cuáles son los síntomas?',
        respuesta: 'Sangrado de encías, inflamación, mal aliento persistente, recesión de encías, movilidad dental y sensibilidad.'
      },
      {
        pregunta: '¿Se puede curar la periodontitis?',
        respuesta: 'Sí, con tratamiento adecuado se puede controlar y detener el avance. El mantenimiento regular es esencial para prevenir recurrencias.'
      },
      {
        pregunta: '¿Cuánto tiempo toma el tratamiento?',
        respuesta: 'Depende de la severidad. Los casos leves pueden tratarse en 1-2 citas, mientras que casos avanzados pueden requerir varias sesiones y seguimiento.'
      }
    ]
  },
  profilaxis: {
    title: 'Profilaxis Dental',
    icon: '',
    iconImage: profilaxisIconImage,
    description: 'La profilaxis dental es una limpieza profesional profunda que elimina placa, sarro y manchas de los dientes, manteniendo una salud bucal óptima y previniendo enfermedades.',
    especificaciones: [
      'Limpieza profesional profunda',
      'Eliminación de placa bacteriana',
      'Remoción de sarro (cálculo dental)',
      'Pulido de dientes',
      'Eliminación de manchas superficiales',
      'Aplicación de flúor',
      'Prevención de caries y enfermedades',
      'Mantenimiento de salud bucal'
    ],
    preguntasFrecuentes: [
      {
        pregunta: '¿Con qué frecuencia debo hacerme una profilaxis?',
        respuesta: 'Se recomienda cada 6 meses para la mayoría de personas. Pacientes con enfermedad periodontal o mayor riesgo pueden necesitarla cada 3-4 meses.'
      },
      {
        pregunta: '¿Duele la limpieza dental?',
        respuesta: 'Generalmente no duele. Puede haber molestias leves si hay mucha acumulación de sarro o encías sensibles, pero el procedimiento es bien tolerado.'
      },
      {
        pregunta: '¿La profilaxis blanquea los dientes?',
        respuesta: 'Elimina manchas superficiales y puede hacer que los dientes se vean más claros, pero no es un tratamiento de blanqueamiento. Para blanquear se necesita un tratamiento específico.'
      },
      {
        pregunta: '¿Es necesario si me cepillo bien los dientes?',
        respuesta: 'Sí, porque el cepillado no puede eliminar todo el sarro que se acumula, especialmente en áreas de difícil acceso. La profilaxis profesional es complementaria a la higiene diaria.'
      }
    ]
  }
}

const ServicioDetalle = () => {
  const router = useRouter()
  const rawId = router.query.servicioId
  const servicioId = typeof rawId === 'string' ? rawId : Array.isArray(rawId) ? rawId[0] : ''
  const [openFAQ, setOpenFAQ] = useState(null)

  const servicio = serviciosData[servicioId]

  if (!router.isReady) {
    return null
  }

  if (!servicio) {
    return (
      <div className="servicio-not-found">
        <h2>Servicio no encontrado</h2>
        <button onClick={() => router.push('/')}>Volver al inicio</button>
      </div>
    )
  }

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const isOrtodoncia = servicioId === 'ortodoncia'
  const isBlanqueamiento = servicioId === 'blanqueamiento'
  const isDisenoSonrisa = servicioId === 'diseno-sonrisa'
  const isImplantes = servicioId === 'implantes'
  const isEndodoncia = servicioId === 'endodoncia'
  const isPeriodoncia = servicioId === 'periodoncia'
  const isProfilaxis = servicioId === 'profilaxis'
  const hasIconImage = servicio.iconImage
  
  const getHeroImage = () => {
    if (isBlanqueamiento) return '/images/blanqueamiento-hero.png'
    if (isDisenoSonrisa) return '/images/diseno-sonrisa-hero.png'
    if (isImplantes) return '/images/implantes-hero.jpg'
    if (isEndodoncia) return '/images/endodoncia-hero.png'
    if (isPeriodoncia) return '/images/periodoncia-hero.png'
    if (isProfilaxis) return '/images/profilaxis-hero.png'
    return '/images/servicio-hero.png'
  }

  return (
    <div className="servicio-detalle-page">
      <Head>
        <title>{servicio.title} - Dentisur</title>
        <meta name="description" content={`${servicio.description} Consultorio Dentisur Dr. Rafael Valencia en Envigado. Agenda tu cita.`} />
      </Head>
      <div className={`servicio-hero ${isOrtodoncia ? 'ortodoncia-hero' : ''} ${isEndodoncia ? 'endodoncia-hero' : ''}`}>
        <div className="servicio-hero-image">
          <img src={getHeroImage()} alt={servicio.title} className={`hero-bg-image ${isEndodoncia ? 'endodoncia-hero-image' : ''}`} />
        </div>
        <div className={`servicio-hero-overlay ${isOrtodoncia ? 'ortodoncia-overlay' : ''}`}></div>
        <div className="container">
          <div className={`servicio-header ${isOrtodoncia ? 'ortodoncia-header' : ''} ${isBlanqueamiento ? 'blanqueamiento-header' : ''}`}>
            {servicio.iconImage ? (
              <div className="icon-wrapper">
                <img 
                  src={typeof servicio.iconImage === 'string' ? servicio.iconImage : (servicio.iconImage?.src || '')} 
                  alt={servicio.title} 
                  className={`servicio-icon-image ${isOrtodoncia ? 'ortodoncia-icon' : ''} ${isBlanqueamiento ? 'blanqueamiento-icon' : ''} ${isDisenoSonrisa ? 'diseno-sonrisa-icon' : ''} ${isImplantes ? 'implantes-icon' : ''} ${isEndodoncia ? 'endodoncia-icon' : ''} ${isPeriodoncia ? 'periodoncia-icon' : ''} ${isProfilaxis ? 'profilaxis-icon' : ''}`}
                />
                <div className="icon-underline"></div>
              </div>
            ) : (
              <span className="servicio-icon">{servicio.icon}</span>
            )}
            <h1 className={isOrtodoncia ? 'ortodoncia-title' : ''}>{servicio.title}</h1>
            {!isOrtodoncia && (
              <p className="servicio-hero-description">{servicio.description}</p>
            )}
          </div>
        </div>
      </div>

      <div className="servicio-content">
        <div className="container">
          <section className="especificaciones-section">
            <h2>Especificaciones del Tratamiento</h2>
            <div className="especificaciones-grid">
              {servicio.especificaciones.map((item, index) => (
                <div key={index} className="especificacion-item">
                  <span className="check-icon">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="faq-section">
            <h2>Preguntas Frecuentes</h2>
            <div className="faq-list">
              {servicio.preguntasFrecuentes.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className={`faq-question ${openFAQ === index ? 'open' : ''}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.pregunta}</span>
                    <span className="faq-arrow">{openFAQ === index ? '▲' : '▼'}</span>
                  </button>
                  {openFAQ === index && (
                    <div className="faq-answer">
                      <p>{faq.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="info-notice">
              <div className="notice-icon" aria-hidden="true">Info</div>
              <div className="notice-content">
                <h4>Importante</h4>
                <p>
                  El costo y duración del tratamiento varían según la valoración individual de cada paciente. 
                  Es necesario realizar una consulta personalizada para determinar el plan de tratamiento más 
                  adecuado para tu caso específico.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ServicioDetalle

