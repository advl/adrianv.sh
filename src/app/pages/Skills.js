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
      label:'Display contact information',
      value:'/contact'
    },
    {
      label:'Dowload a PDF version of my resume',
      value:'/downloadresume'
    },
    {
      label:`${figures.arrowLeft} Maybe another time !`,
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
        alignItems="flex-start"
        paddingX={3}
        marginLeft={25}
        width={ 89 }
      >
        <ColoredTitle font='tiny'>
          Hire me !
        </ColoredTitle>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        marginLeft={25}
        width={ 89 }
      >
        <Text>
          <Text underline>
            I am currently looking for a remote position as a Full-Stack Architect.
          </Text>
          {' '}
(November 2020). I would be honored to join a fast-paced, creative, experienced team, to deliver quality code and contribute to building impactful products.
          <Newline count={2}/>
          I strive on implementing consistent, comprehensive quality practices in my coding, such as SVN, Linting, Testing, Auditing, group code reviews to ensure high quality throughput and delivery in the context of agile product delivery. Also I always keep an eye on the possibility of new patterns and code design principles.
          <Newline count={2}/>
          My workflow : I usually plan ahead and time-budget the work to execute, if working within a tech team I like to apply the agile methodology. While I really appreciate GUI progamming tools, like the SublimeText ecosystem, I do 99% of my work through the terminal. I run 
          {' '}
          <Text italic>Vim</Text>
          {' '}
(
          <Text italic>NeoVim</Text>
          {' '}
          to be precise) in a docker container (so to have all my plugins, my shortcuts, my general setup always ready). I don't program directly on my 
          {' '}
          <Text italic>Arch Linux</Text>
          {' '}
machine (except when I'm offline) but I do my work through an UDP SSH Tunnel (Using 
          {' '}
          <Text italic>Mosh</Text>
          ) on a remote 
          {' '}
          <Text italic>Debian</Text>
          {' '}
VM hosted on GCP. This allows me to leverage 
          {' '}
          <Text italic>Tmux</Text>
          {' '}
session persistence / windows / panes, and to keep all my workspaces open in the state I left them independently of the computer I am typing on (or my iPad). (Also, it makes close to impossible any kind of data loss.) Also, my DotFiles are always in sync with GitHub so that next time I have to install a system, getting my favourite i3/zsh/tmux config to work will be a breeze! 
          <Newline count={2}/>
          Here is a list of the technical skills I would like to bring to your business (without the added bonus of glitchy command line interfaces !).
          <Newline count={2}/>
          If you would like to consider me for a position at your company, you can send me a mail at 
          {' '}
          <ColoredText>adrian@779.mx</ColoredText>
          . You can also find other ways to contact me in the 
          {' '}
          <ColoredText>Contact</ColoredText>
          {' '}
section of this program.

        </Text>

      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>Full-Stack Javascript</ColoredText>
        </Box>
        <Text bold>
          Node, Express, Mocha, Apollo GraphQL (Server / Client), React, Webpack, Babel, ESlint, Storybook
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>Full-Stack Python</ColoredText>
        </Box>
        <Text bold>
          Django, Django Rest Framework, UWSGI, Nginx, PEP8, Unittest
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>Front-End</ColoredText>
        </Box>
        <Text bold>
          HTML, JSX, Pug, SCSS, LESS, CSS, React Devtools, Firefox/Chrome Devtools
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>Databases</ColoredText>
        </Box>
        <Text bold>
          PostgresQL, MongoDB, Sqlite, Sequelize
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>Systems</ColoredText>
        </Box>
        <Text bold>
          Arch, Debian, Darwin
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>SVN/CI/CD</ColoredText>
        </Box>
        <Text bold>
          Git, Vercel, Netlify
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>Tools</ColoredText>
        </Box>
        <Text bold>
          Vim, Docker, SSH, tmux, zsh, Sublime
        </Text>
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginBottom={3}
        width={ 100 }
      >
        <Box
          marginRight={1}
          width={24}
          minWidth={24}
        >
          <ColoredText>Other</ColoredText>
        </Box>
        <Text bold>
          Office Pack, Adobe CC
        </Text>
      </Box>


      <Box
        alignItems="flex-start"
        paddingX={3}
        marginTop={1}
        marginBottom={1}
        width={ 100 }
      >
        <Box
          marginRight={1}
          minWidth={22}
          width={22}
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
