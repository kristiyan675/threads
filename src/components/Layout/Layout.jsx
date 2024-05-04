import { useEffect, useState } from "react";
// import { api } from "../../config";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
