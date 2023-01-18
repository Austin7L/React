import Head from 'next/head'
import Message from '../componets/message'
import Question from '../componets/question'
import styles from '../styles/Home.module.css'
import Labels from '../componets/Labels'
import money from '../hooks/money'

export default function bank() {
  return (
    <h1>
      <Labels title="123" />
      <Labels title={money} />
      <Labels title="元" />
    </h1>
  )
}
