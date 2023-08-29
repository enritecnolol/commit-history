import { Module } from '@nestjs/common';
import { GithubController } from './controller/github.controller';
import { GithubService } from './service/github.service';

@Module({
  providers: [GithubService],
  controllers: [GithubController],
  exports: [GithubService],
})
export class GithubModule {}
