import { useState, useEffect } from "react";

export default function Message() {

    const [name, setName] = useState("");
    // const [list, setList] = useState<string[]>([]); //type-script need to assignment type
    const [list, setList] = useState(["我支持React", "Google才是王道", "Mark is Eevery thing"]) //give default values

    function handleChange(e: any) {
        setName(e.target.value);
    }

    function handleAdd() {
        if (name != "") {
            setName("");
            setList((prevList) => {

                // const newArray = [...prevList, name];
                // return newArray;

                return [...prevList, name];
            })
        }
    }

    return (
        <div>
            <input value={name} type="text" onChange={handleChange} />
            <button type="button" onClick={handleAdd}>
                Add
            </button>
            <ul>
                {list.map((item) => { return <li key={item}>{item}</li> })}
            </ul>
        </div>
    )
}