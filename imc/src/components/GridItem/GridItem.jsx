import React, { Fragment } from "react";
import './GridItem.css';
import up from '../../assets/up.png';
import down from '../../assets/down.png';


export default function GridItem(item){
    return(
        <div className="main_2" style={{backgroundColor: item.item}}>
           <div className="gridIcon">
                <img src={item.icon === 'up'? up:down} alt="" width="30"/>
           </div>
           <div className="gridTitle">{item.title}</div>
           <div className="gridInfo">
            <Fragment>
                O IMC está entre <bold>{item.imc[0]}</bold> e <bold>{item.imc[1]}</bold>
            </Fragment>
           </div>
        </div>
    );

}