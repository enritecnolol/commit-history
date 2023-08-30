import GithubLogo from "../assets/github-icon.png";
export default function Header() {
  return (
    <nav className="bg-dark-strong">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://github.com/" className="flex items-center">
          <img src={GithubLogo} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            GitYo
          </span>
        </a>
      </div>
    </nav>
  );
}
