import React, { useContext } from 'react'
import CheckoutFormContext from '../../context/CheckoutFormContext'

const InputField = ({ name, label, children }) => {
  const formValues = useContext(CheckoutFormContext)
  const { isValid } = formValues[name] || {}
  return (
    <div className={`input-field ${!!formValues[name].value && !isValid && 'input-field--error'}`}>
      <label htmlFor={name}>{label}</label>
      {children}
      {formValues[name].value && !isValid && <span class="message-error">Campo inválido</span>}
    </div>
  )
}

export default InputField
