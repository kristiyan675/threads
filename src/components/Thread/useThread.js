import { useState } from "react";

const useThread = (threads) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (threads.length > 1) {
      setIsExpanded(true);
    }
  };

  const threadLength = threads.length;

  const shouldShowMessage = (length, index, isExpanded) => {
    return length > 1 && index === 0 && !isExpanded;
  };

  return { isExpanded, toggleExpand, threadLength, shouldShowMessage };
};

export default useThread;
