import Layout from "./layouts";
import CommitHistoryPage from "./pages/CommitHistoryPage";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <CommitHistoryPage />
      </ErrorBoundary>
    </Layout>
  );
}
export default App;
