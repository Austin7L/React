import React, { useReducer, useState } from "react";
import styles from "../styles/Home.module.css";

const initState = {
    money: 1000000,
    history: []
}

type BankState = {
    money: number,
    history: {
        operation: string;
        ammount: number
    }[]
}

type BankAction =
    | { type: "DEPOSITE"; payload: number }
    | { type: "WITHDRAW"; payload: number };

const reduser = (state: BankState, action: BankAction) => {
    //return值更新狀態

    switch (action.type) {
        case "DEPOSITE":
            return { ...state, money: state.money + action.payload, history: [...state.history, {operation: "DEPOSITE", ammount: action.payload}] }

        case "WITHDRAW":
            return { ...state, money: state.money - action.payload, history: [...state.history, {operation: "WITHDRAW", ammount: action.payload}] }
        defalut:
        return state;
    }
}


const Bank = () => {
    const [state, dispatch] = useReducer(reduser, initState);

    const [amount, setAmount] = useState<number>(0);

    const onDeposite = () => {
        dispatch({type: "DEPOSITE", payload: amount});
    }

    const onWithDraw = () => {
        dispatch({type: "WITHDRAW", payload: amount});
    }

    return (
        <div className={styles.title}>餘額:{state.money.toLocaleString()}元
            <br />
            <input value={amount} type="number" onChange={(e) => {setAmount(Number(e.target.value))}}/>
            <br />
            <button onClick={(e) => {onDeposite()}}>存入</button>
            <button onClick={(e) => {onWithDraw()}}>領出</button>
            <br />
            <ul className={styles.description}>
                {state.history.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.operation} : {item.ammount}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Bank;