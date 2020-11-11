
import * as React from 'react'

import { Text, Box, useApp } from 'ink'

import open from 'open'

import * as figures from 'figures'

import { 
  Page,
  ColorSelectInput,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const OSS = (props) => {

  const {exit} = useApp();

  const history = useHistory()

  const { 
    color,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'Tell me more of ...',
      value:'/education'
    },
    {
      label:'Open Swatch in browser (will detect your default web browser)',
      value:'https://swatch.dev'
    },
    {
      label:`${figures.arrowLeft} Return to main menu`,
      value:'~'
    }
  ]

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('http')) {
      open(item.value)
    } else {
      setSettings({
        color:item.value,
        gradient:undefined
      })
    }
    // `item` = { label: 'First', value: 'first' }
  }

  return (
    <Page title='Open Source Projects' titleFont='tiny'
    >
      <Text>Menu.</Text>
      <ColorSelectInput
        items={ items }
        onSelect={ handleSelect }
      />
    </Page>

  )
}

export default OSS
