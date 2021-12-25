import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import myFirebase from "./firebase";
import Typography from '@mui/material/Typography';
import { typography } from "@mui/system";

const database = getDatabase(myFirebase)

export default function GetData(){
    const[sensorData, setSensorData] = useState('')

    useEffect(()=>{
        onValue(ref(database, "data"), (snapshot)=>{
        const getNumber = snapshot.val()
        const numberList = []
        for(let id in getNumber){
            numberList.push(getNumber[id].moisture)
        }
        setSensorData(numberList)
        console.log()
        })
    }, [])
    return(
        
        <div>
            <div className="currentData">
                <Typography variant="h3" gutterBottom>Current: {sensorData[sensorData.length-1]}</Typography>
            </div>

            <div className="allData">
                <Typography variant="h3" gutterBottom>History </Typography>
                {sensorData ? sensorData.map((i)=> <Typography variant="h6" >{i}</Typography>):""}
            </div>
            
        </div>
    )
}
