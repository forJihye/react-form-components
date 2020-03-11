import React, { useState } from 'react'
import Button from './components/Button'
import FormValidation from './components/FormValidation'
import Progress from './components/Progress'

const App = () => {
  const [validated, setValidated] = useState('')
  const handleValidated = () => {
    // setValidated('was-validated')
  }
  
  return <>
    <div className="ripple-button">
      <Button variant="default">button</Button>
      <Button variant="primary">button</Button>
      <Button variant="danger">button</Button>
    </div>

    <div className="form-wrap">
      <FormValidation validated={validated}>
        <Button variant="primary" onClick={handleValidated}>submit</Button>
      </FormValidation>
    </div>

    <div className="progress-wrap">
      <Progress>💨</Progress>
    </div>
  </>
}

export default App