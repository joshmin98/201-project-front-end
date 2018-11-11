import React from 'react';
import Profile from './Profile';
import './About.css';
import Sai from './sai.jpg';
import Anna from './anna.jpeg'
import Jamie from './jamie.jpg'
import Addi from './addison.jpg'
import Josh from './joshmin.jpg'

export default () => {
  let joshDescription = "hi";
  let jamieDescription = "";
  let addisonDescription = "";
  let annaDescription = "";

  return(
  <div class="container">
    <h1 class="header">About the Developers</h1>
    <div class="content">
    
      <div class="row">
        <div class="col-sm">
        <img src={Addi} class="ppicture"></img>
          <Profile
            name="Addison A."
            major="CS"
            description={addisonDescription}
          />
        </div>
        <div class="col-sm">
        <img src={Anna} class="ppicture"></img>
          <Profile
            name="Anna S."
            major="CECS"
            description={annaDescription}
          />
        </div>
        <div class="col-sm">
        <img src={Jamie} class="ppicture"></img>
           <Profile
            name="Jamie S."
            major="CECS"
            description={jamieDescription}
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
        <img src={Josh} class="ppicture"></img>
          <Profile
            name="Josh M."
            major="CS"
            description={joshDescription}
          />
        </div>
        <div class="col">
        <img src={Sai} class="ppicture"></img>
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
