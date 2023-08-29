import CommitIcon from "./commitIcon";
import IconCode from "../assets/icons-code.png";

export default function CommitItem() {
  return (
    <div className="flex w-7/12 h-20 items-center gap-x-3">
      <div className="">
        {/* <div className="absolute top-10 bottom-0 left-5 w-px h-96 -ml-px border-r border-dashed border-gray-600"></div> */}
        <CommitIcon />
      </div>
      <div className="flex flex-row gap-x-4 w-full py-4 px-2.5 rounded-lg border bg-slate-900 border-gray-700">
        <img
          src="https://avatars.githubusercontent.com/u/37670842?v=4"
          className="h-12 rounded-full"
        />
        <div className="flex justify-between w-full">
          <div className="flex-col">
            <p>add github module to app module</p>
            <p className="text-sm text-gray-600">
              <span className="text-white hover:underline hover:underline-offset-1">
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
