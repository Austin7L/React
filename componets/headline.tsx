import styles from '../styles/Home.module.css';
import React from 'react';

interface Props{
  page: string;
  title?: string;
}

export default function Headline({page, title=""}:Props) {
  return (
    <>
      <h1 className={styles.title}>
        {page} Page
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/{page}.js</code>
      </p>
      </>
  )
}