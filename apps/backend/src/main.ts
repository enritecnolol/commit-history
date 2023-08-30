import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformationInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformationInterceptor());
  app.setGlobalPrefix('/api');
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
