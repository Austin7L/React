import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';
import Headline from './headline';
import Links from './links';

interface Props {
  page: string;
  title?: string;
}

const Main = () => {

  useEffect(() => {
    //用於元件第一次載入時
    document.body.style.backgroundColor = "lightblue";

    //用於元件被消滅要處理的事情，當離開元件需要進行重置時可用
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])

  return (
    <main className={styles.main}>
      <Headline />
      <Links />
    </main>
  )
}

export default Main;