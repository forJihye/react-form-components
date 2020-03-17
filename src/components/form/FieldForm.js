import React, { useState } from 'react'
import Button from '../Button'

const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const RenderField = ({type, label, name, onBlur, feedback}) => {
  const [invaild, setInvaild] = useState(false)
  return <>
    <div style={{marginBottom: '20px'}}>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        placeholder={label} 
        className="form-control"
        // onBlur={(ev) => onBlur(ev) ? setInvaild(true) : setInvaild(false)}
        onBlur={(ev) => setInvaild(onBlur(ev))}
      /> 
      {invaild && <div className="feedback">{feedback}</div>}
    </div>
  </>
}

const FieldForm = ({}) => {
  const emailInvalid = ev => !REGEX_EMAIL.test(ev.target.value)
  const valueInvalid = ev => ev.target.value === ''

  return <>
    <form>
      <RenderField 
        name="email" 
        type="text" 
        label="이메일"
        feedback="이메일 주소를 정확하게 입력하세요."
        onBlur={emailInvalid}
      ></RenderField>
      <RenderField 
        name="name" 
        type="text" 
        label="이름"
        feedback="이름을 입력하세요."
        onBlur={valueInvalid}
      ></RenderField>
      <RenderField 
        name="phone" 
        type="tel" 
        label="연락처"
        feedback="연락처를 입력하세요."
        onBlur={valueInvalid}
      ></RenderField>
    </form>

    <div className="ripple-button" style={{marginBottom: '0'}}>
      <Button 
        type="submit"
        variant="primary" 
      >제출</Button>
    </div>
  </>
}

export default FieldForm