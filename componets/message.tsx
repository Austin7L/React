import { useState } from "react";

export default function Message() {
    var messages = ["A","B","C"];
    const listMessages = messages.map((message) =>
        <li>{message}</li>
    );

    const [message, setMessage] = useState("");
    const [text, setText] = useState("");

    function doList() {

        return "";
    }

    const [list, setList] = useState(messages);
    const [name, setName] = useState("");

    function handleChange(e: any) {
        setName(e.target.value);
    }

    function handleAdd(e: any) {
        if(name!="") {
            messages.push(name);
            console.log(messages);
            setName("");
        }
    }

    return (
        <div>
            <input id="ip1" type="text" onChange={handleChange} />
            {/* <button onClick={() => setMessage(doList())}>submit</button> */}
            <button type="button" onClick={handleAdd}>
                Add
            </button>
            {/* <ul>{message}</ul> */}
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}