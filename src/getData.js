import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import myFirebase from "./firebase";
import Typography from '@mui/material/Typography';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

const database = getDatabase(myFirebase)

export default function GetData(){
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
                <Typography variant="h3" gutterBottom>Current: { sensorData ? sensorData[sensorData.length-1].moisture  :""}</Typography>
            </div>

            <div className="allData">
                
                    <AreaChart width={1800} height={800} data={sensorData}>
                    <Area type="monotone" dataKey="moisture" stroke="#8884d8" activeDot={{ r: 3 }}/>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="time"/>
                    <YAxis dataKey="moisture"/>
                    <Tooltip />
                    </AreaChart>             
            </div>
            
        </div>
    )
}
