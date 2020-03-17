import React, { createContext, useState } from 'react'

const FormContext = createContext()

export const FormProvider = props => {
  const [state, setState] = useState({})
  const value = {
    state,
    setState: data => setState(Object.assign(state, data))
  }
  
  return <>
    <FormContext.Provider
      {...props}
      value={value}
    ></FormContext.Provider>
  </>
}

export const withFormContext = WrappedComponent => props => {
  return <>
    <FormContext.Consumer>
      {
        ({state, setState}) => {
          const validate = props.validate
          ? (value) => {
            const result = props.validate(value)
            setState({[props.name]: result})
            console.log(state)
            return state
          }
          : () => true

          return <WrappedComponent 
            {...props}
            validate={validate} 
          ></WrappedComponent>
        }
      }
    </FormContext.Consumer>
  </>
}