import React from 'react'
import './Header.css'


const Header = () => {
     const nav =[    
      { name: "Home", link: "#",id:1,},
      { name: "Records", link: "#" ,id:2},
      { name: "Education", link: "#", id:3},
      { name: "Contact", link: "#",id:4},
      ];
      
  return (
    <div className='header-div'>
        <header className="header">
            <div className="logo"><img src="src\assets\headerlogo.png" alt="" /></div>
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