import { expectedCommitsMock } from '../../../mocks/commitsMocks';
import { GithubService } from '../service/github.service';
import { GithubController } from './github.controller';

describe('GithubController', () => {
  let githubController: GithubController;
  let githubService: GithubService;

  beforeEach(() => {
    githubService = new GithubService();
    githubController = new GithubController(githubService);
  });

  describe('getCommits', () => {
    it('should return the expected result when valid owner and repo parameters are provided', async () => {
      jest
        .spyOn(githubService, 'getCommits')
        .mockImplementation(() => Promise.resolve(expectedCommitsMock));

      const owner = 'validOwner';
      const repo = 'validRepo';

      expect(await githubController.getCommits(owner, repo)).toBe(
        expectedCommitsMock,
      );
    });
  });
});
