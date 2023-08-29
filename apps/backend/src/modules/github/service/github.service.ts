import { Octokit } from '@octokit/rest';

export class GithubService {
  private readonly octokit: Octokit;

  constructor() {
    this.octokit = new Octokit();
  }

  async getCommits(owner: string, repo: string): Promise<any> {
    try {
      const response = await this.octokit.repos.listCommits({
        owner,
        repo,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch commit: ${error.message}`);
    }
  }
}
