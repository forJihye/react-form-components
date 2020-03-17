import React, { useState } from 'react'
import { withFormContext } from './FormContext'

const Button = ({formSand}) => {
  return <> 
    <button 
      type="submit"
      onClick={() => formSand()}
    >제출</button>
  </>
}

export default withFormContext(Button)