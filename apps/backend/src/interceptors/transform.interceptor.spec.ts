import { CallHandler, ExecutionContext } from '@nestjs/common';
import { TransformationInterceptor } from './transform.interceptor';
import { of } from 'rxjs';
import { Test, TestingModule } from '@nestjs/testing';

describe('TransformationInterceptor', () => {
  let interceptor: TransformationInterceptor<any>;
  let mockExecutionContext: ExecutionContext;
  let mockCallHandler: CallHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransformationInterceptor],
    }).compile();

    interceptor = module.get<TransformationInterceptor<any>>(
      TransformationInterceptor,
    );

    // Mock ExecutionContext
    mockExecutionContext = {
      switchToHttp: jest.fn().mockReturnValue({
        getResponse: jest.fn().mockReturnValue({ statusCode: 200 }),
      }),
      getClass: jest.fn(),
      getHandler: jest.fn(),
      getType: jest.fn(),
      switchToWs: jest.fn(),
      switchToRpc: jest.fn(),
    } as any;

    // Mock CallHandler
    mockCallHandler = {
      handle: jest.fn().mockReturnValue(of('mockedData')),
    } as any;
  });

  it('should be defined', () => {
    expect(interceptor).toBeDefined();
  });

  it('should transform the response to include data and statusCode', (done) => {
    interceptor.intercept(mockExecutionContext, mockCallHandler).subscribe({
      next: (transformedValue) => {
        expect(transformedValue).toEqual({
          data: 'mockedData',
          statusCode: 200,
        });
        done();
      },
    });
  });
});
