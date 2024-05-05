import { useState } from "react";
import styles from "./Thread.module.scss";

const useThread = (threads) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const threadLength = threads.length;

  const toggleExpand = () => {
    if (threads.length > 1) {
      setIsExpanded(true);
    }
  };

  const shouldShowMessage = (length, index, isExpanded) => {
    return length > 1 && index === 0 && !isExpanded;
  };

  const getThreadClassName = () => {
    const threadClasses = [styles.threadContent];
    if (threadLength > 1) threadClasses.push(styles.expandable); // set hover effect only if there are multiple posts
    return threadClasses.join(" ");
  };

  const getThreadStyle = (index) => {
    if (!isExpanded) {
      return {
        transform: `translate(${index * 5}px, ${index * 5}px)`, // makes the stacked posts pop out on bottom right corner
        zIndex: 0 - index, // set the zindex further for each new post
      };
    }
    return { position: "unset" }; // aligns the posts when expanded
  };

  return {
    isExpanded,
    toggleExpand,
    threadLength,
    shouldShowMessage,
    getThreadClassName,
    getThreadStyle,
  };
};

export default useThread;
