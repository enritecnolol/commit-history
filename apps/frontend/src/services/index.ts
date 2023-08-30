import { Commit } from "../types/types";
import { API_URL, GITHUB_OWNER, GITHUB_REPOSITORY } from "../config";

const getCommits = async (): Promise<Commit[]> => {
  try {
    const response = await fetch(
      `${API_URL}/github/commits?` +
        new URLSearchParams({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPOSITORY,
        })
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export { getCommits };
