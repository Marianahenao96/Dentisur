import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import consultorioImg from '../assets/images/consultorio.jpeg'
import consultorio1Img from '../assets/images/consultorio1.jpeg'
import consultorio2Img from '../assets/images/consultorio2.jpeg'

const Fotos = () => {
  const { t } = useLanguage()
  const fotos = [
    { id: 1, url: consultorioImg, title: 'Consultorio' },
    { id: 2, url: consultorio1Img, title: 'Consultorio' },
    { id: 3, url: consultorio2Img, title: 'Consultorio' }
  ]

  return (
    <section id="fotos" className="fotos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('fotos.title')}</h2>
          <div className="title-underline"></div>
          <p className="section-intro">{t('fotos.intro')}</p>
        </div>

        <div className="fotos-grid">
          {fotos.map((foto) => (
            <div key={foto.id} className="foto-item">
              <div className="foto-image-container">
                <img
                  src={typeof foto.url === 'string' ? foto.url : (foto.url?.src || '')}
                  alt={`${foto.title} ${foto.id}`}
                  className="foto-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect fill="#E8F4F8" width="400" height="300"/><text fill="#2C5F8D" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="18">Consultorio</text></svg>')
                  }}
                />
                <div className="foto-overlay">
                  <h4 className="foto-title">{t('fotos.consultorio')}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fotos


