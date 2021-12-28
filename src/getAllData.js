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
            if(getNumber[id].time!=="0"){
                numberList.unshift(getNumber[id])//adds new elements to the beginning of an array
            } 
        }
        setSensorData(numberList)
        
        })
    }, [])
    return(
        
        <div className="allData">
            {sensorData ? sensorData.map((i)=> <Typography variant="h6" style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '400'}}>humidity: {i.humidity}, time: {i.time}</Typography>):""}
        </div>
    )
}