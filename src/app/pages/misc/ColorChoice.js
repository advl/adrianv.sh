import * as React from 'react'

import { useMemo } from 'react'

import { Text, Box } from 'ink'

import { 
  Page,
  ColorSelectInput,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

import { shuffleArray } from 'utils'

import * as figures from 'figures'

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

  const colorItems = useMemo(() => {
    const allColors = [
      {
        label:'Blue',
        value:'blue'
      },
      {
        label:'Green',
        value:'green'
      },
      {
        label:'Red',
        value:'red'
      },
      { 
        label:'Yellow',
        value:'yellow'
      },
      { 
        label:'Magenta',
        value:'magenta'
      },
      { 
        label:'Cyan',
        value:'cyan'
      },
    ]
    return shuffleArray(allColors).slice(0,3).sort((a, b) => {
      const currentColor = a.value === color
      return !currentColor ? a : b
    })

  }, [])
  
  const items = [
    ...colorItems,
    { 
      label:'(ง ͡ʘ ͜ʖ ͡ʘ)ง Special Premium └(=^‥^=)┐',
      value:'^'
    },
    {
      label:`${figures.arrowLeft} Ok, good to go. (Return to hidden menu).`,
      value:'~'
    }
  ]

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('~')) {
      history.goBack()
    } else if (item.value.startsWith('^')) {
      setSettings({
        color   :undefined,
        gradient:gradients[Math.floor(Math.random() * gradients.length)]
      })
    } else {
      setSettings({
        color   :item.value,
        gradient:undefined
      })
    }
    // `item` = { label: 'First', value: 'first' }
  }

  return (
    <Page
      title='colors'
      titleFont='block'
    >
      <Text>Please choose your favourite color.</Text>
      <ColorSelectInput
        items={ items }
        onSelect={ handleSelect }
      />
    </Page>

  )
}

export default ColorChoice
