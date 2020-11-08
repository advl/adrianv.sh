import React from 'react'
import {useStdout } from 'ink'
import SelectInput from 'ink-select-input'

export default () => {
  	const {write} = useStdout()

  const handleSelect = item => {
    // `item` = { label: 'First', value: 'first' }
    write('Hello from Ink to stdout\n', JSON.stringify(item))
  }

  const items = [
    {
      label:'First',
      value:'first'
    },
    {
      label:'Second',
      value:'second'
    },
    {
      label:'Third',
      value:'third'
    }
  ]

  return <SelectInput
    items={items}
    onSelect={handleSelect}
         />
}
