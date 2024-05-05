import styles from "./Thread.module.scss";
import { dateFormatter } from "../../services/helpers";
import useThread from "./useThread";
import Message from "../Message/Message";
const ThreadComponent = ({ threads }) => {
  const {
    isExpanded,
    toggleExpand,
    threadLength,
    shouldShowMessage,
    getThreadClassName,
    getThreadStyle,
  } = useThread(threads);

  return (
    // container with fixed min-max sizes
    <div
      className={styles.threadContainer}
      style={isExpanded ? { padding: 0 } : {}}
    >
      {threads.map((thread, index) => (
        <div
          key={index}
          className={getThreadClassName()}
          style={getThreadStyle(index)}
          onClick={() => {
            if (threadLength > 1) toggleExpand(true); // set callback to expand only if there are multiple posts
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
