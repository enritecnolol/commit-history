import { Commit } from "../types/types";

const baseUrl = import.meta.env.VITE_API_URL;
const Owner = import.meta.env.VITE_GITHUB_OWNER
const Repo = import.meta.env.VITE_GITHUB_REPO

const getCommits = async (): Promise<Commit[]> => {
    try {
        const response = await fetch(`${baseUrl}/github/commits?` + new URLSearchParams({
            owner: Owner,
            repo: Repo
        }));
        const { data } = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error);
        throw error;
    }
}

export {
    getCommits
}