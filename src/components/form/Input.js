import React from 'react'
import { withFormContext } from './FormContext'

const Input = ({type, name, label, feedback, validate, invalid, setInvalid}) => {
  return <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input 
      type={type} 
      name={name} 
      placeholder={label} 
      onBlur={({target}) => setInvalid(!validate(target.value))}
      autoComplete="off" 
      className="form-control"
    />
    {invalid && <div className="feedback">{feedback}</div>}
  </div>
}

export default withFormContext(Input)