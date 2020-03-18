import React from 'react'

export default () => {
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

  const Radio = ({name, value, label}) => {
    return <>
      <label>
        <input type="radio" name={name} id={value} value={value}  />
        {label}
      </label>
    </>
  }

  const RadioGroup = ({children, legend, feedback, invalid}) => {
    return <div className="form-group">
      <span className="label">{legend}</span>
      {children}
      {invalid &&  <div className="feedback">{feedback}</div>}
    </div>
  }

  const Checkbox = ({label, name, value, feedback, validate, invalid, setInvalid}) => {
    return <div className="form-group">
      <label style={{width: '100%'}}>
        <input 
          type="checkbox" 
          name={name}
          id={name}
          value={value}
          onChange={({target}) => setInvalid(!validate(target))}  />
        {label}
      </label>
      {invalid &&  <div className="feedback">{feedback}</div>}
      {/* ({target}) => console.log(target.checked) */}
    </div>
  }

  return {Input, Radio, RadioGroup, Checkbox}
}

