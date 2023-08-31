import { Octokit } from '@octokit/rest';
import fetch from 'node-fetch';
import { Commit, CommitData } from '../repository/github';

export class GithubService {
  private readonly octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      request: {
        fetch: fetch,
      },
    });
  }

  private reformatCommitsData(commitsData: CommitData[]): Commit[] {
    return commitsData.map((commit) => {
      return {
        authorName: commit.commit.author.name,
        authorUsername: commit.author.login,
        authorDate: commit.commit.author.date,
        message: commit.commit.message,
        htmlUrl: commit.html_url,
        avatarUrl: commit.author ? commit.author.avatar_url : null,
      };
    });
  }

  async getCommits(owner: string, repo: string): Promise<Commit[]> {
    try {
      const response = await this.octokit.repos.listCommits({
        owner,
        repo,
      });
      return this.reformatCommitsData(response.data as CommitData[]);
    } catch (error) {
      throw new Error(`Failed to fetch commit: ${error.message}`);
    }
  }
}
