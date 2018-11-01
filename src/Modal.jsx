import React from 'react';

export default props => {

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,0.65)'
  };

  const contentStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10000,
    overflow: 'auto',
    textAlign: 'center',
    padding: '4px',
    cursor: 'pointer'
  };

  const dialogStyle = {
    position: 'relative',
    outline: 0,
    width: 'auto',
    display: 'inline-block',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    maxWidth: 'auto',
    cursor: 'default',
    borderRadius: '4px'
  };

  return(
    <div>
      <div className="modal-overlay-div" style={overlayStyle}/>
      <div className="modal-content-div" style={contentStyle}>
        <div className="modal-dialog-div" style={dialogStyle}>
          {this.props.children}
        </div>
      </div>
    </div>
  );

}
