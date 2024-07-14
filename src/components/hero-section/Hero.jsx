import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="info">
        <h1>I'M a </h1>
        <h1>Frontend</h1>
        <h1> Developer</h1>
        <button className="aboutmebtn"><span>About me</span></button>
      </div>
      <div className="img-container">
        <img src="src\assets\1.png" alt="" />
      </div>
      
    </section>
    
  )
}

export default Hero