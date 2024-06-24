"use client";

import styles from "./page.module.css";

import push from "@/redirect/redirect";
import { clearItens, setarItem } from "@/localStorage/localStorage";

export default function Home() {
  clearItens();
  setarItem("positivas", 0);
  setarItem("negativas", 0);

  return (
    <div className={styles.main}>
      <h1>Qual a melhor linguagem para você aprender?</h1>
      <button className={styles.button} onClick={() => push("/ask1")}>
        Iniciar teste
      </button>
    </div>
  );
}
