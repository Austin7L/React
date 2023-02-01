import { useState } from "react";
import styles from '../styles/Home.module.css'

const Question = (props: {name: string;}) => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.quesBorder}>
            <h1> {props.name} </h1>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count + 1)}>
                Rate
            </button>
        </div>
    )
}

export default Question;