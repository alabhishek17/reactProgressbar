import style from "./css_ind.module.css"
import { useState } from "react";
function Index() {
 const [progress,setProgress]=useState(0);

 const handleButton =()=>{
    if(progress<100){
        setProgress(progress+20)
    }
    
 }
// if(progress>=100){
//     setProgress("completed");
// }
 const handleRestButton =()=>{
   
        setProgress(0)
    
 }
 const groundColor=()=>{
    if(progress<20){
        return "#ff0000";
    }
    else if(progress<40){
        return "#ffa500";
    }
    else{
        return "#2ecc71";
    }
 }

    return (
        <div className={style.container}>

            <div className={style.progressbar}>
                <div className={style.progressbarfile}  style={{width:`${progress}%`,backgroundColor:groundColor()}}>{""}</div>
            </div>
            <div> {progress}% </div>
            
            <button className={style.button1} style={{backgroundColor:"black",color:"white",margin:"10px"}} onClick={handleButton}>Progress</button>
            <button style={{backgroundColor:"black",color:"white"}} onClick={handleRestButton}>Reset</button>


        </div>
    )
}
export default Index;