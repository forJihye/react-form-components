import React, { createContext, useState } from 'react'

const FormContext = createContext()

export const FormProvider = props => {
  const [validation, setValidation] = useState({})
  const value = {
    validation,
    setValidation: data => setValidation(Object.assign(validation, data))
  }
  return <FormContext.Provider {...props} value={value} />
}

export const withFormContext = WrappedComponents => props => {
  const [invalid, setInvalid] = useState(false)
  return (
    <FormContext.Consumer>
      {
        ({validation, setValidation}) => {
          const validate = props.validate 
          ? (value) => {
              const state = props.validate(value)
              setValidation({[props.name]: state ? state : setInvalid})
              
              return state
            }
          : () => true

          !(props.name in validation) && validate('')

          return <WrappedComponents 
            {...props} 
            validate={validate} 
            invalid={invalid} 
            setInvalid={setInvalid} 
            validation={validation} 
          />
        }
      }
    </FormContext.Consumer>
  )
}