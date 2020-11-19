import * as React from 'react'

import { Text, Newline, Box, useApp } from 'ink'

import open from 'open'

import * as figures from 'figures'

import Link from 'ink-link'

import { 
  Page,
  ColoredTitle,
  ColoredText,
  ColorSelectInput,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const Contact = (props) => {

  const {exit} = useApp()

  const history = useHistory()

  const { 
    color,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'Open my Github in default browser.',
      value:'https://github.com/advl'
    },
    {
      label:'Send me an email (opens mail client though default browser)',
      value:'mailto:adrian@779.mx?subject=Contact from the terminal'
    },
    {
      label:'Open LinkedIn profile in default browser.',
      value:'https://linkedin.com/in/villaadrian'
    },
    {
      label:'Dowload my resume',
      value:'/downloadresume'
    },
    {
      label:`${figures.arrowLeft} Noted, thanks ! (Return to the Main Menu)`,
      value:'/'
    }
  ]

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('http') || item.value.startsWith('mailto')) {
      open(item.value)
    } else if (item.value.startsWith('~')) {
      history.goBack()
    } else {
    }
    // `item` = { label: 'First', value: 'first' }
  }

  return (
    <Page>
      <Box
        width={90}
        justifyContent='center'
        key={ 'title' }
      >
        <ColoredTitle font='simpleBlock'>
          Contact
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
        Here are a few ways you can reach out to me.
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 90 }
      >
        <Box
          marginRight={1}
          width={10}
        >
          <ColoredText>✉ E-Mail</ColoredText>
        </Box>
        <Text bold>
          adrian@779.mx
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        width={ 90 }
      >
        <Box
          marginRight={1}
          width={10}
        >
          <ColoredText>GitHub</ColoredText>
        </Box>
        <Box
          alignItems="flex-start"
        >
          <Box
            marginRight={1}
            width={10}
          >
            <Text bold>Personal</Text>
          </Box>
          <Text>
            <Link url='https://github.com/advl'>
              <ColoredText>
            @advl
              </ColoredText>
            </Link>
          </Text>
        </Box>
      </Box>
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 90 }
      >
        <Box
          marginRight={1}
          width={10}
        >
        </Box>
        <Box
          alignItems="flex-start"
          marginBottom={1}
        >
          <Box
            marginRight={1}
            width={10}
          >
            <Text bold>OSS</Text>
          </Box>
          <Text>
            <Link url='https://github.com/fwrlines'>
              <ColoredText>
            @fwrlines
              </ColoredText>
            </Link>
          </Text>
        </Box>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 90 }
      >
        <Box
          marginRight={1}
          width={10}
        >
          <ColoredText>LinkedIn</ColoredText>
        </Box>
        <Text bold>
          
          <Link url='https://linkedin.com/in/villaadrian'>
            villaadrian
          </Link>
        </Text>
      </Box>

      {/*
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 90 }
      >
        <Box
          marginRight={1}
          width={10}
        >
          <ColoredText>☎ Signal</ColoredText>
        </Box>
        <Text bold>
          +33 6 60 00 00 00
        </Text>
        </Box>*/}

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

export default Contact
