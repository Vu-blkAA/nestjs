import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModules } from './domains/cats/cats.module';
import { DogsModule } from './domains/dogs/dogs.module';
import { ElephantsModule } from './domains/elephants/elephants';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { HttpExceptionFilter } from './exception/http-exception.filter';
@Module({
  imports: [ConfigModule.forRoot(), DogsModule, ElephantsModule, CatsModules],
  controllers: [AppController,],
  providers: [AppService, {
    provide: 'APP_FILTER',
    useClass: HttpExceptionFilter
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*')
  }

}
