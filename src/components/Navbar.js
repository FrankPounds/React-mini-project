import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/MenuRounded';
import '../styles/Navbar.css';

function Navbar() {

    const [sideBar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sideBar);

  return (
    <div className="Navbar">
        <div className="mainNav">
            <h1 className="logo"><span className='Bezo'>Bezo</span><span className='Money'>Estate</span></h1>

            <nav>
                <div className='sideBar'>
                    <span className={sideBar ? 'sideBar active' : 'sideBar'}>
                    <span className='closeBtn' onClick={showSideBar}>&times;</span>
                <ul onClick={showSideBar}>
                    <a href='#infoSection'>homes</a>
                    <a href='#viewSection'>rentals</a> 
                    <a href='#interiorSection'>about</a>
                    <Link to='#' className='navContactBtn' >
                    <button>contact</button>
                </Link>
                </ul>
                </span>
                </div>
            </nav>
            
            
            
            <div className="navBtn" onClick={showSideBar}>
                <div className="navBar">
                    <MenuIcon />
                </div>
            </div>

        </div>
    </div>
  );
}

export default Navbar;