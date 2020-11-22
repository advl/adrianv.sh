import * as React from 'react'

import { Newline, Text, Box, useApp } from 'ink'

import * as figures from 'figures'

import { 
  Page,
  ColorSelectInput,
  ColoredText,
  ColoredTitle,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

import BigText from 'ink-big-text'
import Link from 'ink-link'
import Gradient from 'ink-gradient'

const Home = (props) => {

  const {exit} = useApp()

  const history = useHistory()

  const { 
    color,
    gradient,
    version,
    name,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'Work Experience',
      value:'/experience'
    },
    {
      label:'Education',
      value:'/education'
    },
    /*
    {
      label:'Open Source Projects',
      value:'/oss'
    },*/
    {
      label:'Hire me',
      value:'/hire'
    },
    {
      label:'Contact',
      value:'/contact'
    },
    {
      label:'Download PDF Resume',
      value:'/downloadresume'
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
        color   :item.value,
        gradient:undefined
      })
    }
    // `item` = { label: 'First', value: 'first' }
  }

  const title = `${name} ${version}`

  return (
    <Page >

      <Box
        width={90}
        paddingTop={ 2 }
        justifyContent='center'
        key={ 'source' }
      >
        <ColoredText bold>{ title }</ColoredText>
      </Box>
      <Box
        width={90}
        justifyContent='center'
        key={ 'title' }
      >
        <ColoredTitle
          font='simpleBlock'
        >
Welcome
        </ColoredTitle>
      </Box>
      
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 90 }
      >
        <Text>
          <Text bold>Hello, my name is Adrian.</Text>
          <Newline count={2}/>
          I am a full-stack web architect and I'm currently looking to join an innovative, impactful new project.
          {' '}
          <Text bold>
          In other words, I am looking for a new job. 
          </Text>
          <Newline count={2}/>
          The terminal is my favourite digital tool, so I made this experimental little program in a couple days, as an creative way to introduce myself, to present my experience and work in an interactive fashion.
          <Newline count={2}/>
          <Newline/>
          Also, you can download a more classic, PDF version of my resume, in both A4 and Letter format,  under the
          {' '}
          <ColoredText italic>
            {'Download PDF Resume'}
          </ColoredText>
          {' '}
menu entry.
          <Newline count={2} />
          <Text
            color='yellow'
            bold
          >
            { figures.warning }
            {' '}
Please consider this program experimental. While I have thoroughly tested it in my st/zsh terminal and the default ttys of my Linux machine, some terminals might fail to render some sections of it, and/or quit unexpectedly. Also, I recommend you run this program in a fullscreen terminal. Some parts of it might break if you're running this in a tiny window.
          </Text>
          <Newline count={2}/>
          If you like it here, if you would like to get in touch and maybe discuss an employment offer with me, you can send me an email at
          {' '}
          <ColoredText bold>
            adrian@779.mx
          </ColoredText>
          {'. '}
Also, you can find more detailed Contact information under the
          {' '}
          <ColoredText italic>
            {'Contact'}
          </ColoredText>
          {' '}
section of the program.
          <Newline count={2}/>
          <Text>I hope you enjoy your quirky, glitchy stay here. </Text>
          <Newline count={2}/>
          <Text bold>Thank you for hanging around and for taking the time to read me !</Text>
          <Newline/>
        </Text>
      </Box>
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginTop={1}
        marginBottom={1}
        width={ 80 }
      >
        <Box marginRight='3'>
          <Text
            bold
            underline
          >
Main Menu.
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

export default Home
