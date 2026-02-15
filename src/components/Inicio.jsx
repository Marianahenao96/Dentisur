import React from 'react'
import { useLanguage } from '../context/LanguageContext'

const Inicio = () => {
  const { t } = useLanguage()
  return (
    <section id="inicio" className="inicio">
      <div className="inicio-hero">
        <div
          className="hero-image"
          style={{ backgroundImage: 'url(/images/hero-family.png)' }}
        >
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 className="hero-text-line">{t('inicio.heroLine1')}</h2>
          <h3 className="hero-text-line-small">{t('inicio.heroLine2')}</h3>
          <h1 className="hero-text-line-large">{t('inicio.heroLine3')}</h1>
          <a href="https://wa.me/573193997118?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
             target="_blank"
             rel="noopener noreferrer"
             className="btn-hero">
            {t('inicio.btnCita')}
          </a>
        </div>
      </div>

      <div className="inicio-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/icono-experiencia.png" alt={t('inicio.experiencia')} className="feature-icon-experiencia" />
              </div>
              <h3>{t('inicio.experiencia')}</h3>
              <p>{t('inicio.experienciaDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/estetica-dental-icon.png" alt={t('inicio.estetica')} className="feature-icon-estetica" />
              </div>
              <h3>{t('inicio.estetica')}</h3>
              <p>{t('inicio.esteticaDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/tecnologia-icon.png" alt={t('inicio.tecnologia')} className="feature-icon-tecnologia" />
              </div>
              <h3>{t('inicio.tecnologia')}</h3>
              <p>{t('inicio.tecnologiaDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/profesionalismo-icon.png" alt={t('inicio.profesionalismo')} className="feature-icon-profesionalismo" />
              </div>
              <h3>{t('inicio.profesionalismo')}</h3>
              <p>{t('inicio.profesionalismoDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio


