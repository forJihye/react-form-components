import React, { useState, useEffect } from 'react'
import { withFormContext } from './FormContext'

const Send = ({validation}) => {
  const [state, setState] = useState()
  useEffect(() => {
    setState(validation)
  }, [])

  const handleSend = () => {
    for(const field in state) {
      typeof state[field] === 'function' && state[field](true)
    }
  }
  return <button onClick={handleSend}>Send</button>
}

export default withFormContext(Send)