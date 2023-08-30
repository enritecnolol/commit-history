import { useEffect, useState } from "react";
import CommitItem from "../components/CommitItem";
import { Commit } from "../types/types";
import { getCommits } from "../services";
import { useTitle } from "../hooks/useTitle";

export default function CommitHistoryPage() {
  const [commits, setCommits] = useState<Commit[]>([])

  useTitle("GitYo - Commit History")

  useEffect(() => {
    getCommits().then((response) => {
      setCommits(response)
    })
  }, [])

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-y-5 mb-4">
        <div className="text-2xl pb-2 border-b-2 border-slate-800">Commits</div>
        {commits.map((commit, index) => {
          return <CommitItem commitData={commit} key={index} />;
        })}
      </div>
    </div>
  );
}
