import React, {useState} from "react";
import myFirebase from "./firebase";
import { getDatabase, ref, push, } from "firebase/database";

const database = getDatabase(myFirebase)
export default function NewData(){
    const [number, setNumber] = useState('')
    const handleDataOnChange = (e)=>{
        setNumber(e.target.value)
       
    }
    
    const createNumber = ()=>{
        
        push(ref(database, 'data/'), {
            moisture: number,
            time: Date()            
        })
    }

    return(
        <div>
            <input type="text" onChange={handleDataOnChange} value={number}></input>
            
            <button onClick={createNumber}>add number</button>
        </div>
    )
}