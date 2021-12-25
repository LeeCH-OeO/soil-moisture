import React, {useState} from "react";
import myFirebase from "./firebase";
import { getDatabase, ref, push, } from "firebase/database";

const database = getDatabase(myFirebase)
export default function NewData(){
    const [number, setNumber] = useState('')
    const handleOnChange = (e)=>{
        setNumber(e.target.value)
    }
    const createNumber = ()=>{
        push(ref(database, 'data/'), {
            moisture: number,
            
        })
    }

    return(
        <div>
            <input type="text" onChange={handleOnChange} value={number}></input>
            <button onClick={createNumber}>add number</button>
        </div>
    )
}