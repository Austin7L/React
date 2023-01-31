import React from "react";
import QuestTypeA from "./questTypeA";
import QuestTypeB from "./questTypeB";
import styles from '../styles/Home.module.css';


export default function QuestBox() {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>
                <QuestTypeA />
                <QuestTypeB />
            </div>
        </main>
    )
}