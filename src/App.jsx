import { useEffect, useState } from "react";
import ThreadComponent from "./components/Thread/Thread";
import Layout from "./components/Layout/Layout";
import { apiUrl } from "../config";
import { get } from "./services/helpers";
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
