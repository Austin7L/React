import React from "react";
import QuestTypeA from "./questTypeA";
import QuestTypeB from "./questTypeB";
import styles from '../styles/Home.module.css';
import { useCounter } from "../hooks/useCounter";
import { useInputText } from "../hooks/useInputText";


const QuestBox = () => {
  const counter = useCounter();
  const addText = useInputText();

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <QuestTypeA />
        <QuestTypeB />
      </div>
    </main>
  )
}

export default QuestBox;