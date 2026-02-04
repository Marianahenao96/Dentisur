import React from 'react'
import misionIcon from '../assets/images/mision-icon.png'
import visionIcon from '../assets/images/vision-icon.png'
import valoresIcon from '../assets/images/valores-icon.png'
import doctorImage from '../assets/images/odontologo.jpeg'

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="quienes-somos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Quienes Somos</h2>
          <div className="title-underline"></div>
        </div>

        <div className="quienes-content">
          <div className="quienes-text">
            <div className="intro-box">
              <p className="intro-text">
                <strong>Dentisur</strong> es un consultorio odontológico con más de <strong>20 años de experiencia</strong> en el mercado, 
                comprometido con la excelencia en el cuidado dental y la satisfacción de nuestros pacientes.
              </p>
            </div>

            <div className="mission-vision-values">
              <div className="mvv-grid">
                <div className="mvv-card mision-card">
                  <div className="mvv-icon">
                    <img src={typeof misionIcon === 'string' ? misionIcon : (misionIcon?.src || '')} alt="Misión" className="mision-icon-image" />
                  </div>
                  <h3>Misión</h3>
                  <p>
                    Brindar servicios odontológicos de excelencia con un enfoque integral, utilizando 
                    tecnología de vanguardia y técnicas modernas, para mejorar la salud bucal y la calidad 
                    de vida de nuestros pacientes, manteniendo siempre los más altos estándares de 
                    profesionalismo y atención personalizada.
                  </p>
                </div>

                <div className="mvv-card vision-card">
                  <div className="mvv-icon">
                    <img src={typeof visionIcon === 'string' ? visionIcon : (visionIcon?.src || '')} alt="Visión" className="vision-icon-image" />
                  </div>
                  <h3>Visión</h3>
                  <p>
                    Ser reconocidos como el consultorio odontológico líder en la región, destacándonos 
                    por nuestra innovación, excelencia clínica y compromiso con la satisfacción del paciente. 
                    Aspiramos a ser referentes en estética dental e implantología, expandiendo nuestro 
                    alcance para servir a pacientes nacionales e internacionales.
                  </p>
                </div>

                <div className="mvv-card valores-card">
                  <div className="mvv-icon">
                    <img src={typeof valoresIcon === 'string' ? valoresIcon : (valoresIcon?.src || '')} alt="Valores" className="valores-icon-image" />
                  </div>
                  <h3>Valores</h3>
                  <ul className="valores-list">
                    <li><strong>Excelencia:</strong> Comprometidos con la más alta calidad en cada tratamiento</li>
                    <li><strong>Integridad:</strong> Transparencia y honestidad en todas nuestras relaciones</li>
                    <li><strong>Empatía:</strong> Comprensión y cuidado genuino hacia nuestros pacientes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="doctor-info">
              <div className="doctor-card">
                <div className="doctor-avatar">
                  <img src={typeof doctorImage === 'string' ? doctorImage : (doctorImage?.src || '')} alt="Dr. Rafael Valencia" className="doctor-avatar-image" />
                </div>
                <div className="doctor-details">
                  <h3>Dr. Rafael Valencia</h3>
                  <p className="doctor-title">Odontólogo Especialista</p>
                  <p className="doctor-description">
                    Con más de dos décadas de experiencia, el Dr. Rafael Valencia lidera nuestro equipo 
                    de profesionales altamente capacitados, brindando atención personalizada y de la más 
                    alta calidad en cada consulta.
                  </p>
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


