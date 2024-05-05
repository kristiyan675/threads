import ThreadComponent from "./components/Thread/Thread";
import Layout from "./components/Layout/Layout";
import useThreads from "./hooks/useThreads";

function App() {
  const { threads } = useThreads();

  return (
    <>
      <Layout>
        {threads.length > 0 &&
          threads.map((thread, index) => (
            <ThreadComponent key={index} threads={thread} />
          ))}
      </Layout>
    </>
  );
}

export default App;
