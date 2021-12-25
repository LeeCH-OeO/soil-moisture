import { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import myFirebase from "./firebase";
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
        console.log(numberList)
        })
    }, [])
    return(
        
        <div>
            <div className="currentData">
                <h1>current: {sensorData[sensorData.length-1]}</h1>
            </div>

            <div className="allData">
                {sensorData ? sensorData.map((i)=><p>{i}</p>):""}
            </div>
            
        </div>
    )
}
