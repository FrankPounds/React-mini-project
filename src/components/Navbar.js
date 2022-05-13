import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import NavLogoImage from '../assets/logo.png';
import LargeImage from '../assets/pepsi001.png';
import SmallImageOne from '../assets/pepsi001.png';
import SmallImageTwo from '../assets/pepsi002.png';
import SmallImageThree from '../assets/pepsi003.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styled/Navbar.css';
import '../styled/Header.css';

function Navbar() {

    const [sideBar, setsideBar] = useState(false);
    const showSideBar = () => setsideBar(!sideBar);

  return (
      <header className='bannerContainer'>
    <div className='Navbar'>
        <div className="mainNav">
            <div className='navLogo'>
            <img src={NavLogoImage} alt="NavLogoImage" className='NavLogoImage' />
            <h1 className='logoText'>BezoCola <span style={{color: `#56c596`}}>Shop</span></h1>
            </div>
            <nav>
                <div className="sideBar">
                    <span className={ sideBar ? 'sideBar active' : 'sideBar' }>
                    <span className='closeBtn' onClick={showSideBar}>&times;</span>
                <ul onClick={showSideBar}>
                    <Link to=''>Home</Link>
                    <Link to=''>Products</Link>
                    <Link to=''>What's New</Link>
                    <Link to=''>Letter</Link>
                    <Link to=''>About</Link>
                    <Link to=''>Contact</Link>
                </ul>
                </span>
                </div>
            </nav>
            <div className='navBtn'>
                <div className='navBar' onClick={showSideBar}>
                    <MenuIcon />
                </div>
            </div>
        </div>
    </div>

    <div className="bannerContent">
        <div className="bannerText">
            <h2>That's what <br /> <span>i like</span></h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero asperiores repellat, sapiente atque reprehenderit eum consectetur officia dolores tempora quia enim libero, veniam eius accusamus voluptas dignissimos laudantium, dolorum nobis.
            </p>
            <Link to='#'><button>view our products</button></Link>
        </div>
        <div className="bannerImage">
            <img src={LargeImage} alt="lg" />
        </div>
        <div className="bannerIcon">
            <Link to=''><FacebookIcon /></Link>
            <Link to=''><TwitterIcon /></Link>
            <Link to=''><InstagramIcon /></Link>
        </div>
    </div>
    <div className="smallImage">
        <div className="smallImg"><img src={SmallImageOne} alt="sm1" /></div>
        <div className="smallImg"><img src={SmallImageTwo} alt="sm2" /></div>
        <div className="smallImg"><img src={SmallImageThree} alt="sm3" /></div>
    </div>
    </header>
  );
}

export default Navbar;