
import * as React from 'react'

import { Text, Box, useApp } from 'ink'

import * as figures from 'figures'

import { 
  Page,
  ColorSelectInput,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const Home = (props) => {

  const {exit} = useApp();

  const history = useHistory()

  const { 
    color,
    setSettings
  } = useSettings()

  const items = [
    {
      label: 'Experience',
      value:'/experience'
    },
    {
      label:'Education',
      value:'/education'
    },
    {
      label:'Open Source Projects',
      value:'/oss'
    },
    {
      label:`${figures.warning} Do not select this`,
      value:'/misc'
    },
    {
      label:'Exit application',
      value:'quit'
    }
  ]

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value === 'quit') {
      exit()
    } else {
      setSettings({
        color:item.value,
        gradient:undefined
      })
    }
    // `item` = { label: 'First', value: 'first' }
  }

  return (
    <Page title='Welcome' //titleFont='block'
    >
      <Text>Menu.</Text>
      <ColorSelectInput
        items={ items }
        onSelect={ handleSelect }
      />
    </Page>

  )
}

export default Home
