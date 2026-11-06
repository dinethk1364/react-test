import React from 'react'
import './main.css'
import { useState } from 'react';

export default function Counter() {

    const [count, setCount] = useState(0)

    const increment = () =>{
        // count+=1;
        setCount(count+1);
    }
    const decrement = () =>{
        // count-=1;
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }

    return (
        <div className='counter'>
            <div className="tool">
                <h1 className='CntHeader'>Counter</h1>
                <p className='count'>The count is {count}</p>
                <button className='cntBtn' onClick={decrement}>-</button>
                <button className='cntBtn' onClick={increment}>+</button>
                <button className='cntBtn' onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
