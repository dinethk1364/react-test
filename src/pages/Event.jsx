import React from 'react'
import Button from 'react-bootstrap/esm/Button';

function btnClick() {
    alert("Hello");
}
export default function Event() {
    return (
        <div>
            <h1>React Event Handling</h1>
            <hr />
            <Button onClick={btnClick}>Click Here</Button>
        </div>
    );
}
