import style from "./css_ind.module.css"
import { useState } from "react";
function Index() {
 const [progress,setProgress]=useState(0);

 const handleButton =()=>{
    if(progress<100){
        setProgress(progress+20)
    }
 }

    return (
        <div className={style.container}>

            <div className={style.progressbar}>
                <div className={style.progressbarfile}>progress</div>
            </div>
            <div className={style.progresslabel} style={{width:`${progress}`}}> {" "}% </div>
            
            <button onClick={handleButton}>Progress</button>
            {/* <button onClick={handleButton}>Reset</button> */}


        </div>
    )
}
export default Index;