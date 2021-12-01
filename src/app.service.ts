import { Injectable } from '@nestjs/common';
import { AppError } from './app.error';

@Injectable()
export class AppService {
  getHello(): string {
    throw new AppError('App Error Test Message');
  }
}
