import { useEffect, useState } from "react";
import CommitItem from "../components/CommitItem";
import { Commit } from "../types/types";
import { getCommits } from "../services";
import { useTitle } from "../hooks/useTitle";
import Loading from "../components/Loading";

export default function CommitHistoryPage() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useTitle("GitYo - Commit History");

  useEffect(() => {
    setIsLoading(true);
    getCommits()
      .then((response) => {
        setCommits(response);
      }).catch((err) => {
        console.error(err)
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full flex justify-center">
      <div data-testid="commitContainer" className="flex flex-col gap-y-5 mb-4">
        <div
          className="text-2xl pb-2 border-b-2 border-slate-800"
          data-testid="commitText"
        >
          Commits
        </div>
        {commits.map((commit, index) => {
          return <CommitItem commitData={commit} key={index} />;
        })}
      </div>
    </div>
  );
}
