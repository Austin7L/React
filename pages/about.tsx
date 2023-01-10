import Head from 'next/head'
import Image from 'next/image'
import Message from '../componets/message'
import Question from '../componets/question'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.border}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Which front-end framework is better?
        </h1>

        <div className={styles.grid}>
          <Question name="React is the best" ></Question>
          <Question name="Flutter is the future"></Question>
        </div>

        <Message></Message>
      </main>
    </div>
  )
}
