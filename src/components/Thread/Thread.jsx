import React, { useState } from "react";
import styles from "./Thread.module.scss";

const ThreadComponent = ({ threads }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={[
        styles.threadContainer,
        isExpanded && styles.paddingContainerExpand,
      ].join(" ")}
    >
      {threads?.length > 0 &&
        threads.map((thread, index) => (
          <div
            key={index}
            className={[
              styles.threadContent,
              threads.length > 1 && styles.expand, // set hover effect only if there are multiple posts
              isExpanded && styles.marginExpand,
            ].join(" ")}
            style={
              !isExpanded
                ? {
                    transform: `translate(${index * 5}px, ${index * 5}px)`, // makes the stacked posts pop out on bottom right corner
                    zIndex: 0 - index, // set the zindex further for each new post
                  }
                : {
                    position: "unset", // make sure the posts stay under each other
                  }
            }
            onClick={() => {
              // set callback to expand only if there are multiple posts
              threads.length > 1 && setIsExpanded(true);
            }}
          >
            {/* TODO refactor */}
            {threads.length > 1 && index === 0 && !isExpanded && (
              // set message only on the top post
              <span
                className={[
                  styles.messages,
                  thread.score <= 5 ? styles.lowRateMsg : styles.highRateMsg,
                ].join(" ")}
              >
                ${threads.length} messages
              </span>
            )}
            <div className={styles.hmmFirst}>
              <div
                className={thread.score <= 5 ? styles.lowRate : styles.highRate} // set the corresponding style base on the score
              >
                {thread.subject}
              </div>
              <div>{thread.question}</div>
              <div>{thread.text}</div>
            </div>
            <div className={styles.hmmSec}>
              <div>{thread.team}</div>
              <div>{thread.created_at}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ThreadComponent;
