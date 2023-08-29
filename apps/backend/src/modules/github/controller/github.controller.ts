import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from '../service/github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get('commits')
  async getCommits(@Query('owner') owner: string, @Query('repo') repo: string) {
    return await this.githubService.getCommits(owner, repo);
  }
}
