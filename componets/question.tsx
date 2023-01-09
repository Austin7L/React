import { useEffect, useState } from "react";

export default function Question(props: {name: string;}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1> {props.name} </h1>
            <label>{count}</label>
            <p></p>
            <button onClick={()=> setCount(count + 1)}>
                Rate
            </button>
        </div>
    )
}