import React from 'react'
import './records.css'
import record1img from '../Images/record1.png'



const Records = () => {


  return (
    <section className='record-continer'>
      
      <div className="space">
        <div></div>
      </div>
      <div className="record-content">
        <h1>RECENT PROJECTS</h1>
        <div className="project1-continar">
        <div className="project1"><img src={record1img} alt="" /></div>
        <div className="project1-info">
          <h1>Project 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum vero aliquam, iusto blanditiis consectetur ipsa sequi voluptates quo corporis assumenda dolorem eius modi totam excepturi itaque tempore dolor voluptate  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nobis magnam sequi quidem facilis quisquam. Harum cum hic excepturi dolore iure, inventore magni nostrum suscipit consequuntur sit voluptates nam autem!   </p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Records