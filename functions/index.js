const { onRequest } = require('firebase-functions/v2/https');
const nodemailer = require('nodemailer');

const DESTINATARIO = 'rafadentisur@gmail.com';

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function setCors(res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Max-Age', '86400');
}

exports.agendarCita = onRequest(
  { region: 'us-central1', cors: true },
  async (req, res) => {
    setCors(res);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ ok: false, mensaje: 'Método no permitido' });
      return;
    }

    let body = {};
    try {
      body = typeof req.body === 'object' ? req.body : {};
    } catch (_) {
      body = {};
    }

    const nombre = (body.nombre || '').trim();
    const email = (body.email || '').trim();
    const telefono = (body.telefono || '').trim();
    const fecha = (body.fecha || '').trim();

    if (!nombre || !email || !telefono || !fecha) {
      res.status(400).json({
        ok: false,
        mensaje: 'Faltan datos obligatorios: nombre, email, teléfono y fecha.',
      });
      return;
    }

    const hora = (body.hora || '').trim() || undefined;
    const servicio = (body.servicio || '').trim() || undefined;
    const mensaje = (body.mensaje || '').trim() || undefined;

    const SKIP_EMAIL = process.env.SKIP_EMAIL === 'true';
    if (SKIP_EMAIL) {
      console.log('[Demo] Solicitud de cita:', { nombre, email, telefono, fecha, hora, servicio, mensaje });
      res.status(200).json({
        ok: true,
        mensaje: 'Solicitud enviada correctamente. Te contactaremos pronto.',
      });
      return;
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !user || !pass) {
      res.status(500).json({
        ok: false,
        mensaje: 'Servicio de correo no configurado. Configure SMTP en Firebase (Variables de entorno).',
      });
      return;
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user, pass },
    });

    const n = escapeHtml(nombre);
    const e = escapeHtml(email);
    const t = escapeHtml(telefono);
    const f = escapeHtml(fecha);
    const h = hora ? escapeHtml(hora) : '';
    const s = servicio ? escapeHtml(servicio) : '';
    const m = mensaje ? escapeHtml(mensaje).replace(/\n/g, '<br/>') : '';

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
    `;

    const from = process.env.SMTP_FROM || `"Web Dentisur" <${user}>`;

    try {
      await transporter.sendMail({
        from,
        to: DESTINATARIO,
        subject: `[Dentisur] Nueva cita solicitada - ${nombre}`,
        text: `${nombre} (${email}) solicita cita para ${fecha}. Tel: ${telefono}`,
        html,
      });
      res.status(200).json({
        ok: true,
        mensaje: 'Solicitud enviada correctamente. Te contactaremos pronto.',
      });
    } catch (err) {
      console.error('Error enviando email:', err);
      res.status(500).json({
        ok: false,
        mensaje: 'No se pudo enviar la solicitud. Intenta de nuevo o contacta por WhatsApp.',
      });
    }
  }
);
