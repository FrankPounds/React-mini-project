import React from 'react';
import {Link} from 'react-router-dom';
import InteriorImage from '../assets/img5.jpg';
import '../styles/Interior.css';

function Interior() {
  return (
    <div id='interiorSection' className='InteriorSection'>
        <div className="interiorContent">
            <div className="interiorText">
                <h3>Stunning Exterior</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel enim explicabo est saepe laboriosam molestias blanditiis incidunt eaque reiciendis.
                    <Link to='#' className='interiorBtn'>
                        <button>Learn more</button>
                    </Link>
                </p>
            </div>
            <div className="interiorImage">
                <img src={InteriorImage} alt="InteriorImage" />
            </div>
        </div>
    </div>
  );
}

export default Interior;