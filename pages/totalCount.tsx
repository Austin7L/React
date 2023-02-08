import Head from 'next/head'
import Footer from '../componets/footer'
import Header from '../componets/header'
import Main from '../componets/main'
import styles from '../styles/Home.module.css'
import { useBackgroundBlue } from '../hooks/useBackgroundBlue';
import { PageContext, pageInfo } from '../componets/pageContext';
import QuestBox from '../componets/questBox'
import { CounterContext, CounterProvider } from '../store/counterContext'
import { useContext } from 'react';

const TotalCountComponet = () => {
  return (
    <CounterProvider>
      <TotalCount />
    </CounterProvider>
  )
}

function TotalCount() {
  const { CounterState, CounterDispatch } = useContext(CounterContext);
  useBackgroundBlue();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h2>{CounterState.totalCount}</h2>
        <div className={styles.grid}>
          <QuestBox />
        </div>
      </main>
    </div>
  )
}

export default TotalCountComponet;