import { Octokit } from '@octokit/rest';
import fetch from 'node-fetch';

export class GithubService {
  private readonly octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      request: {
        fetch: fetch,
      },
    });
  }

  reformatCommitsData(commitsData: any[]): any[] {
    return commitsData.map((commit) => {
      return {
        authorName: commit.commit.author.name,
        authorDate: commit.commit.author.date,
        message: commit.message,
        htmlUrl: commit.html_url,
        avatarUrl: commit.author ? commit.author.avatar_url : null,
      };
    });
  }

  async getCommits(owner: string, repo: string): Promise<any> {
    try {
      const response = await this.octokit.repos.listCommits({
        owner,
        repo,
      });
      return this.reformatCommitsData(response.data);
    } catch (error) {
      throw new Error(`Failed to fetch commit: ${error.message}`);
    }
  }
}
