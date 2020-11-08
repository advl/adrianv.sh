import * as React from 'react'

import SelectInput from 'ink-select-input'

import { useHistory } from 'react-router'

const SelectMenu = () => {
  
  const history = useHistory()

  const handleSelect = item => {
    if (item.value.startsWith('$')) {
      history.goBack()
    } else {
      history.push(item.value)
    }
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
    },
    {
      label:'Go Back 1 Page',
      value:'$goback'
    }
  ]

  return <SelectInput
    items={items}
    onSelect={handleSelect}
         />
}

export default SelectMenu
