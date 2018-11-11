import React from 'react';
import Profile from './Profile';
import './About.css';
import Sai from './sai.jpg';
import Anna from './anna.jpeg';
import Jamie from './jamie.jpg';
import Addi from './addison.jpg';
import Josh from './joshmin.jpg';

export default () => {
  let joshDescription = "hi";
  let jamieDescription = "";
  let addisonDescription = "";
  let annaDescription = "";

  return(
  <div className="container">
    <h1 className="header">About the Developers</h1>
    <div className="content">
    
      <div className="row">
        <div className="col-sm">
        <img src={Addi} className="ppicture"></img>
          <Profile
            name="Addison A."
            major="CS"
            description={addisonDescription}
          />
        </div>
        <div className="col-sm">
        <img src={Anna} className="ppicture"></img>
          <Profile
            name="Anna S."
            major="CECS"
            description={annaDescription}
          />
        </div>
        <div className="col-sm">
        <img src={Jamie} className="ppicture"></img>
           <Profile
            name="Jamie S."
            major="CECS"
            description={jamieDescription}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
        <img src={Josh} className="ppicture"></img>
          <Profile
            name="Josh M."
            major="CS"
            description={joshDescription}
          />
        </div>
        <div className="col">
        <img src={Sai} className="ppicture"></img>
          <Profile
            name="Sai A."
            major="CS"
            description={joshDescription}
          />
        </div>
      </div>
    </div>
  </div>
  );
};
