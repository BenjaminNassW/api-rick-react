import '/workspace/api-rick-react/src/styles/box.css'
import React, { useState } from 'react';


function Box(props) {
    const [color, setColor] = useState("bg-secondary");


    return (
        <div id='boxes' className={`border border-dark box ${color}`} onClick={() => { props.id === 'water' ? setColor("bg-primary") : setColor("bg-danger") }}>

        </div>
    );
}

export default Box;