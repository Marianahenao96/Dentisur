import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return { ok: true, mensaje: 'Backend Dentisur', version: '1.0' };
  }
}
