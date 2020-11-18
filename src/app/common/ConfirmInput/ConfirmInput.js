import * as React from 'react'
import { useEffect, useState, useCallback } from 'react'
import { Text } from 'ink'
import TextInput from 'ink-text-input'

const getValue = (initialValue) => {
  const newValue = initialValue?.split("").reverse().join("")
  const indexOfValue = newValue?.search(/[ny]/i)
  return (indexOfValue > -1) ? newValue[indexOfValue] : ''
}

const ConfirmInput = ({
  value,
  defaultValue,
  onChange,
  onSubmit,

}) => {

  const [textValue, setTextValue] = useState('')
  const [booleanValue, setBooleanValue] = useState(defaultValue)

  const setValue = useCallback((value) => {
    const inputValue = getValue(value)
    setTextValue(inputValue)
    const processedValue = inputValue?.toLowerCase()
    const finalValue = processedValue ? 
      (processedValue === 'y') ? 
        true : false : defaultValue
    setBooleanValue(finalValue)
    onChange?.(finalValue)
  }, [])

  useEffect(() => {
    if (value !== booleanValue) {
      (value === true ) && setValue('Y')
      (value === false ) && setValue('n')
    }
  }, [value, setValue]
  )


  const submitInput = useCallback(value => onSubmit?.(booleanValue)
    ,[]
  )

  return (
    <TextInput
      value={ textValue }
      onChange={ setValue }
      onSubmit={ submitInput }
    />

  )

}

ConfirmInput.defaultProps = {
  defaultValue:false
}

export default ConfirmInput
