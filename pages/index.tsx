import Head from 'next/head'
import Footer from '../componets/footer'
import Header from '../componets/header'
import Main from '../componets/main'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useCallback } from 'react';
import QuestBox from '../componets/questBox'
import { useBackgroundBlue } from '../hooks/useBackgroundBlue';



const Home = () => {
  useBackgroundBlue();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <QuestBox />
      
      <Main page="index" />
      <Footer />
    </div>
  )
}

export default Home;