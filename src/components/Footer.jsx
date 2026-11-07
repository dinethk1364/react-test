import React from 'react'
import './navigation.css'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='bar1'>
                <ul className='contactDetails'>
                    <li>
                        <p>dinethsilva30@gmail.com</p>
                    </li>
                    <li>
                        <a target="_blank" href="https://dinethsilva.com/">dinethsilva.com</a>
                    </li>
                </ul>

                <ul className='navlinks'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}
