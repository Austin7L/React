import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.header} href="/">Index</Link>
      <Link className={styles.header} href="/about">About</Link>
      <Link className={styles.header} href="/homeWork1">Vote</Link>
      <Link className={styles.header} href="/homeWorkBank">Bank</Link>
    </header>
  )
}