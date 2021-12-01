import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestJsPinoInterceptor } from './nestjs.pino.interceptor';

@Module({
  imports: [LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: NestJsPinoInterceptor },
  ],
})
export class AppModule {}
