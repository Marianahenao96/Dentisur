import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AgendarCitaDto } from './dto/agendar-cita.dto';
import { CitasService } from './citas.service';

@Controller('citas')
export class CitasController {
  constructor(private readonly citasService: CitasService) {}

  @Post('agendar')
  async agendar(@Body() dto: AgendarCitaDto) {
    const nombre = dto?.nombre?.trim();
    const email = dto?.email?.trim();
    const telefono = dto?.telefono?.trim();
    const fecha = dto?.fecha?.trim();
    if (!nombre || !email || !telefono || !fecha) {
      throw new BadRequestException({
        ok: false,
        mensaje: 'Faltan datos obligatorios: nombre, email, teléfono y fecha.',
      });
    }
    return this.citasService.enviarNotificacionCita({
      nombre,
      email,
      telefono,
      fecha,
      hora: dto?.hora?.trim() || undefined,
      servicio: dto?.servicio?.trim() || undefined,
      mensaje: dto?.mensaje?.trim() || undefined,
    });
  }
}
