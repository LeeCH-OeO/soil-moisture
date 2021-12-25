import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import myFirebase from "./firebase";
import { Typography } from "@mui/material";
const database = getDatabase(myFirebase)

export default function GetAllData(){
    const[sensorData, setSensorData] = useState('')

    useEffect(()=>{
        onValue(ref(database, "data"), (snapshot)=>{
        const getNumber = snapshot.val()
        const numberList = []
        for(let id in getNumber){
            numberList.push(getNumber[id])
        }
        setSensorData(numberList)
        
        })
    }, [])
    return(
        
        <div className="allData">
            {sensorData ? sensorData.map((i)=> <Typography variant="h6" >{i.moisture}, {i.time}</Typography>):""}
        </div>
    )
}