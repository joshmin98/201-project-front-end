import React from 'react';

export default (props) => {
  return(
    <div className="container">
      <h3>{props.name}</h3>
      <h4>{props.major}</h4>
      <p>{props.description}</p>
    </div>
  );
};
