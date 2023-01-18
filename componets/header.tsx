import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.title}>
      <Link className={styles.title} href="/">Index</Link>
      <Link className={styles.title} href="/about">About</Link>
    </header>
  )
}