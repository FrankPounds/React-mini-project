import React from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='Footer'>
        <div className="footerContent">
            <div className="footerText">
                <h3>Let's find <br /> your Dream Home</h3>
            </div>
            <div className="footerLink">
                <div className="footerIem footerContact">
                    <h4>Contacts</h4>
                    <Link to=''>FAQ</Link>
                    <Link to=''>Support</Link>
                    <Link to=''>Question</Link>
                </div>
                <div className="footerItem footerOffice">
                <h4>Offices</h4>
                    <Link to=''>East-Legon</Link>
                    <Link to=''>WestLand</Link>
                    <Link to=''>Tema</Link>
                </div>
                
            </div>
            <div className="footerItem footerSocial">
                    <Link to=''><FacebookIcon /></Link>
                    <Link to=''><TwitterIcon /></Link>
                    <Link to=''><InstagramIcon /></Link>
                    <Link to=''><YoutubeIcon /></Link>
                </div>
        </div>
    </div>
  )
}

export default Footer;