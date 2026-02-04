import React from 'react'

const Inicio = () => {
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
          <h2 className="hero-text-line">HAZ QUE TU SONRISA HABLE POR TI</h2>
          <h3 className="hero-text-line-small">Y MUESTRE TU</h3>
          <h1 className="hero-text-line-large">MEJOR VERSIÓN</h1>
          <a href="https://wa.me/573193997118?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
             target="_blank"
             rel="noopener noreferrer"
             className="btn-hero">
            AGENDA TU CITA AHORA
          </a>
        </div>
      </div>

      <div className="inicio-features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/icono-experiencia.png" alt="Experiencia" className="feature-icon-experiencia" />
              </div>
              <h3>Experiencia</h3>
              <p>Más de 20 años brindando servicios odontológicos de calidad</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/estetica-dental-icon.png" alt="Estética Dental" className="feature-icon-estetica" />
              </div>
              <h3>Estética Dental</h3>
              <p>Especializados en diseño de sonrisas y tratamientos estéticos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/tecnologia-icon.png" alt="Tecnología" className="feature-icon-tecnologia" />
              </div>
              <h3>Tecnología</h3>
              <p>Equipos modernos y técnicas avanzadas para tu bienestar</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/profesionalismo-icon.png" alt="Profesionalismo" className="feature-icon-profesionalismo" />
              </div>
              <h3>Profesionalismo</h3>
              <p>Atención personalizada a cargo del Dr. Rafael Valencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio


