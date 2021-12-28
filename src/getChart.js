import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import myFirebase from "./firebase";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

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
                
                    <AreaChart width={1800} height={700} data={sensorData}>
                    <Area type="monotone" dataKey="humidity" stroke="#000000"  activeDot={{ r: 3 }}/>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="time"/>
                    <YAxis dataKey="humidity"/>
                    <Tooltip />
                    </AreaChart>             
            </div>            
        </div>
    )
}
export{GetChart}