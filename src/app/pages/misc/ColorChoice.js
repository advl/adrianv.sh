import * as React from 'react'

import { Text, Box } from 'ink'

import { 
  Page,
  ColorSelectInput,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const ColorChoice = (props) => {

  const history = useHistory()

  const { 
    color,
    setSettings
  } = useSettings()

  const gradients = [
    'teen',
    'mind',
    'vice',
    'morning',
    'atlas',
    'retro',
    'summer',
    'rainbow',
    'passion'
  ]
  
  const items = [
    {
      label:'Green',
      value:'green'
    },
    {
      label:'Red',
      value:'red'
    },
    {
      label:'Blue',
      value:'blue'
    },
    { 
      label:'Yellow',
      value:'yellow'
    },
    { 
      label:'(ง ͡ʘ ͜ʖ ͡ʘ)ง Special Premium └(=^‥^=)┐',
      value:'^'
    },
    {
      label:'Ok, good to go !',
      value:'/'
    }
  ]

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('^')) {
      setSettings({
        color:undefined,
        gradient:gradients[Math.floor(Math.random() * gradients.length)]
      })
    } else {
      setSettings({
        color:item.value,
        gradient:undefined
      })
    }
    // `item` = { label: 'First', value: 'first' }
  }

  return (
    <Page title='colors' titleFont='block'>
      <Text>Please choose your favourite color.</Text>
      <ColorSelectInput
        items={ items }
        onSelect={ handleSelect }
      />
    </Page>

  )
}

export default ColorChoice
