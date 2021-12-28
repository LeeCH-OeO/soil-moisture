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
            if(getNumber[id].time!=="0"){
                numberList.push(getNumber[id])
            }
            
        }
        setSensorData(numberList)
        
        })
    }, [])
    return(
        
        <div>
            
            <div className="currentData">
                <Typography variant="h2" gutterBottom style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '900'}}>
                    Current humidity 💧: { sensorData ? sensorData[sensorData.length-1].moisture  :""} 
                </Typography>
                <Typography variant="h5" gutterBottom style={{'fontFamily': 'Noto Sans  TC', 'fontWeight': '700'}}>
                    Time ⌚: {sensorData ? sensorData[sensorData.length-1].time  :""}
                </Typography>
            </div>
        </div>
    )
}
export{GetData}