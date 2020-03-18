import React, { useState } from 'react'


const PhoneInput = () => {
  const [invalid, setInvalid] = useState(false)
  
  const handleKeyUp = (ev) => {
    // '1234567890'.indexOf(ev.key) === -1 && ev.preventDefault()

    // const REGEX_NUMBER = /^[0-9\b]+$/
    // REGEX_NUMBER.test(ev.key) === false && ev.preventDefault()

    ev.target.value = ev.target.value.replace(/[^0-9\b]*/g, '') 
  }
  
  const handleBlur = (ev) => {
    ev.target.value.length < 11 ? setInvalid(true) : setInvalid(false)
  }
  
  return <>
    <label htmlFor="phone">연락처</label>
    <input 
      type="text" 
      id="phone" 
      name="phone" 
      className="form-control" 
      placeholder="연락처" 
      autoComplete="off" 
      maxLength="11"
      required 
      onKeyUp={handleKeyUp}
      onBlur={handleBlur}
    />
    {invalid && <div className="invalid-feedback feedback">연락처 번호를 정확하게 입력해주세요.</div>}
  </>
}

export default PhoneInput