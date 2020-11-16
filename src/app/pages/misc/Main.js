import * as React from 'react'
import { useEffect } from 'react'

import { Text, Box, useApp, useStdout } from 'ink'

import * as figures from 'figures'

import { 
  Page,
  ColorSelectInput,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const Main = (props) => {

  const history = useHistory()

  const {write} = useStdout()

  useEffect(() => {
    write('\n') //This is require bc on return from the picture the menu doesn't load otherwise
  }, [])

  const { 
    color,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'See picture',
      value:'/picture'
    },
    {
      label:'Change colors',
      value:'/colors'
    },
    {
      label:'Source',
      value:'/source'
    },
    {
      label:`${figures.arrowLeft} Never mind. (Return to main menu)`,
      value:'~'
    }
  ]

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
    <Page
      title='Special Menu'
      titleFont='tiny'
    >
      <Text bold>You've stumbled upon a door where your mind is the key.</Text>
      <ColorSelectInput
        items={ items }
        onSelect={ handleSelect }
      />
    </Page>

  )
}

export default Main
