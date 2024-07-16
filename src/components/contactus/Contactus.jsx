import React from 'react'
import './contactus.css'
import facebookimg from '../Images/facebook.png'
import mapimg from '../Images/map.png'
import mailimg from '../Images/mail.png'
import whatsappimg from '../Images/whatsapp.png'
import linkedinimg from '../Images/linkedIn.png'

const Contactus = () => {
  return (
    <section className='contactus'>
      <div className="space">
        <div></div>
      </div>

      <div className="contact-content">

        <h1>Contact Us</h1>
        <h2>Don't be shy! Hit me up! 👇</h2>
        <div className="contact-item">
          <div className="item">
            <div className="left">
              <img src={mapimg} alt="" />
              <div className="a">
                <span>location</span>
                <span>karachi</span>
              </div>
            </div>
            </div>



          <div className="item">
            <div className="left">
              <img src={mailimg} alt="" />
              <div className="a">
                <span> Mail</span>
                <span>example@gmail.com</span>
              </div>
              </div>
            </div>



          <div className="item">
            <div className="left">
              <img src={whatsappimg} alt="" />
              <div className="a">
                <span>Whatsapp</span>
                <span>0123456789</span>
              </div>
              </div>
            </div>



          <div className="item">
            <div className="left">
              <img src={linkedinimg} alt="" />
              <div className="a">
                <span>Linkedin</span>
                <span>muzamil ali</span>
              </div>
              </div>
            </div>



          <div className="item">
            <div className="left">
              <img src={facebookimg} alt="" />
              <div className="a">
                <span>Facebook</span>
                <span>Muzamil ali</span>
              </div>
              </div>
            </div>



          <div className="item">
            <div className="left"></div>
            </div>





        </div>


      </div>
    </section>
  )
}

export default Contactus