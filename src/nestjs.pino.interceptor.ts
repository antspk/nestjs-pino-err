import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';

export class NestJsPinoInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        catchError((error) =>
          throwError(() => (context.switchToHttp().getResponse().err = error)),
        ),
      );
  }
}
