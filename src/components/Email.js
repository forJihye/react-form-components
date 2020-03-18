import React, { useState } from 'react'

const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const EmailInput = () => {
  const [invalid, setInvalid] = useState(false)

  const handleBlur = (ev) => {
    REGEX_EMAIL.test(ev.target.value) ? setInvalid(false) : setInvalid(true) 
  }
  
  return <>
    <label htmlFor="email">이메일</label>
    <input 
      type="text" 
      id="email" 
      name="email" 
      className="form-control" 
      placeholder="이메일" 
      autoComplete="off" 
      required
      onBlur={handleBlur}
    />
    {invalid && <div className="invalid-feedback feedback">이메일을 정확하게 입력해주세요.</div>}
  </> 
}

export default EmailInput