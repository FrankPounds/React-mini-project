import React from 'react';
import {Link} from 'react-router-dom';
import BannerBg from '../assets/img1.jpg';
import '../styles/Banner.css';

function Banner() {
  return (
    <div className='Banner'>
        <div className="bannerContent" style={{backgroundImage: `url(${BannerBg})`}}>
            <h2>Welcome <br/> To BezoEstate</h2>
            <p>Invest with BezoEstate</p>
            <Link to='#' className='bannerBtn'>
                <button>Register now</button>
            </Link>
        </div>
    </div>
  );
}

export default Banner;