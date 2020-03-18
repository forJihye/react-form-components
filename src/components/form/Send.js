import React, { useState, useEffect } from 'react'
import { withFormContext } from './FormContext'

const style = {
  padding: '12px 30px',
}
const Send = ({validation, onSubmit}) => {
  const [state, setState] = useState()
  useEffect(() => {
    setState(validation)
  }, [])

  const handleSend = (ev) => {
    ev.preventDefault()
    
    for(const field in state) {
      typeof state[field] === 'function' && state[field](true)
    }
    const complete = Object.values(state).every(value => value === true)
    complete === true && onSubmit()
  }
  return <button type="submit" style={style} onClick={handleSend}>Send</button>
}

export default withFormContext(Send)


