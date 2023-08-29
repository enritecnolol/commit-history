import GithubLogo from "./assets/github-icon.png";
import CommitItem from "./components/CommitItem";
function App() {
  return (
    <div className="h-screen">
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
      <div className="h-[calc(100vh-4rem)] bg-dark-soft text-white">
        <div className="container mx-auto pt-10">
          <div className="w-full flex justify-center">
            <CommitItem />
          </div>
        </div>
      </div>
    </div>
  );
}
// #0d1117
export default App;
