
import styles from "../styles/Home.module.css";

export default function QuestTypeB() {
    const {count, handleClick} = useCounter();
    const {text, isShow, array, handleCHange, handleShow, handleAdd} = useAddText();
    return (
        <div className={styles.center}>
            <h2>{count}</h2>
            <button onCLick={handleClick}>按鈕</button>
            <br />

            <button onClick={handleShow}>顯示輸入框</button>
            <br />
            {isShow ? (
                <input type="input" value{text} onChange={handleChange} />
            ) : null}
            <br />
            <button onClick={handleAdd}>加入</button>
            <br />
            <ul>
                {array.map((item, index) = > {
                    return <li>  key={index)>{item}}</li>;
                })}
            </ul>
        </div>
    )
}