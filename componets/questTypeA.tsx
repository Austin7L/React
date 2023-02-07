import { useRef, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import useAutoHeight from '../hooks/useAutoHeight';

const QuestTypeA = ({ count, handleClick, text, isShow, array, handleText, handleIsShow, handleAdd }: any) => {

  const refTextArea = useAutoHeight(text);

  return (
    <div className={styles.center}>
      <h2>{count}</h2>
      <button onClick={handleClick}>加1</button>
      <br />
      <button onClick={handleIsShow}>顯示輸入框</button>
      <br />
      {isShow ? <textarea ref={refTextArea} value={text} onChange={handleText} /> : null}
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