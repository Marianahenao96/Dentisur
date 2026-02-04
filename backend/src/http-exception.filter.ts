import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let mensajeFinal = 'Error del servidor. Intenta más tarde.';
    if (exception instanceof HttpException) {
      const body = exception.getResponse();
      if (typeof body === 'object' && body !== null) {
        const b = body as { mensaje?: string; message?: string | string[] };
        const msg = b.mensaje ?? b.message;
        mensajeFinal = Array.isArray(msg) ? msg.join(', ') : String(msg ?? mensajeFinal);
      }
    }

    if (status >= 500) {
      this.logger.error(`${request.method} ${request.url} - ${mensajeFinal}`, exception instanceof Error ? exception.stack : undefined);
    }

    response.status(status).json({ ok: false, mensaje: mensajeFinal });
  }
}
