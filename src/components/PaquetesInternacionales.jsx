import React from 'react'

const PaquetesInternacionales = () => {
  const paquetes = [
    {
      id: 1,
      title: 'Diseño de Sonrisa con Carillas en Porcelana',
      description:
        'Carillas de porcelana de alta estética y durabilidad, ideales para transformar por completo la forma, el tamaño y el color de los dientes con un resultado muy natural y resistente en el tiempo.',
      features: [
        'Valor Carilla Porcelana Unidad: $380 USD'
      ]
    },
    {
      id: 2,
      title: 'Diseño de Sonrisa con Carillas en Cerómero',
      description:
        'Carillas en cerómero que combinan estética y resistencia, una excelente alternativa a la porcelana con un acabado natural y buena estabilidad de color a un costo más accesible.',
      features: [
        'Valor Carilla Cerómero Unidad: $200 USD'
      ]
    },
    {
      id: 3,
      title: 'Diseño de Sonrisa con Carillas en Resina',
      description:
        'Carillas en resina directa, una opción conservadora y económica que permite mejorar forma y color del diente en menos tiempo, ideal para retoques estéticos y cambios moderados.',
      features: [
        'Valor Carilla Resina Unidad: $90 USD'
      ]
    }
  ]

  return (
    <section id="paquetes" className="paquetes">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Paquetes Internacionales</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Ofrecemos paquetes especiales diseñados para pacientes internacionales que buscan 
            tratamientos odontológicos de alta calidad en Colombia. Combinamos excelencia médica 
            con atención personalizada y precios competitivos.
          </p>
        </div>

        <div className="paquetes-grid">
          {paquetes.map((paquete) => (
            <div key={paquete.id} className="paquete-card">
              <div className="paquete-header">
                <h3 className="paquete-title">{paquete.title}</h3>
              </div>
              <p className="paquete-description">{paquete.description}</p>
              <ul className="paquete-features">
                {paquete.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="paquetes-cta">
          <p className="paquetes-cta-text">
            Cotiza tu tratamiento y aplica a nuestros descuentos especiales para pacientes internacionales.
          </p>
          <a 
            href="https://wa.me/573193997118?text=Hola,%20quiero%20cotizar%20mi%20tratamiento%20de%20diseño%20de%20sonrisa%20y%20saber%20qué%20descuento%20aplica%20para%20mí" 
            target="_blank" 
            rel="noopener noreferrer"
            className="paquete-btn"
          >
            Contáctanos
          </a>
        </div>

      </div>
    </section>
  )
}

export default PaquetesInternacionales


