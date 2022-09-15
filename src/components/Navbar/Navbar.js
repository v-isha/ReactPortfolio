import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../img/vklogo.jpg'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
            <div className='navc'>
              <div className='wrap'>
                <div className='navl'>
                  <Link to="/"><img src={logo} alt="" className="logo" /></Link>
                  {/* <Link to="/" className='link'>Home</Link>
                  <Link to="/about" className='link'>About</Link>
                  <Link to="/project" className='link'>Work</Link>
                  <Link to="/contact" className='link'>Contact</Link> */}
                   
                </div>
                <div className='navm'>
                    
                </div>
                <div className='navr'>
                    
                </div>
              </div>
            </div>
  )
}

export default Navbar