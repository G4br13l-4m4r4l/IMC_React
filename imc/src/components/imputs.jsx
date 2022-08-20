import React, { useState } from "react";



export default function Dados(){
    
    const [Heightfield, setHeight] = useState(0);
    const [weightfield, setweight] = useState(0);

    function handleCalculateButton(){
        if(Heightfield && weightfield){

        }else{
            alert("Preencha todos os campos!")
        }
    }

    return(
        <div className="container_2">
            <div className="peso">
                Peso:
                <input type='number' alt='peso' placeholder='Digite aqui o seu peso' value={Heightfield <=0?'':Heightfield} onChange={e=>setHeight(parseFloat(e.target.value))}></input>
            </div>
            <div className="altura">
                Altura:
                <input type='number' alt='altura' placeholder='Digite aqui a sua altura' value={weightfield<=0?'':weightfield} onChange={e=>setweight(parseFloat(e.target.value))}></input>
            </div>
            <button onClick={handleCalculateButton}>Calcular</button>
        </div>
    );
}