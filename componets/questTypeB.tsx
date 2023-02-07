import styles from '../styles/Home.module.css';
import { useMemo } from 'react';

const QuestTypeB = ({ countAbout, handleAboutClick, handleClick, text, isShow, array, handleText, handleIsShow, handleAdd }: any) => {

  return (
    <div className={styles.center}>
      <h2>{countAbout}</h2>
      <button onClick={handleAboutClick}>加1</button>
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

export default QuestTypeB;