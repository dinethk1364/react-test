import { useState ,useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button';

function UseEffects() {
    const [value, valueSet] = useState(0);

    const increment = () => {
        valueSet(value+1)
    };
    const decrement = () => {
        valueSet(value-1)
    };
    const reset = () => {
        valueSet(0);
    };
    
    useEffect(()=>{
        console.log('New Count is : ' + value)
    },[value]);

    return (

        <div>
            <h1>Counter v2</h1>
            <hr />
            <br />
            <h3>Current Count {value}</h3>
            <Button variant='dark' className='btn1' onClick={decrement}>-</Button>
            <Button variant='dark' className='btn1' onClick={increment}>+</Button>
            <Button variant='dark' className='btn1' onClick={reset}>reset</Button>
        </div>
    );
}

export default UseEffects
