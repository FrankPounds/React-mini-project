import React from 'react';
import {Link} from 'react-router-dom';
import InfoImage from '../assets/img3.jpg';
import '../styles/InfoSection.css';

function InfoSection() {
  return (
    <div  id='infoSection' className='infoSectionContent'>
        <div className="infoText">
            <h3>Explore our beautiful homes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad odio adipisci, numquam laudantium mollitia rerum a dolor natus perferendis itaque nobis inventore id earum placeat corporis enim possimus fuga voluptatibus nemo ipsam vero! Culpa optio neque accusantium quasi quis earum ullam voluptatum laudantium iste.</p>
            <Link to='#' className='infoBtn'>
                <button>View homes</button>
            </Link>
        </div>
        <div className="infoImage">
            <img src={InfoImage} alt="InfoImage" />
        </div>
        </div>
  )
}

export default InfoSection;