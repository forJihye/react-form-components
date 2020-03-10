import React, { useState, useRef } from 'react';

const SPEED = 600;
let i = 0;

const RippleButton = ({children, onClick}) => {
  const button = useRef(null);
  const [circles, setCircles] = useState([]);

  const clickHandler = ({clientX, clientY}) => {
    onClick?.();
    const {width, left, top} = button.current.getBoundingClientRect();
    
    const circleProperties = {
      key: `button-circle-${i++}`,
      width: width * 2,
      height: width * 2,
      left: clientX - left, 
      top: clientY - top
    };
    
    setCircles(prev => [...prev, circleProperties])
    setTimeout(setCircles, SPEED, prev => prev.slice(1));
  }

  return <button ref={button} className="primary" onClick={clickHandler}>
    {children}
    {circles.map(({key, ...styleProperties}) => 
      <span key={key} className="button-circle" style={styleProperties}></span>
    )}
  </button>;
};

export default RippleButton;