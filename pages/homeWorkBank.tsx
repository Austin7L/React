import Head from 'next/head'
import Message from '../componets/message'
import Question from '../componets/question'
import styles from '../styles/Home.module.css'
import Labels from '../componets/Labels'
import money from '../hooks/money'
import Bank from '../componets/bank'

export default function bank() {
  return (
    <Bank />
  )
}
