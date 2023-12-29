import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/wow2.png';
function Navbar() {
 return (
    <div>
        <nav>
             <Link to = 'main' className='logo'>
             <img src={logo} alt='logo'/>
             </Link>
             <input className='menu-btn' type='checkbox' id='menu-btn'/>
             <label  className='menu-icon' for='menu-btn'>
             <span className='nav-icon'></span>
            </label>

            <ul className='menu'>
              <li><Link to ='main' className='active'>ANA SAYFA</Link></li>
              <li><Link to ='AI' >AI</Link></li>
              <li><Link to ='ADMIN' >ADMIN</Link></li>
              
              <li><Link to ='#' >CONTACT</Link></li>
            </ul>
            
             
        </nav>
    </div>
 )
}

export default Navbar;