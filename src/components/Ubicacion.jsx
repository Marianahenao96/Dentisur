import React from 'react'
import ubicacionIcon from '../assets/images/ubicacion-icon.png'
import horarioIcon from '../assets/images/horario-icon.png'
import contactoIcon from '../assets/images/contacto-icon.png'

const Ubicacion = () => {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ubicación</h2>
          <div className="title-underline"></div>
        </div>

        <div className="ubicacion-content">
          <div className="ubicacion-info">
            <div className="info-card">
              <div className="info-icon">
                <img src={typeof ubicacionIcon === 'string' ? ubicacionIcon : (ubicacionIcon?.src || '')} alt="Icono ubicación" className="ubicacion-icon-image" />
              </div>
              <div className="info-details">
                <h3>Nuestra Dirección</h3>
                <p>Visítanos en nuestras instalaciones</p>
                <p className="address">Cra 43A # 37Sur-34, Envigado</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img src={typeof horarioIcon === 'string' ? horarioIcon : (horarioIcon?.src || '')} alt="Icono horarios" className="horario-icon-image" />
              </div>
              <div className="info-details">
                <h3>Horarios de Atención</h3>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img src={typeof contactoIcon === 'string' ? contactoIcon : (contactoIcon?.src || '')} alt="Icono contacto" className="contacto-icon-image" />
              </div>
              <div className="info-details">
                <h3>Contacto</h3>
                <p>WhatsApp: +57 319 399 7118</p>
                <p>Estamos disponibles para atenderte</p>
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


