import React from 'react'
import './Header.css'
import logo from '../Images/headerlogo.png'


const Header = () => {
     const nav =[    
      { name: "Home", link: ".header",id:1,},
      { name: "Records", link: "src/components/records/Records" ,id:2},
      { name: "Contact", link: "#", id:3},
      { name: "Footer", link: "#",id:4},
      ];
      
  return (
    
    <div className='header-div'>
        <header className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="nav">
                {nav.map((item,idx) => (
                    <a id='nav-item' href={item.link} key={idx}>
                        {item.name}
                        <span></span>
                        
                    </a>
                ))};
            </div>
            <button className="loginbtn"><span>Login</span></button>
            </header>
    </div>  
  )
}

export default Header