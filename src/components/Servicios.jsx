import React from 'react'
import Link from 'next/link'
import servicioHeroImage from '../assets/images/servicio-hero.png'
import blanqueamientoHeroImage from '../assets/images/blanqueamiento-hero.png'
import disenoSonrisaHeroImage from '../assets/images/diseno-sonrisa-hero.png'
import implantesHeroImage from '../assets/images/implantes-hero.jpg'
import endodonciaHeroImage from '../assets/images/endodoncia-hero.png'
import periodonciaHeroImage from '../assets/images/periodoncia-hero.png'
import profilaxisHeroImage from '../assets/images/profilaxis-hero.png'

const Servicios = () => {
  const servicios = [
    {
      id: 'ortodoncia',
      title: 'Ortodoncia',
      description: 'Corrección de la posición de los dientes y la mordida con aparatos ortodóncicos. Sonrisa alineada y mordida saludable.',
      path: '/servicios/ortodoncia',
      image: servicioHeroImage
    },
    {
      id: 'blanqueamiento',
      title: 'Blanqueamiento Dental',
      description: 'Aclara el color de los dientes y elimina manchas para una sonrisa más brillante y natural.',
      path: '/servicios/blanqueamiento',
      image: blanqueamientoHeroImage
    },
    {
      id: 'diseno-sonrisa',
      title: 'Diseño de Sonrisa',
      description: 'Sonrisa personalizada que se adapta a tu rostro y personalidad. Estética y armonía facial.',
      path: '/servicios/diseno-sonrisa',
      image: disenoSonrisaHeroImage
    },
    {
      id: 'implantes',
      title: 'Implantes Dentales',
      description: 'Reemplazo de dientes perdidos con raíces de titanio. Resultados naturales y duraderos.',
      path: '/servicios/implantes',
      image: implantesHeroImage
    },
    {
      id: 'endodoncia',
      title: 'Endodoncia',
      description: 'Tratamiento de conducto que salva el diente eliminando la pulpa infectada.',
      path: '/servicios/endodoncia',
      image: endodonciaHeroImage
    },
    {
      id: 'periodoncia',
      title: 'Periodoncia',
      description: 'Tratamiento de encías y tejidos de soporte. Gingivitis y periodontitis.',
      path: '/servicios/periodoncia',
      image: periodonciaHeroImage
    },
    {
      id: 'profilaxis',
      title: 'Profilaxis Dental',
      description: 'Limpieza profesional: placa, sarro y manchas. Salud bucal y prevención.',
      path: '/servicios/profilaxis',
      image: profilaxisHeroImage
    }
  ]

  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            En Dentisur ofrecemos una amplia gama de servicios odontológicos de alta calidad, 
            utilizando tecnología avanzada y técnicas modernas para garantizar los mejores resultados.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio) => {
            const linkHref = typeof servicio.path === 'string' ? servicio.path : `/servicios/${String(servicio.id)}`
            return (
              <Link key={servicio.id} href={linkHref} className="servicio-card" prefetch={false}>
                <div className="servicio-image-container">
                  <img src={typeof servicio.image === 'string' ? servicio.image : (servicio.image?.src || '')} alt={servicio.title} className="servicio-image" />
                </div>
                <div className="servicio-content">
                  <h3 className="servicio-title">{servicio.title}</h3>
                  <p className="servicio-description">{servicio.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <section className="cta-section">
          <h3>¿Listo para comenzar tu tratamiento?</h3>
          <p>Agenda una consulta con nuestros especialistas</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/573193997118?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Agendar por WhatsApp
            </a>
            <Link href="/agendar-cita" className="cta-button cta-button-secondary">
              Solicitar cita por formulario
            </Link>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Servicios


