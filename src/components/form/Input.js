import React, { useState } from 'react'
import { withFormContext } from './FormContext'

const Input = ({name, label, type, feedback, validate}) => {
  const [invalid, setInvalid] = useState(false)
  return <div style={{marginBottom: '20px'}}>
    <label htmlFor={name}>{label}</label>
    <input 
      type={type}
      name={name}
      id={name}
      placeholder={label}
      onBlur={({target}) => setInvalid(!validate(target.value))}
      className="form-control"
      autoComplete="off"
    />
    {invalid && <div className="feedback">{feedback}</div>}
  </div>
}

export default withFormContext(Input)