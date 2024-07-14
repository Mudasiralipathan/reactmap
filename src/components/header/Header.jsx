import React from 'react'
import './Header.css'

const Header = () => {
     const nav =[    
      { name: "Home", link: "https://www.google.com",id:1},
      { name: "Records", link: "" ,id:2},
      { name: "Education", link: "#education", id:3},
      { name: "Contact", link: "#contact",id:4},
      ];
      
  return (
    <div className='header-div'>
        <header className="header">
            <div className="logo"><img src="src\assets\headerlogo.png" alt="" /></div>
            <div className="nav">
                {nav.map((item,idx) => (
                    <a href={item.link} key={idx}>
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