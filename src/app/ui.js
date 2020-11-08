import * as React from 'react'
import { useEffect, useState } from 'react'
import packageInfo from '../package.json'
import Menu from 'app/Menu.js'
import { Box, Static, useStdout, Text, Newline } from 'ink'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'
import { exec } from 'child_process'

import picture from 'assets/yo.txt'

const App = ({name = 'Stranger'}) => {
  const a = 5

  const [zz, setZz] = useState()

  const { write } = useStdout(picture)

  exec("ls -la", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`)
      return
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      return
    }
    setZz(stdout)
  })


  return(
    <>
      <Static items={[1]}>
        { items =>
          <Box
            borderStyle='round'
            padding='2'
            borderColor='green'
            key='0'
          >
            <Text>
              <Text bold>
      Welcome and thank you for running the cutting-edge
              </Text>
              {' '}
              <Text
                bold
                color='red'
              >
        adrianv.sh
              </Text>
              {
                ' v.'
              }
              <Text
                bold
                color='blue'
              >
                { packageInfo.version }
              </Text>
.
              <Newline count={3}/>
              <Text>
                Pleased to meet you,
                {' '}
                <Text bold>I am Adrian</Text>
.
                <Newline count={2}/>
                I am a full-stack web developper currently looking for a job.
              </Text>
            </Text>
          </Box>
        }
      </Static>
      <Text>
        { picture }
        	<Gradient name="mind">
          <BigText
            text="experience"
            font="3d"
          />
        </Gradient>
      </Text>
      <Text>{ zz }</Text>
      <Menu></Menu>
    </>
  )}

module.exports = App
