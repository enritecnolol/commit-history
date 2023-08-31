import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';
import { TransformationInterceptor } from './interceptors/transform.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';

describe('bootstrap (e2e)', () => {
  let app: INestApplication;
  let server;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();

    app.useGlobalInterceptors(new TransformationInterceptor());
    app.useGlobalFilters(new HttpExceptionFilter());
    app.setGlobalPrefix('/api');
    app.enableCors();

    await app.init();
    server = app.getHttpServer();
  });

  it('/ (GET) should be prefixed with /api', () => {
    return request(server).get('/api').expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
