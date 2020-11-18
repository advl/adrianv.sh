import * as React from 'react'

import { Text, Box, useApp } from 'ink'

import open from 'open'

import * as figures from 'figures'

import { 
  Page,
  ColorSelectInput,
  ColoredTitle,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const DownloadResume = (props) => {

  const {exit} = useApp()

  const history = useHistory()

  const { 
    color,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'Download Resume in PDF (A4 version)',
      value:'/downloadpdf',
      key  :'a4',
      state:'a4'
    },
    {
      label:'Download Resume in PDF (Letter version)',
      value:'/downloadpdf',
      key  :'letter',
      state:'letter'
    },
    {
      label:'Open Resume for Print in default browser',
      value:'https://resume.adrianv.net'
    },
    {
      label:`${figures.arrowLeft} Return to main menu`,
      value:'/'
    }
  ]

  const handleSelect = item => {
    if (item.value.startsWith('/') && item.state) {
      history.push(item.value, { format: item.state })
    }
    else if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('http')) {
      open(item.value)
    } else if (item.value.startsWith('~')) {
      history.goBack()
    } else {
    }
    // `item` = { label: 'First', value: 'first' }
  }

  return (
    <Page >

      <Box
        width={90}
        justifyContent='center'
        key={ 'title' }
      >
        <ColoredTitle
          font='grid'
        >
          Download Area
        </ColoredTitle>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        marginLeft={11}
        width={ 90 }
      >
        <Text bold>
          If you would like to stack my resume on your desk, a command line interface, however colorful, might not be the best way. On this page, you can :
          
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginTop={1}
        marginBottom={1}
        width={ 80 }
      >
        <Box
          marginRight='3'
          width='10'
        >
          <Text
            bold
            underline
          >
            Options
          </Text>
        </Box>
        <ColorSelectInput
          items={ items }
          onSelect={ handleSelect }
        />
      </Box>
    </Page>

  )
}

export default DownloadResume
