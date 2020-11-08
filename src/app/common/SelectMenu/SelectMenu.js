import * as React from 'react'

import SelectInput from 'ink-select-input'

import { useHistory } from '../Router'

const SelectMenu = () => {
  
  const history = useHistory()

  const handleSelect = item => {
    history.push(item.value)
    // `item` = { label: 'First', value: 'first' }
  }

  const items = [
    {
      label:'Go to HeyThere',
      value:'/heythere'
    },
    {
      label:'Go Home',
      value:'/home'
    },
    {
      label:'Professional Experience',
      value:'/experience'
    },
    {
      label:'See picture',
      value:'/picture'
    }
  ]

  return <SelectInput
    items={items}
    onSelect={handleSelect}
         />
}

export default SelectMenu
