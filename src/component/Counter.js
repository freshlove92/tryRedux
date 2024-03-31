import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const Counter = () => {

    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const plus =()=>{
        setCount(count+1)
    }

    const minus =()=>{
        setCount(count-1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </div>
    );
};

export default Counter;