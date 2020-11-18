import * as React from 'react'
import { useEffect } from 'react'

import { Newline, Text, Box, useApp, useStdout } from 'ink'

import * as figures from 'figures'

import open from 'open'

import BigText from 'ink-big-text'
import Link from 'ink-link'
import Gradient from 'ink-gradient'

import { 
  Page,
  ColoredText,
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
    gradient,
    version,
    name,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'A magician never reveal its... (opens github source in default browser)',
      value:'https://github.com/advl/adrianv.sh'
    },
    {
      label:`${figures.arrowLeft} Thanks, this was very informative (returns to hidden menu)`,
      value:'~1'
    },
    {
      label:`${figures.arrowLeft} I already knew all of this anyway (returns to hidden menu)`,
      value:'~2'
    }
  ]

  const handleSelect = item => {
    if (item.value.startsWith('/')) {
      history.push(item.value)
    } else if (item.value.startsWith('http')) {
      open(item.value)
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

  const title = `${name} ${version}`

  return (
    <Page >
      <Box
        width={120}
        justifyContent='center'
        key={ 'title' }
      >
        { gradient ?
          <Gradient name={ gradient }>
            <BigText
              font={ 'simple' }
              text={ title }
            />
          </Gradient> :
          <BigText
            font={ 'simple' }
            text={ title }
            colors={[color, 'gray']}
          />
        }
      </Box>
      <Box
        width={120}
        padding={ 3 }
        justifyContent='center'
        key={ 'source' }
      >
        <ColoredText bold>~~~ source ~~~</ColoredText>
      </Box>
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 120 }
      >
        <Box
          marginRight={1}
          width={5}
        >
          <ColoredText>1.</ColoredText>
        </Box>
        <Text>
          <Text bold>This CLI is made with React (!).</Text>
          <Newline/>
            In particular, this application is using
          {' '}
          <Link url='https://github.com/vadimdemedes/ink'>
            <ColoredText>
                vadimdemedes/ink
            </ColoredText>
          </Link>
          {' '}
            as React renderer for the terminal.
          <Newline/>
            NB :You could also be using
          {' '}
          <Link url='https://github.com/Yomguithereal/react-blessed'>
            <ColoredText>
                Yomguithereal/react-blessed
            </ColoredText>
          </Link>
          {' '}
to make React apps in the terminal (≠ CLI).
        </Text>
      </Box>
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 120 }
      >
        <Box
          marginRight={1}
          width={5}
        >
          <ColoredText>2.</ColoredText>
        </Box>
        <Text>
          <Text bold>
Compilation :
            {' '}
          </Text>
            This program uses standard ESM JS/JSX transpiled using Babel and Webpack, with some minor adaptations for the terminal.
          <Newline/>
            For instance, Webpack compiles the React app directly for 
          {' '}
          <Text underline>env:'node'</Text>
. All the world of back-end node npm packages can be used in this sort of application.
        </Text>
      </Box>
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 120 }
      >
        <Box
          marginRight={1}
          width={5}
        >
          <ColoredText>3.</ColoredText>
        </Box>
        <Text>
          <Text>
            <Text bold>
A few tricks :
              {' '}
            </Text>
            I've also figured out that ASCII pictures can be imported using 
            <ColoredText>
              {`
  ['babel-plugin-inline-import',
  {
    extensions:[
      '.txt',
    ]
  }
],
            `}
            </ColoredText>
^ provided your ASCII picture is .txt.
            <Newline/>
            Another trick, to mirror the 
            {' '}
            {'<pre>'}
            {' '}
tag, a JS template literal should be used.
            <Newline/>
            A special thanks to 
            {' '}
            <Link url='https://github.com/sindresorhus'>
              <ColoredText>
            @sindresorhus
              </ColoredText>
            </Link>
            {' '}
for his OSS work, in particular his ink components, such as `ink-big-text`, `ink-link`, `ink-gradient`.
            <Newline/>
            PRedictably, url-based navigation can be emulated in the terminal using
            <Newline count={ 1 }/>
            <ColoredText>
              {"import { MemoryRouter } from 'react-router'"}
            </ColoredText>
            <Newline count={1}/>
            and the related react-router components.
            <Newline/>
            Last but not least, I get some anonymous data from your visit using Google Analytics. Look at the source code if you're curious to see how it's done !
          </Text>

        </Text>
      </Box>
      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 120 }
      >
        <Box
          marginRight={1}
          width={5}
        >
          <ColoredText>4.</ColoredText>
        </Box>
        <Text>
          If you enjoyed your stay here :
          <Newline/>
          don't forget to
          {' '}
          <Text bold>
            <Link url="https://github.com/advl/adrianv.sh">
              <ColoredText>
            leave a star on GitHub
              </ColoredText>
            </Link>
          </Text>
          {' '}
and feel free to fork this project to modify the source code in the way you see fit.
          
        </Text>
      </Box>
      <Box
        width={120}
        padding={ 3 }
        justifyContent='center'
        key={ 'thanks' }
      >
        <ColoredText bold>
~~~ Thank you for browsing
          {' '}
          {packageInfo.name}
          {' '}
~~~
        </ColoredText>
      </Box>
      <ColorSelectInput
        items={ items }
        onSelect={ handleSelect }
      />
    </Page>

  )
}

export default Main
