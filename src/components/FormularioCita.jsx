import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function getAgendarUrl() {
  if (typeof window !== 'undefined') {
    const external = process.env.NEXT_PUBLIC_AGENDAR_CITA_URL ||
      (process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/citas/agendar` : '')
    if (external) return external
    return `${window.location.origin}/api/agendar-cita`
  }
  return process.env.NEXT_PUBLIC_AGENDAR_CITA_URL ||
    (process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/citas/agendar` : '/api/agendar-cita')
}

const SERVICIOS_KEYS = ['formServicios.consulta', 'formServicios.ortodoncia', 'formServicios.blanqueamiento', 'formServicios.disenoSonrisa', 'formServicios.implantes', 'formServicios.endodoncia', 'formServicios.periodoncia', 'formServicios.profilaxis', 'formServicios.otro']

export default function FormularioCita() {
  const { t } = useLanguage()
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
      const res = await fetch(getAgendarUrl(), {
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
          setRespuesta({ ok: false, mensaje: t('formulario.errorFormato') })
          return
        }
      }
      if (res.ok && data?.ok) {
        setRespuesta({ ok: true, mensaje: t('formulario.exito') })
        setForm({ nombre: '', email: '', telefono: '', fecha: '', hora: '', servicio: '', mensaje: '' })
      } else {
        const raw = data?.mensaje || data?.message || (Array.isArray(data?.message) ? data.message.join(', ') : '')
        const mensaje = raw && API_ERROR_KEYS[raw] ? t(API_ERROR_KEYS[raw]) : (raw || t('formulario.errorEnvio'))
        setRespuesta({ ok: false, mensaje })
      }
    } catch (err) {
      setRespuesta({ ok: false, mensaje: t('formulario.errorConexion') })
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="formulario-cita-section">
      <div className="container">
        <div className="formulario-cita-card">
          <h2 className="formulario-cita-title">{t('formulario.title')}</h2>
          <p className="formulario-cita-intro">{t('formulario.intro')}</p>
          <form onSubmit={handleSubmit} className="formulario-cita-form">
            <div className="form-row">
              <label htmlFor="nombre">{t('formulario.nombre')}</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder={t('formulario.nombrePlaceholder')}
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">{t('formulario.email')}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={t('formulario.emailPlaceholder')}
              />
            </div>
            <div className="form-row">
              <label htmlFor="telefono">{t('formulario.telefono')}</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                value={form.telefono}
                onChange={handleChange}
                placeholder={t('formulario.telefonoPlaceholder')}
              />
            </div>
            <div className="form-row-group">
              <div className="form-row form-row-half">
                <label htmlFor="fecha">{t('formulario.fecha')}</label>
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
                <label htmlFor="hora">{t('formulario.hora')}</label>
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
              <label htmlFor="servicio">{t('formulario.servicio')}</label>
              <select
                id="servicio"
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
              >
                <option value="">{t('formulario.servicioPlaceholder')}</option>
                {SERVICIOS_KEYS.map(key => (
                  <option key={key} value={t(key)}>{t(key)}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="mensaje">{t('formulario.mensaje')}</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={3}
                value={form.mensaje}
                onChange={handleChange}
                placeholder={t('formulario.mensajePlaceholder')}
              />
            </div>
            {respuesta && (
              <div className={`form-mensaje ${respuesta.ok ? 'ok' : 'error'}`}>
                {respuesta.mensaje}
              </div>
            )}
            <button type="submit" className="formulario-cita-submit" disabled={enviando}>
              {enviando ? t('formulario.enviando') : t('formulario.enviar')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
