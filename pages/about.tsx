import Head from 'next/head'
import Footer from '../componets/footer'
import Header from '../componets/header'
import Main from '../componets/main'
import styles from '../styles/Home.module.css'
import { useBackgroundBlue } from '../hooks/useBackgroundBlue';
import { PageContext, pageInfo } from '../componets/pageContext';

const About = () => {
  useBackgroundBlue();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageContext.Provider value={pageInfo.about}> {/* 將需要傳參數的元件包起來 */}
        <Main />
      </PageContext.Provider>
      <Footer />
    </div>
  )
}

export default About;