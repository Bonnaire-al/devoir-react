import React from 'react';
import './style-tp.css';
import BackraoundPic from '../img/background.jpg'

const TopPage = ({ title, subtitle }) => {
  return (
    <div className="container-fluid tp">
      <div className="row">
          <div className="col-md-12">
            <img src={BackraoundPic} alt="informatiquePic" className="img-top" />
          </div>
          <div className="col-md-12 text-center title">
            <h1 className="display-5">{title}</h1>
            <p className=" subtitle">{subtitle}</p>
          </div>
        </div>
   </div>
  );
};

export default TopPage;
