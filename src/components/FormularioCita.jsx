import React, { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003'

const SERVICIOS_OPTIONS = [
  'Consulta general',
  'Ortodoncia',
  'Blanqueamiento Dental',
  'Diseño de Sonrisa',
  'Implantes Dentales',
  'Endodoncia',
  'Periodoncia',
  'Profilaxis Dental',
  'Otro'
]

export default function FormularioCita() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    hora: '',
    servicio: '',
    mensaje: ''
  })
  const [enviando, setEnviando] = useState(false)
  const [respuesta, setRespuesta] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setRespuesta(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    setRespuesta(null)
    try {
      const res = await fetch(`${API_URL}/citas/agendar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim(),
          fecha: form.fecha,
          hora: form.hora || undefined,
          servicio: form.servicio || undefined,
          mensaje: form.mensaje.trim() || undefined
        })
      })
      const text = await res.text()
      let data = {}
      if (text) {
        try {
          data = JSON.parse(text)
        } catch {
          setRespuesta({ ok: false, mensaje: 'El servidor respondió con un formato inesperado. Comprueba que el backend esté en marcha en el puerto 3003.' })
          return
        }
      }
      if (res.ok && data?.ok) {
        setRespuesta(data)
        setForm({ nombre: '', email: '', telefono: '', fecha: '', hora: '', servicio: '', mensaje: '' })
      } else {
        const mensaje = data?.mensaje || data?.message || (Array.isArray(data?.message) ? data.message.join(', ') : 'No se pudo enviar. Intenta de nuevo.')
        setRespuesta({ ok: false, mensaje })
      }
    } catch (err) {
      setRespuesta({ ok: false, mensaje: 'Error de conexión. Verifica que el backend esté en marcha (puerto 3003).' })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="formulario-cita-section">
      <div className="container">
        <div className="formulario-cita-card">
          <h2 className="formulario-cita-title">Solicitar cita</h2>
          <p className="formulario-cita-intro">Completa los datos a continuación. Nuestro equipo revisará tu solicitud y te contactará a la brevedad para confirmar tu cita.</p>
          <form onSubmit={handleSubmit} className="formulario-cita-form">
            <div className="form-row">
              <label htmlFor="nombre">Nombre completo *</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Correo electrónico *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
              />
            </div>
            <div className="form-row">
              <label htmlFor="telefono">Teléfono / WhatsApp *</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                value={form.telefono}
                onChange={handleChange}
                placeholder="+57 300 123 4567"
              />
            </div>
            <div className="form-row-group">
              <div className="form-row form-row-half">
                <label htmlFor="fecha">Fecha deseada *</label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  required
                  value={form.fecha}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row form-row-half">
                <label htmlFor="hora">Hora preferida</label>
                <input
                  id="hora"
                  name="hora"
                  type="time"
                  value={form.hora}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="servicio">Servicio de interés</label>
              <select
                id="servicio"
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
              >
                <option value="">Selecciona un servicio</option>
                {SERVICIOS_OPTIONS.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="mensaje">Mensaje adicional</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={3}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Indica motivo de consulta o comentarios..."
              />
            </div>
            {respuesta && (
              <div className={`form-mensaje ${respuesta.ok ? 'ok' : 'error'}`}>
                {respuesta.mensaje}
              </div>
            )}
            <button type="submit" className="formulario-cita-submit" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar solicitud de cita'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
