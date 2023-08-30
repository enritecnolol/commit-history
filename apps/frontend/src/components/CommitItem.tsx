import CommitIcon from "./CommitIcon";
import IconCode from "../assets/icons-code.png";

export default function CommitItem() {
  return (
    <div className="flex w-[50rem] h-20 items-center gap-x-3">
      <div className="">
        <CommitIcon />
      </div>
      <div className="flex flex-row gap-x-4 w-full py-4 px-2.5 rounded-lg border bg-slate-900 border-gray-700">
        <img
          src="https://avatars.githubusercontent.com/u/37670842?v=4"
          className="h-12 rounded-full cursor-pointer hover:opacity-50"
        />
        <div className="flex justify-between w-full">
          <div className="flex-col">
            <p className="cursor-pointer hover:text-sky-400">add github module to app module</p>
            <p className="text-sm text-gray-600">
              <span className="text-white hover:underline hover:underline-offset-1 cursor-pointer">
                Enritecnolol
              </span>{" "}
              commited 2 hours ago
            </p>
          </div>
          <div className="flex items-center">
            <button className="rounded-lg bg-dark-soft px-2 py-1">
              <img src={IconCode} className="w-6" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
