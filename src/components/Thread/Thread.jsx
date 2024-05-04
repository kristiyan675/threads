import React, { useState } from "react";
import styles from "./Thread.module.scss";
import { dateFormatter } from "../../services/helpers";
import useThread from "./useThread";
import Message from "../Message/Message";
const ThreadComponent = ({ threads }) => {
  const { isExpanded, toggleExpand, threadLength, shouldShowMessage } =
    useThread(threads);

  return (
    <div
      className={styles.threadContainer}
      style={isExpanded ? { padding: 0 } : {}}
    >
      {threads.map((thread, index) => (
        <div
          key={index}
          className={[
            styles.threadContent,
            threadLength > 1 && styles.expandable, // set hover effect only if there are multiple posts
          ].join(" ")}
          style={
            !isExpanded
              ? {
                  transform: `translate(${index * 5}px, ${index * 5}px)`, // makes the stacked posts pop out on bottom right corner
                  zIndex: 0 - index, // set the zindex further for each new post
                }
              : {
                  position: "unset", // aligns the posts when expanded
                }
          }
          onClick={() => {
            // set callback to expand only if there are multiple posts
            threadLength > 1 && toggleExpand(true);
          }}
        >
          {shouldShowMessage(threadLength, index, isExpanded) && (
            <Message thread={thread} threadLength={threadLength} />
          )}
          <div className={styles.leftSection}>
            <div
              className={thread.score <= 5 ? styles.lowRate : styles.highRate} // set the corresponding style based on the score
            >
              {thread.subject}
            </div>
            <div>{thread.question}</div>
            <div>{thread.text}</div>
          </div>
          <div className={styles.rightSection}>
            <div>{thread.team}</div>
            <div>{dateFormatter(thread.created_at)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreadComponent;
