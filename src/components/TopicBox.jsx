import React from 'react'
import "./topicBox.css"

export default function TopicBox(props) {
    const topic = 'This is '
    const item = 'Topic'
    return (
        <div>
            <div className="topicBox">
                <span className='text'>{topic} {item}</span>
                <p>Hello</p>
                <h1>{props.name}</h1>
                <div className = {props.className}></div>
                {props.children}
            </div>
        </div>
    );
}
