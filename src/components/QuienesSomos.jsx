import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import misionIcon from '../assets/images/mision-icon.png'
import visionIcon from '../assets/images/vision-icon.png'
import valoresIcon from '../assets/images/valores-icon.png'
import doctorImage from '../assets/images/odontologo.jpeg'

const QuienesSomos = () => {
  const { t } = useLanguage()
  return (
    <section id="quienes-somos" className="quienes-somos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('quienesSomos.title')}</h2>
          <div className="title-underline"></div>
        </div>

        <div className="quienes-content">
          <div className="quienes-text">
            <div className="intro-box">
              <p className="intro-text">{t('quienesSomos.intro')}</p>
            </div>

            <div className="mission-vision-values">
              <div className="mvv-grid">
                <div className="mvv-card mision-card">
                  <div className="mvv-icon">
                    <img src={typeof misionIcon === 'string' ? misionIcon : (misionIcon?.src || '')} alt={t('quienesSomos.mision')} className="mision-icon-image" />
                  </div>
                  <h3>{t('quienesSomos.mision')}</h3>
                  <p>{t('quienesSomos.misionText')}</p>
                </div>

                <div className="mvv-card vision-card">
                  <div className="mvv-icon">
                    <img src={typeof visionIcon === 'string' ? visionIcon : (visionIcon?.src || '')} alt={t('quienesSomos.vision')} className="vision-icon-image" />
                  </div>
                  <h3>{t('quienesSomos.vision')}</h3>
                  <p>{t('quienesSomos.visionText')}</p>
                </div>

                <div className="mvv-card valores-card">
                  <div className="mvv-icon">
                    <img src={typeof valoresIcon === 'string' ? valoresIcon : (valoresIcon?.src || '')} alt={t('quienesSomos.valores')} className="valores-icon-image" />
                  </div>
                  <h3>{t('quienesSomos.valores')}</h3>
                  <ul className="valores-list">
                    <li>{t('quienesSomos.excelencia')}</li>
                    <li>{t('quienesSomos.integridad')}</li>
                    <li>{t('quienesSomos.empatia')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="doctor-info">
              <div className="doctor-card">
                <div className="doctor-avatar">
                  <img src={typeof doctorImage === 'string' ? doctorImage : (doctorImage?.src || '')} alt={t('quienesSomos.doctorName')} className="doctor-avatar-image" />
                </div>
                <div className="doctor-details">
                  <h3>{t('quienesSomos.doctorName')}</h3>
                  <p className="doctor-title">{t('quienesSomos.doctorTitle')}</p>
                  <p className="doctor-description">{t('quienesSomos.doctorDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos


