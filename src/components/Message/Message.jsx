import styles from "./Message.module.scss";

const Message = ({ thread, threadLength }) => {
  return (
    <span
      className={[
        styles.messages,
        thread.score <= 5 ? styles.lowRateMsg : styles.highRateMsg,
      ].join(" ")}
    >
      {`${threadLength} messages`}
    </span>
  );
};

export default Message;
