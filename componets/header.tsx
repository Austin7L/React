import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header} href="/">Index</Link>
      <Link className={styles.header} href="/about">About</Link>
      <Link className={styles.header} href="/vote">Vote</Link>
      <Link className={styles.header} href="/bank">Bank</Link>
    </header>
  )
}

export default Header;