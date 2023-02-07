import { useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import useAutoHeight from '../hooks/useAutoHeight';

const QuestTypeA = ({ countIndex, handleIndexClick, text, isShow, array, handleText, handleIsShow, handleAdd }: any) => {

  const refTextArea = useAutoHeight(text);

  return (
    <div className={styles.center}>
      <h2>{countIndex}</h2>
      <button onClick={handleIndexClick}>加1</button>
      <br />
      <button onClick={handleIsShow}>顯示輸入框</button>
      <br />
      {isShow ? <input type="input" value={text} onChange={handleText} /> : null}
      <br />
      <button onClick={handleAdd}>加入</button>
      <br />
      <ul>
        {array.map((item: any, index: number) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default QuestTypeA;