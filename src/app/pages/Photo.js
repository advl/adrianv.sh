import * as React from 'react'

import { Text, Box, useApp, useInput, Newline } from 'ink'
import { Picture, ColoredText } from 'app/common'

import * as figures from 'figures'

import { 
  Page,
  ColorSelectInput,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const Photo = (props) => {

  const history = useHistory()

  const { 
    color,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'Wait... what ?',
      value:'/picture'
    },
    {
      label:`${figures.arrowLeft} I've seen enough. (Return to hidden menu)`,
      value:'~'
    }
  ]

  useInput((input, key) => {
    if (key.return) {
      history.goBack()
      // Exit program
    }

  })

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('~')) {
      history.goBack()
    } else {
      setSettings({
        color   :item.value,
        gradient:undefined
      })
    }
    // `item` = { label: 'First', value: 'first' }
  }

  return (
    <Page >
      <Picture/>
      <Text>
~~ Your humble servant circa 1996 ~~
        <Newline/>
      </Text>

      <ColoredText bold>You've seen enough. Press [ENTER] to go back to the hidden menu.</ColoredText>
      {/*}
      <ColorSelectInput
        items={ items }
        onSelect={ handleSelect }
      />*/}
    </Page>

  )
}

export default Photo
