import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import ubicacionIcon from '../assets/images/ubicacion-icon.png'
import horarioIcon from '../assets/images/horario-icon.png'
import contactoIcon from '../assets/images/contacto-icon.png'

const Ubicacion = () => {
  const { t } = useLanguage()
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('ubicacion.title')}</h2>
          <div className="title-underline"></div>
        </div>

        <div className="ubicacion-content">
          <div className="ubicacion-info">
            <div className="info-card">
              <div className="info-icon">
                <img src={typeof ubicacionIcon === 'string' ? ubicacionIcon : (ubicacionIcon?.src || '')} alt={t('ubicacion.direccion')} className="ubicacion-icon-image" />
              </div>
              <div className="info-details">
                <h3>{t('ubicacion.direccion')}</h3>
                <p>{t('ubicacion.visitanos')}</p>
                <p className="address">{t('ubicacion.address')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img src={typeof horarioIcon === 'string' ? horarioIcon : (horarioIcon?.src || '')} alt={t('ubicacion.horarios')} className="horario-icon-image" />
              </div>
              <div className="info-details">
                <h3>{t('ubicacion.horarios')}</h3>
                <p>{t('ubicacion.horario1')}</p>
                <p>{t('ubicacion.horario2')}</p>
                <p>{t('ubicacion.horario3')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img src={typeof contactoIcon === 'string' ? contactoIcon : (contactoIcon?.src || '')} alt={t('ubicacion.contacto')} className="contacto-icon-image" />
              </div>
              <div className="info-details">
                <h3>{t('ubicacion.contacto')}</h3>
                <p>WhatsApp: +57 319 399 7118</p>
                <p>{t('ubicacion.contactoDesc')}</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps?q=Cra+43A+%2337Sur-34+Envigado&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dentisur"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion


