import { useState } from "react";

export default function Question(props: {name: string;}) {
    // var total :number = props.cnt;
    // function rate() {
    //     total+=1;
    //     console.log(total);
    // }

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1> {props.name} </h1>
            <label>{count}</label>
            <p></p>
            <button onClick={() => setCount(+1)}>
                Rate
            </button>
        </div>
    )
}