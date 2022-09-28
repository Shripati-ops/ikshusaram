import React from "react";
import style from  './home.module.css'
const Home = (props) => {
    return (<div className={style.appHeader}>
        <img src = "./assets/Ellipse 4.png" className = {style.headerImgs}></img>
        <div className={style.textContent}>
         <div className = {style.headerText}>śrīmate rāmānujāya namaḥ<br/>
                                            śrīmate nigamāntamahādeśikāya namaḥ</div>

         <div className={style.appLogo}> Ikshusaram</div>

         <div className={style.headerText2}> sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja<br/>
                                            ahaṁ tvā sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ</div>
                                            </div>
        <img src = "./assets/Ellipse 5.png" className = {style.headerImgs}></img>
        
        
    </div>)
}

export default {routerProps: {
    path:'/',
    exact : true,
    element : Home
},
 moduleName : 'Home'}