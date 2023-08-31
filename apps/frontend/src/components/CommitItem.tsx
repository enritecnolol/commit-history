import CommitIcon from "./CommitIcon";
import IconCode from "../assets/icons-code.png";
import { Commit } from "../types/types";
import getTimeAgo from "../lib/getTimeAgo";

type CommitItemProps = {
  commitData: Commit;
};

export default function CommitItem({ commitData }: CommitItemProps) {
  const {authorDate, authorUsername, avatarUrl, message, htmlUrl} = commitData;

  const redirectToCode = () => {
    window.open(htmlUrl, "_blank", "noreferrer");
  }  

  const redirectToGithubProfile = () => {
    window.open(`https://github.com/${authorUsername}`, "_blank", "noreferrer");
  }

  return (
    <div className="flex w-[50rem] h-20 items-center gap-x-3">
      <div className="">
        <CommitIcon />
      </div>
      <div className="flex flex-row gap-x-4 w-full py-4 px-2.5 rounded-lg border bg-slate-900 border-gray-700">
        <img
          src={avatarUrl ?? "https://placehold.co/400x225"}
          className="h-12 w-12 rounded-full cursor-pointer hover:opacity-50"
          loading="lazy"
          onClick={redirectToGithubProfile}
          data-testid="profileImg"
        />
        <div className="flex justify-between w-full">
          <div className="flex-col">
            <p data-testid="commitMessage" className="cursor-pointer hover:text-sky-400" onClick={redirectToCode}>
              {message}
            </p>
            <p className="text-sm text-gray-600">
              <span className="text-white hover:underline hover:underline-offset-1 cursor-pointer" onClick={redirectToGithubProfile}>
                {authorUsername}
              </span>{" "}
              commited {getTimeAgo(authorDate)}
            </p>
          </div>
          <div className="flex items-center">
            <button className="rounded-lg bg-dark-soft px-2 py-1" onClick={redirectToCode}>
              <img src={IconCode} className="w-6" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
