import styles from '../styles/Home.module.css';
import React from 'react';
import { useContext } from 'react';
import { PageContext } from './pageContext';

interface Props {
  page: string;
  title?: string;
}

const Headline = () => { //title為可選參數，可以給初始值

  const pageInfo = useContext(PageContext); //取得自定義Context

  return (
    <>
      <h1 className={styles.title}>
        {pageInfo.page} Page
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/{pageInfo.title}.js</code>
      </p>
    </>
  )
}

export default Headline;