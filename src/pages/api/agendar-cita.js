const nodemailer = require('nodemailer')

const DESTINATARIO = 'rafadentisur@gmail.com'

function escapeHtml(text) {
  if (!text) return ''
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, mensaje: 'Método no permitido' })
  }

  const body = typeof req.body === 'object' ? req.body : {}
  const nombre = (body.nombre || '').trim()
  const email = (body.email || '').trim()
  const telefono = (body.telefono || '').trim()
  const fecha = (body.fecha || '').trim()

  if (!nombre || !email || !telefono || !fecha) {
    return res.status(400).json({
      ok: false,
      mensaje: 'Faltan datos obligatorios: nombre, email, teléfono y fecha.'
    })
  }

  const hora = (body.hora || '').trim() || undefined
  const servicio = (body.servicio || '').trim() || undefined
  const mensaje = (body.mensaje || '').trim() || undefined

  const skipEmail = process.env.SKIP_EMAIL === 'true'
  if (skipEmail) {
    console.log('[API] Solicitud de cita (demo):', { nombre, email, telefono, fecha })
    return res.status(200).json({
      ok: true,
      mensaje: 'Solicitud enviada correctamente. Te contactaremos pronto.'
    })
  }

  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!host || !user || !pass) {
    return res.status(500).json({
      ok: false,
      mensaje: 'Servicio de correo no configurado. Configure SMTP en las variables de entorno (Vercel).'
    })
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user, pass }
  })

  const n = escapeHtml(nombre)
  const e = escapeHtml(email)
  const t = escapeHtml(telefono)
  const f = escapeHtml(fecha)
  const h = hora ? escapeHtml(hora) : ''
  const s = servicio ? escapeHtml(servicio) : ''
  const m = mensaje ? escapeHtml(mensaje).replace(/\n/g, '<br/>') : ''

  const html = `
    <h2>Nueva solicitud de cita - Dentisur</h2>
    <p><strong>Nombre:</strong> ${n}</p>
    <p><strong>Email:</strong> ${e}</p>
    <p><strong>Teléfono:</strong> ${t}</p>
    <p><strong>Fecha deseada:</strong> ${f}</p>
    ${h ? `<p><strong>Hora preferida:</strong> ${h}</p>` : ''}
    ${s ? `<p><strong>Servicio:</strong> ${s}</p>` : ''}
    ${m ? `<p><strong>Mensaje:</strong><br/>${m}</p>` : ''}
    <hr/>
    <p><em>Enviado desde el formulario de agendamiento de la web Dentisur.</em></p>
  `

  const from = process.env.SMTP_FROM || `"Web Dentisur" <${user}>`

  try {
    await transporter.sendMail({
      from,
      to: DESTINATARIO,
      subject: `[Dentisur] Nueva cita solicitada - ${nombre}`,
      text: `${nombre} (${email}) solicita cita para ${fecha}. Tel: ${telefono}`,
      html
    })
    return res.status(200).json({
      ok: true,
      mensaje: 'Solicitud enviada correctamente. Te contactaremos pronto.'
    })
  } catch (err) {
    console.error('Error enviando email:', err)
    return res.status(500).json({
      ok: false,
      mensaje: 'No se pudo enviar la solicitud. Intenta de nuevo o contacta por WhatsApp.'
    })
  }
}
