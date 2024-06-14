// import React, { useState, } from 'react';


// const Semaforo = () => {
//     const [light, setLight] = useState('red');

//     return (
//         <div className="traffic-light">
//             <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
//             <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
//             <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
//         </div>
//     );
// };

// export default Semaforo;


import React, { useState } from 'react';

const Semaforo = () => {
    const [luz, setLuz] = useState('');


    return (
        
       <div className="semaforo">
            <div onClick={()=>setSelectColor("green")}className={"light green " + ((selectColor==="green")? "glow":"")}></div>
       </div>
      

    )
}

export default Semaforo;

