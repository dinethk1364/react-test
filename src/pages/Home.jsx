import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import "./home.css"

export default function Home() {
  return (
    <div>
        <h1>This is the Home Page</h1>
        <TopicBox className='ddk' name="Dineth">
          <span>This is the description</span>  
        </TopicBox>  
        <div className="ddk"><TopicBox className= "test" name="Kaveeshwara"/></div>
        <TopicBox name="Silva">
          <button>Click Me</button>  
          <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse aliquam, in repellat ipsam dicta rem porro eveniet dolor quis. Placeat in aliquam cupiditate fuga ad maiores aperiam magni corrupti.</p>
        </TopicBox>
        <Content/>
    </div>
  );
}
