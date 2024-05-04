import { useState, useEffect } from "react";
import { apiUrl } from "../../config";
import { get } from "../services/helpers";

const useThreads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    get(apiUrl).then((res) => setThreads(res));
  }, []);

  return { threads };
};

export default useThreads;
