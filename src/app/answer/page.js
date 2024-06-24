"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { pegarItem } from "@/localStorage/localStorage";

export default function Resposta() {
  const [positivas, setPositivas] = useState(0);
  const [negativas, setNegativas] = useState(0);

  useEffect(() => {
    async function fetchItems() {
      setPositivas(await pegarItem("positivas"));
      setNegativas(await pegarItem("negativas"));
    }

    fetchItems();
  }, []);

  let answer = "";

  if (positivas > 2) {
    answer = "Java";
  } else if (negativas > 2) {
    answer = "Python";
  } else {
    answer = "Javascript";
  }

  return (
    <div className={styles.main}>
      <div>
        <h3>Você deveria aprender:</h3>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
}
