import React, { useState } from 'react'
// import Button from './components/Button'
// import FormValidation from './components/FormValidation'
// import Progress from './components/Progress'
// import FieldForm from './components/form/FieldForm'
import Input from './components/form/Input'
import Button from './components/form/Button'
import { FormProvider } from './components/form/FormContext'

const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const App = () => {
  // const [validated, setValidated] = useState('')
  // const handleValidated = () => {
  //   setValidated('was-validated')
  // }

  return <>
    <FormProvider>
      <div className="form-wrap">
        <Input
          type="text"
          name="name"
          label="이름"
          validate={(value) => Boolean(value.length)}
          feedback="이름을 입력하세요"
        ></Input>
        <Input
          type="text"
          name="email"
          label="이메일"
          validate={(value) => REGEX_EMAIL.test(value)}
          feedback="이메일을 입력하세요"
        ></Input>
        <Input
          type="text"
          name="phone"
          label="휴대폰 번호"
          validate={(value) => Boolean(value.length)}
          feedback="휴대폰 번호을 입력하세요"
        ></Input>
      </div>
      <Button formSand={() => console.log('hi')}></Button>
    </FormProvider>
    {/* <div className="form-wrap">
      <FieldForm></FieldForm>
    </div>
    <div className="ripple-button">
      <Button variant="default">button</Button>
      <Button variant="primary">button</Button>
      <Button variant="danger">button</Button>
    </div>
    <div className="progress-wrap">
      <Progress>💨</Progress>
    </div>
    <div className="form-wrap">
      <FormValidation validated={validated}>
        <Button variant="primary" onClick={handleValidated}>submit</Button>
      </FormValidation>
    </div> */}
  </>
}

export default App