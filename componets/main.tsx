import styles from '../styles/Home.module.css';
import React from 'react';
import Headline from './headline';
import Links from './links';

interface Props {
  page: string;
  title?: string;
}

export default function Main({ page, title = "default" }: Props) {
  return (
    <main className={styles.main}>
      <Headline page={page} />
      <Links />
    </main>
  )
}