import React, { useState, useRef } from 'react'

let i = 0

const Circle = ({style}) => {
  return <span className="button-circle" style={style}></span>
} 

const Button = ({children, variant, onClick}) => {
  const [circles, setCircles] = useState([])
  const button = useRef(null)

  const handleClick = ({clientX, clientY}) => {
    const {width, top, left} = button.current.getBoundingClientRect()
    
    const circleSize = Math.floor(width * 2)
    const x = clientX - left - (circleSize/2)
    const y = clientY - top - (circleSize/2)

    const circleStyle = { 
      width: circleSize+'px', 
      height: circleSize+'px', 
      top: y, 
      left: x 
    }
    
    setCircles(prev => [...prev, {count: ++i, style: circleStyle}])
    setTimeout(setCircles, 500, prev => prev.slice(1))
    
    if(typeof onClick === 'function') onClick()
  }

  return <>
    <button ref={button} onClick={handleClick} className={variant}>
      {children}
      {circles.map(({count, style}) => <Circle key={`button-circle-${count}`} style={style}></Circle>)}
    </button>
  </>
}

export default Button