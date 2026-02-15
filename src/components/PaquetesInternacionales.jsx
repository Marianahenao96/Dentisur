import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const PaquetesInternacionales = () => {
  const { t } = useLanguage()
  const paquetes = [
    { id: 1, titleKey: 'paquetes.paquete1Title', descKey: 'paquetes.paquete1Desc', featureKey: 'paquetes.paquete1Feature' },
    { id: 2, titleKey: 'paquetes.paquete2Title', descKey: 'paquetes.paquete2Desc', featureKey: 'paquetes.paquete2Feature' },
    { id: 3, titleKey: 'paquetes.paquete3Title', descKey: 'paquetes.paquete3Desc', featureKey: 'paquetes.paquete3Feature' }
  ]

  return (
    <section id="paquetes" className="paquetes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('paquetes.title')}</h2>
          <div className="title-underline"></div>
          <p className="section-intro">{t('paquetes.intro')}</p>
        </div>

        <div className="paquetes-grid">
          {paquetes.map((paquete) => (
            <div key={paquete.id} className="paquete-card">
              <div className="paquete-header">
                <h3 className="paquete-title">{t(paquete.titleKey)}</h3>
              </div>
              <p className="paquete-description">{t(paquete.descKey)}</p>
              <ul className="paquete-features">
                <li>{t(paquete.featureKey)}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="paquetes-cta">
          <p className="paquetes-cta-text">{t('paquetes.ctaText')}</p>
          <a 
            href="https://wa.me/573193997118?text=Hola,%20quiero%20cotizar%20mi%20tratamiento%20de%20diseño%20de%20sonrisa%20y%20saber%20qué%20descuento%20aplica%20para%20mí" 
            target="_blank" 
            rel="noopener noreferrer"
            className="paquete-btn"
          >
            {t('paquetes.contactanos')}
          </a>
        </div>

      </div>
    </section>
  )
}

export default PaquetesInternacionales


