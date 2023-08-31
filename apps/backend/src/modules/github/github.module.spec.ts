import { Test } from '@nestjs/testing';
import { GithubModule } from './github.module';

describe('githubModule', () => {
  it('should compile the module', async () => {
    const module = await Test.createTestingModule({
      imports: [GithubModule],
    }).compile();

    expect(module).toBeDefined();
  });
});
