import { useCounter } from '../hooks/useCounter';
import { useInputText } from '../hooks/useInputText';
import styles from '../styles/Home.module.css';

export default function QuestTypeA() {
    const { count, handleClick } = useCounter();

    const { text, isShow, array, handleText, handleIsShow, handleAdd } = useInputText();

    return(
        <div className={styles.center}>
            <h2>{count}</h2>
            <button onClick={handleClick}>加1</button>
            <br />
            <button onClick={handleIsShow}>顯示輸入框</button>
            <br />
            {isShow ? <input type="input" value={text} onChange={handleText} /> : null}
            <br />
            <button onClick={handleAdd}>加入</button>
            <br />
            <ul>
            {array.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
            </ul>
        </div>
    )
}