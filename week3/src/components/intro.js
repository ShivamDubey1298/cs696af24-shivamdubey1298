import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Intro() {
    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1);
    };

    useEffect(()=>{
        fetch('http://localhost:9000')
        .then((response) =>{
             console.log('response: ', response);
        })
        .catch((error)=>{
            console.error('error:', error);
    })
},[])

    const decrement = () => {
        setCounter(counter - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Just Another Page</h1>
            <h2>Counter: {counter}</h2>
            <Button variant="primary" onClick={increment}>
                Increment
            </Button>
            <Button variant="danger" onClick={decrement} style={{ marginLeft: '10px' }}>
                Decrement
            </Button>
        </div>
    );
}

export default Intro;
