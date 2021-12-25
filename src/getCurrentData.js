import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import myFirebase from "./firebase";
import Typography from '@mui/material/Typography';

const database = getDatabase(myFirebase)
function GetData(){
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
        
        <div>
            
            <div className="currentData">
                <Typography variant="h3" gutterBottom>
                    Current humidity: { sensorData ? sensorData[sensorData.length-1].moisture  :""} 
                </Typography>
                <Typography variant="h4" gutterBottom>
                    Time: {sensorData ? sensorData[sensorData.length-1].time  :""}
                </Typography>
            </div>
        </div>
    )
}
export{GetData}