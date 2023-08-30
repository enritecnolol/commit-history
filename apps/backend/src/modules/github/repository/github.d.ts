export interface Commit {
  authorName: string;
  authorDate: string;
  authorUsername: string;
  message: string;
  htmlUrl: string;
  avatarUrl: string | null;
}
interface CommitData {
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}
