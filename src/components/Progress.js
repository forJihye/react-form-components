import React, { useState } from 'react'

const sleep = (ms) => new Promise(res => setTimeout(res, ms))

const Spin = () => {
  return <>
    <div className="progress-spin">
    <svg viewBox="22 22 44 44"><circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>
    </div>
  </>
}

const Progress = ({children}) => {
  const [visible, setVisible] = useState(false)
  const [complete, setComplete] = useState('')

  const handleClick = () => {
    setVisible(true)
    setComplete('')
    
    setTimeout(() => {
      setVisible(false)
      setComplete('progress-complete')
    }, 3500)
  }
  return <>
    <div className="progress">
      <button 
        className={`progress-button ${complete}`}
        onClick={handleClick}
      >{children}</button>
      {visible && <Spin></Spin>}
    </div>
  </>
}

export default Progress