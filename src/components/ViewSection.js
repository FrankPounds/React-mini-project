import React from 'react';
import ViewImageOne from '../assets/img3.jpg';
import ViewImageTwo from '../assets/img6.jpg';
import '../styles/ViewSection.css';

function ViewSection() {
  return (
    <div id='viewSection' className='ViewSection'>
        <div className="viewSectionContent">
            <div className="viewText">
                <h3>View our newest homes</h3>
            </div>
            <div className="viewImageContent">
                <div className="viewImage viewImageOne">
                    <img src={ViewImageOne} alt="viewImageOne" />
                    <p>8 Bed 10 Bath house in East-Legon, Ghana</p>
                </div>
                <div className="viewImage viewImageTwo">
                    <img src={ViewImageTwo} alt="viewImageTwo" />
                    <p>5 Bed 3 Bath house in WestLand, Ghana</p>
                </div>
            </div>
        </div>
        </div>
  )
}

export default ViewSection;