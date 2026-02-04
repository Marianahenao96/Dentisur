import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { CitasModule } from './citas/citas.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CitasModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
