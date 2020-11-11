import * as React from 'react'
import packageInfo from '../../package.json'
import { Text, Box, Newline } from 'ink'
import { 
  Picture,
} from 'app/common'

import {
  Route,
  Switch
} from 'react-router'

import {
  PhotoPage,
  TestPage,
  ColorChoicePage,
  ExperienceMainPage
} from 'app/pages'

export default (props) => {
  //

  return(
    <>
      {/*
      <Switch>
        <Route
          path='/'
          exact
        >
          <Box
            borderStyle='round'
            padding='2'
            borderColor='green'
            width='25'
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

        </Route>
        <Route path='/home'>
          <Text>Hello from route</Text>
        </Route>
        <Route path='/heythere'>
          <Text>Hello from 2222</Text>
        </Route>
        <Route path='/picture'>
          <PhotoPage/>
        </Route>
        <Route path='/experience'>
          <ExperienceMainPage/>
        </Route>
      </Switch>
      */}
      <ColorChoicePage/>
    </>
  )
} 
