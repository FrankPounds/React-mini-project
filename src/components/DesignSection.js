import React from 'react';
import {Link} from 'react-router-dom';
import DesignImage from '../assets/img3.jpg';
import '../styles/DesignSection.css';

function DesignSection() {
  return (
    <div className='DesignSection'>
        <div className="designContent">
        <div className="designImage">
            <img src={DesignImage} alt="designImage" />
        </div>
        <div className="designText">
            <h3>Modern Designs</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad odio adipisci, numquam laudantium mollitia rerum a dolor natus perferendis itaque nobis inventore id earum placeat corporis enim possimus fuga voluptatibus nemo ipsam vero! Culpa optio neque accusantium quasi quis earum ullam voluptatum laudantium iste.</p>
            <Link to='#' className='designBtn'>
                <button>View homes</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default DesignSection;