"use client";

import styles from "./page.module.css";

import push from "@/redirect/redirect";

export default function Ask({ text, route }) {
  function cont(local) {
    const l = localStorage.getItem(local);
    localStorage.setItem(local, Number(l) + 1);
    push(route);
  }

  return (
    <div className={styles.main}>
      <div className={styles.ask}>{text}</div>
      <div className={styles.answers}>
        <button className={styles.button} onClick={() => cont("positivas")}>
          Sim
        </button>
        <button className={styles.button} onClick={() => cont("negativas")}>
          Não
        </button>
      </div>
    </div>
  );
}
