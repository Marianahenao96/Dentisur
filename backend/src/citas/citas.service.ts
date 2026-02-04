import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { AgendarCitaDto } from './dto/agendar-cita.dto';

const DESTINATARIO = 'rafadentisur@gmail.com';

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

@Injectable()
export class CitasService {
  private transporter: nodemailer.Transporter | null = null;

  constructor(private config: ConfigService) {
    const host = this.config.get('SMTP_HOST');
    const user = this.config.get('SMTP_USER');
    const pass = this.config.get('SMTP_PASS');
    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port: Number(this.config.get('SMTP_PORT')) || 587,
        secure: this.config.get('SMTP_SECURE') === 'true',
        auth: { user, pass },
      });
    }
  }

  async enviarNotificacionCita(dto: AgendarCitaDto): Promise<{ ok: boolean; mensaje: string }> {
    const skipEmail = this.config.get('SKIP_EMAIL') === 'true';
    if (skipEmail) {
      console.log('[Demo] Solicitud de cita recibida:', JSON.stringify(dto, null, 2));
      return { ok: true, mensaje: 'Solicitud enviada correctamente. Te contactaremos pronto.' };
    }

    if (!this.transporter) {
      return {
        ok: false,
        mensaje: 'Servicio de correo no configurado. Configure SMTP_HOST, SMTP_USER y SMTP_PASS en .env',
      };
    }

    const n = escapeHtml(String(dto.nombre ?? ''));
    const e = escapeHtml(String(dto.email ?? ''));
    const t = escapeHtml(String(dto.telefono ?? ''));
    const f = escapeHtml(String(dto.fecha ?? ''));
    const h = dto.hora ? escapeHtml(String(dto.hora)) : '';
    const s = dto.servicio ? escapeHtml(String(dto.servicio)) : '';
    const m = dto.mensaje ? escapeHtml(String(dto.mensaje)).replace(/\n/g, '<br/>') : '';
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

    try {
      await this.transporter.sendMail({
        from: this.config.get('SMTP_FROM') || `"Web Dentisur" <${this.config.get('SMTP_USER')}>`,
        to: DESTINATARIO,
        subject: `[Dentisur] Nueva cita solicitada - ${dto.nombre}`,
        text: `${dto.nombre} (${dto.email}) solicita cita para ${dto.fecha}. Tel: ${dto.telefono}`,
        html,
      });
      return { ok: true, mensaje: 'Solicitud enviada correctamente. Te contactaremos pronto.' };
    } catch (e) {
      console.error('Error enviando email:', e);
      return {
        ok: false,
        mensaje: 'No se pudo enviar la solicitud. Intenta de nuevo o contacta por WhatsApp.',
      };
    }
  }
}
