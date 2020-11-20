import * as React from 'react'

import { Newline, Text, Box, useApp } from 'ink'

import * as figures from 'figures'

import { 
  Page,
  ColorSelectInput,
  ColoredTitle,
  ColoredText,
  useSettings,
} from 'app/common'

import { 
  useHistory 
} from 'react-router'

const Main = (props) => {

  const history = useHistory()

  const { 
    color,
    setSettings
  } = useSettings()

  const items = [
    {
      label:'Contact Adrian',
      value:'/contact'
    },
    {
      label:'Tell me more about the skills you can bring to my company.',
      value:'/hire'
    },
    {
      label:'Tell me about your education history',
      value:'/education'
    },
    {
      label:'Download resume as a printable PDF',
      value:'/downloadresume'
    },
    {
      label:`${figures.arrowLeft} Return to main menu`,
      value:'/'
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
    <Page title='Experience'>
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
          <ColoredText>2019 - 2020</ColoredText>
        </Box>
        <Box flexGrow={1}>
          <Text underline>CTO, Meccamico S.R.L</Text>
        </Box>
        <Box
          marginLeft={1}
          width={45}
          justifyContent={ 'flex-end' }

        >
          <Text bold>Remote & Milano, Italy</Text>
        </Box>
      </Box>
      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          Designed in relation with the CEO two products in relation for the car repair market, managed a traffic of 120K organic monthly sessions. Responsible of the technical vision, specs, planning, implementation, resiliency, maintainability, documentation of systems.
          <Newline  count={2}/>
Created an Apollo Server GraphQL backend deployed as a Serverless Lambda function on Vercel, connected to a PostgresQL store on Google Cloud Platform (GCP) to expose a fast, robust, modular API with authentication strategies allowing for efficient querying and the plugging of microservices, while ensuring consistent testing and Continuous Integration/Delivery (CI/CD).
          <Newline  count={2}/>
Designed a 100+ Component React Design System, visually tested on StorybookJS, ensuring consistent usage with PropTypes, and best practices with double ESM/CJS compilation, SCSS isolation, lazy-loading and full SSR compatibility. Designed three open-source SCSS libraries for the front-end apps to consume. Managed a 70% reduction in codesize compared to SemanticUI.
          <Newline  count={2}/>
Designed and Engineered five React applications to consume the GraphQL API using Apollo-Client, Continuously Integrated and Deployed on Vercel. Implemented for main apps Serverless Lambda functions for Server-Side-Rendering and Sitemap generation for SEO purposes.
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
          <ColoredText>2016</ColoredText>
        </Box>
        <Box flexGrow={1}>
          <Text underline>Full-Stack Architect (Intern), Decidata</Text>
        </Box>
        <Box
          marginLeft={1}
          width={45}
          justifyContent={ 'flex-end' }

        >
          <Text bold>Mexico City, Mexico</Text>
        </Box>
      </Box>
      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          Responsible of choosing the most appropriate technologies and systems to ensure server resiliency, maintability in the context of an image recognition application.
          <Newline count={2}/>
          Converted the PHP Back-end to Python/Django/PEP8, making it modular and reducing the code size by 40% while easing the interface with back-end machine-learning daemons. Maintained a Debian/Python3/Nginx stack.
          <Newline count={2}/>
          Engineered and maintained a custom SCSS library for front-end development allowing white-label theming.

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
          <ColoredText>2016</ColoredText>
        </Box>
        <Box flexGrow={1}>
          <Text underline>Economic advisor to the VP of the Mexican Upper House</Text>
        </Box>
        <Box
          marginLeft={1}
          width={45}
          justifyContent={ 'flex-end' }

        >
          <Text bold>Mexico City, Mexico</Text>
        </Box>
      </Box>

      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          Delivered daily economic and geopolitical analysis and guidance to Sen. Luis Sanchez, Vice-President of the Mexican Seneate.
          <Newline count={2}/>
          In charge of organizing part of the first international seminary about basic income in Mexico. Delivered
geopolitical analysis of Switzerland, Finland and France to help choose the invitees. Worked in close
cooperation with ECLAC (UN) and the Belisario Dominguez Institute from the Senate.
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
          <ColoredText>2013 - 2015</ColoredText>
        </Box>
        <Box flexGrow={1}>
          <Text underline>Co-Founder, A Meander Magazine</Text>
        </Box>
        <Box
          marginLeft={1}
          width={45}
          justifyContent={ 'flex-end' }

        >
          <Text bold>Paris, France</Text>
        </Box>
      </Box>
      <Box
        marginBottom={2}
        paddingX={3}
        marginLeft={13}
        width={ 90 }
      >
        <Text>
          Creator and maintainer of a cultural magazine focused on old and forgotten works of art. Led a team of 3 and directed the work of 12 editors.
          <Newline count={2}/>
Designed a custom CMS solution using Django, UWSGI, NGINX, HTTP2 on Debian to allow for bespoke data structuring and fast rendering of the outlet. Ensured consistent PageSpeed results above 90/100.

        </Text>
        
      </Box>

      <Box
        alignItems="flex-start"
        paddingX={3}
        marginTop={1}
        marginBottom={1}
        width={ 110 }
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
