import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import myFirebase from "./firebase";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const database = getDatabase(myFirebase)
function GetChart(){
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
            <div className="chart">
                <ResponsiveContainer width="100%" height={450}>
                    <AreaChart data={sensorData}>
                    <Area type="monotone" dataKey="humidity" stroke="#000000"  activeDot={{ r: 3 }}/>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="time"/>
                    <YAxis dataKey="humidity"/>
                    <Tooltip />
                    </AreaChart>
                </ResponsiveContainer>
             
            </div>            
        </div>
    )
}
export{GetChart}