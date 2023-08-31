import { Octokit } from '@octokit/rest';
import { GithubService } from './github.service';
import {
  commitsDataMock,
  expectedCommitsMock,
} from '../../../mocks/commitsMocks';

jest.mock('@octokit/rest');

describe('Github.service', () => {
  it('should return an array of Commit objects when given valid owner and repo strings', async () => {
    const owner = 'validOwner';
    const repo = 'validRepo';
    const octokitMock = {
      repos: {
        listCommits: jest.fn().mockResolvedValue({ data: commitsDataMock }),
      },
    };
    jest.spyOn(Octokit.prototype, 'constructor').mockReturnValue(octokitMock);
    const githubService = new GithubService();

    const result = await githubService.getCommits(owner, repo);

    expect(result).toEqual(expectedCommitsMock);
    expect(octokitMock.repos.listCommits).toHaveBeenCalledWith({ owner, repo });
  });

  it('should throw an error when Octokit reject', async () => {
    const owner = 'validOwner';
    const repo = 'validRepo';
    const octokitMock = {
      repos: {
        listCommits: jest
          .fn()
          .mockResolvedValue(
            Promise.reject({ message: 'Error getting the commits' }),
          ),
      },
    };
    jest.spyOn(Octokit.prototype, 'constructor').mockReturnValue(octokitMock);
    const githubService = new GithubService();
    try {
      await githubService.getCommits(owner, repo);
    } catch (error) {
      expect(error.message).toBe(
        'Failed to fetch commit: Error getting the commits',
      );
    }
  });
});
