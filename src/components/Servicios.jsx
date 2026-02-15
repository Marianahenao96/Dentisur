import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import servicioHeroImage from '../assets/images/servicio-hero.png'
import blanqueamientoHeroImage from '../assets/images/blanqueamiento-hero.png'
import disenoSonrisaHeroImage from '../assets/images/diseno-sonrisa-hero.png'
import implantesHeroImage from '../assets/images/implantes-hero.jpg'
import endodonciaHeroImage from '../assets/images/endodoncia-hero.png'
import periodonciaHeroImage from '../assets/images/periodoncia-hero.png'
import profilaxisHeroImage from '../assets/images/profilaxis-hero.png'

const Servicios = () => {
  const { t } = useLanguage()
  const servicios = [
    { id: 'ortodoncia', titleKey: 'servicios.ortodoncia', descKey: 'servicios.ortodonciaDesc', path: '/servicios/ortodoncia', image: servicioHeroImage },
    { id: 'blanqueamiento', titleKey: 'servicios.blanqueamiento', descKey: 'servicios.blanqueamientoDesc', path: '/servicios/blanqueamiento', image: blanqueamientoHeroImage },
    { id: 'diseno-sonrisa', titleKey: 'servicios.disenoSonrisa', descKey: 'servicios.disenoSonrisaDesc', path: '/servicios/diseno-sonrisa', image: disenoSonrisaHeroImage },
    { id: 'implantes', titleKey: 'servicios.implantes', descKey: 'servicios.implantesDesc', path: '/servicios/implantes', image: implantesHeroImage },
    { id: 'endodoncia', titleKey: 'servicios.endodoncia', descKey: 'servicios.endodonciaDesc', path: '/servicios/endodoncia', image: endodonciaHeroImage },
    { id: 'periodoncia', titleKey: 'servicios.periodoncia', descKey: 'servicios.periodonciaDesc', path: '/servicios/periodoncia', image: periodonciaHeroImage },
    { id: 'profilaxis', titleKey: 'servicios.profilaxis', descKey: 'servicios.profilaxisDesc', path: '/servicios/profilaxis', image: profilaxisHeroImage }
  ]

  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('servicios.title')}</h2>
          <div className="title-underline"></div>
          <p className="section-intro">{t('servicios.intro')}</p>
        </div>

        <div className="servicios-grid">
          {servicios.map((servicio) => {
            const linkHref = typeof servicio.path === 'string' ? servicio.path : `/servicios/${String(servicio.id)}`
            return (
              <Link key={servicio.id} href={linkHref} className="servicio-card" prefetch={false}>
                <div className="servicio-image-container">
                  <img src={typeof servicio.image === 'string' ? servicio.image : (servicio.image?.src || '')} alt={t(servicio.titleKey)} className="servicio-image" />
                </div>
                <div className="servicio-content">
                  <h3 className="servicio-title">{t(servicio.titleKey)}</h3>
                  <p className="servicio-description">{t(servicio.descKey)}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <section className="cta-section">
          <h3>{t('servicios.ctaTitle')}</h3>
          <p>{t('servicios.ctaSub')}</p>
          <div className="cta-buttons">
            <a
              href="https://wa.me/573193997118?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              {t('servicios.ctaWhatsApp')}
            </a>
            <Link href="/agendar-cita" className="cta-button cta-button-secondary">
              {t('servicios.ctaForm')}
            </Link>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Servicios


