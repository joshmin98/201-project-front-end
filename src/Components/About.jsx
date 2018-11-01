import React from 'react';
import Profile from './Profile';

export default () => {
  let joshDescription = "hi";
  let jamieDescription = "";
  let addisonDescription = "";
  let annaDescription = "";

  return(
    <div className="container">
      <h1>About</h1>
      <Profile
        name="Addison A."
        major="CS"
        description={addisonDescription}
      />
      <Profile
        name="Anna S."
        major="CECS"
        description={annaDescription}
      />
      <Profile
        name="Jamie S."
        major="CECS"
        description={jamieDescription}
      />
      <Profile
        name="Josh M."
        major="CS"
        description={joshDescription}
      />
    </div>
  );
};
