import React from 'react'
import './navigation.css'

export default function Navigation() {
  return (
    <div className='navBar'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/counter">Counter</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}
