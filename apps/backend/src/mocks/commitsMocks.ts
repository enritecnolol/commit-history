import { Commit, CommitData } from '../modules/github/repository/github';

export const commitsDataMock: CommitData[] = [
  {
    commit: {
      author: {
        name: 'Author Name',
        date: '2022-01-01',
      },
      message: 'Commit message',
    },
    author: {
      login: 'authorUsername',
      avatar_url: 'avatarUrl',
    },
    html_url: 'htmlUrl',
  },
];

export const expectedCommitsMock: Commit[] = [
  {
    authorName: 'Author Name',
    authorUsername: 'authorUsername',
    authorDate: '2022-01-01',
    message: 'Commit message',
    htmlUrl: 'htmlUrl',
    avatarUrl: 'avatarUrl',
  },
];
