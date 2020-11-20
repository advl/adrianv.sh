import * as React from 'react'
import { useState } from 'react'

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

const Main = (props) => {

  const history = useHistory()

  const [ displayFAQ0, setDisplayFAQ0 ] = useState(false)

  const displayFaqs = [setDisplayFAQ0] 

  const { 
    color,
    setSettings
  } = useSettings()

  const items = !displayFAQ0 ? [
    {
      label:'[FAQ] But you didnt\'t study computer science ! How did you learn programming ? Are you a real programmer anyway ?',
      value:'faq:0'
    }

  ] : []

  items.push(
    {
      label:'What\'s your work experience ?',
      value:'/experience'
    },
    {
      label:'What are your technical skills ?',
      value:'/hire'
    },
    {
      label:`${figures.arrowLeft} Return to main menu`,
      value:'/'
    }
  )

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('faq')) {
      const index = Number(item.value.replace('faq:', ''))
      displayFaqs[index](true)

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
    <Page title='Education'>
      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <ColoredText bold>
          In this section you will find my education history.
        </ColoredText>
        
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 105 }
      >
        <Box
          marginRight={1}
          width={12}

        >
          <ColoredText>2013 - 2018</ColoredText>
        </Box>
        <Box flexGrow={1}>
          <Text underline>MSc. in Management, Grande Ecole Program</Text>
        </Box>
        <Box
          marginLeft={1}
          width={45}
          justifyContent={ 'flex-end' }

        >
          <Text bold>HEC Paris, France</Text>
        </Box>
      </Box>
      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          World's second best Master in Management according to Financial Times.
          <Newline count={2}/>
Courses in : Management, Accounting, Corporate Finance, Financial Markets, Supply Chain, Entrepreneurship, Social Entrepreneurship.
          <Newline count={2}/>
          Thesis 
          {' '}
          <Text italic>Cum Laude</Text>
          {' '}
(8.7/10) on the topic 
          {' '}
          <ColoredText>“In the light of Monetary Theory and History, can Blockchain-based currencies be considered currencies?”.</ColoredText>
        </Text>
        
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 105 }
      >
        <Box
          marginRight={1}
          width={12}

        >
          <ColoredText>2017 - 2018</ColoredText>
        </Box>
        <Box flexGrow={1}>
          <Text underline>MSc. in Innovation and Entrepreneurship</Text>
        </Box>
        <Box
          marginLeft={1}
          width={45}
          justifyContent={ 'flex-end' }

        >
          <Text bold>ESADE Barcelona, Spain</Text>
        </Box>
      </Box>
      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          Dual Degree with HEC Paris' diploma.
          <Newline count={1}/>
Courses on management of innovative entreprises with a focus on in-company learning.
        </Text>
        
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 105 }
      >
        <Box
          marginRight={1}
          width={12}

        >
          <ColoredText>2017 - 2018</ColoredText>
        </Box>
        <Box flexGrow={1}>
          <Text underline>Stanford Summer International Honors Program</Text>
        </Box>
        <Box
          marginLeft={1}
          width={45}
          justifyContent={ 'flex-end' }

        >
          <Text bold>Stanford University, California</Text>
        </Box>
      </Box>

      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          Design and Analysis of Algorithms (CS161),
          <Newline count={1}/>
Data Mining and Extraction (STATS202)
        </Text>
        
      </Box>
      {displayFAQ0 &&
      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          <Text bold>
      [FAQ] But you didnt't study computer science ! How did you learn programming ? Are you a real programmer anyway ?
          </Text>
          <Newline count={2}/>
          I am a self-taught progremmer. I started programming for the web at age 7, in 1999. I used Microsoft Front Page, which was included in Microsoft Office at that time. 
          <Newline count={2}/>
          At age 12, I was an editor on yazerty.net, on the DotClear platform, with more than 2k daily visitors. I started teenage-blogging at age 14 on Wordpress, and while I don't really take pride in my writing, this made me be in the first loop of the news cycle, be in the first wave to understand the tech and its evolutions.
          <Newline count={2}/>
          I created my first Twitter account in 2007 (which I deleted shortly thereafter for it being, in my eyes, shallow and unnecessarily competitive). I much preferred exchanging ideas and opinions on Pownce, which sadly died long ago.
          <Newline count={2}/>
          At that time I used the Macromedia Dreamweaver workhose (anyone ?) to achieve my theming and customization goals. I slowly got more familiar with the workings of the DOM, PHP, MySQL, and jQuery through a lot of Wordpress theming. 
          <Newline count={2}/
          >
          I didn't program much until I got to business school in 2013 (see
          {' '}
          <ColoredText>
          Work Experience
          </ColoredText>
          {' '}
          section), when I decided to update my coding skills. I started working with UNIX system and POSIX terminals, using Debian and Django, Postgres for back-end systems while doing the coding in SublimeText+Plugins.
          <Newline count={2}/>
          Next thing I know, I left the possbility of becoming a public servant for the Mexican Government and to start coding again. This time I went for the modern React/GraphQL/Serverless stack and here we are !
        </Text>
        
      </Box>}

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

export default Main
