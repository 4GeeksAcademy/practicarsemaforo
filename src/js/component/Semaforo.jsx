import React, { useState, } from 'react';

const Semaforo = () => {
    
    const [color, setColor] = useState("");

    return (
        <div className="semaforo">
            <div onClick={()=>setColor("verde")}   className={"faro verde " + ((color==="verde") ? "encendido":"") }></div>
            <div onClick={()=>setColor("naranja")} className={"faro naranja " + ((color==="naranja") ? "encendido": "")}></div>
            <div onClick={()=>setColor("rojo")}     className={"faro rojo " + ((color==="rojo,") ? "encendido": "")}></div>

        </div>            
                                                                                                                   
    );
};

export default Semaforo;

