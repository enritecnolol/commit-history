import Header from "./Header";

type LayoutProps = {
  children: JSX.Element;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-[calc(100vh-4rem)] bg-dark-soft text-white overflow-y-auto">
        <div className="container mx-auto pt-10">
          {children}
        </div>
      </div>
    </div>
  );
}
