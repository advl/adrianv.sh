import * as React from 'react'
import packageInfo from '../../package.json'
import { Text, Box, Newline } from 'ink'
import { useLocation } from 'react-router'
import { 
  Picture,
} from 'app/common'

import {
  Route,
  Switch
} from 'react-router'

import {
  HomePage,
  EducationMainPage,
  ExperienceMainPage,
  MiscMainPage,
  PhotoPage,
  TestPage,
  OSSPage,
  ColorChoicePage,
} from 'app/pages'

export default (props) => {
  //
  //
  const location = useLocation()

  return(
    <>
      <Text>{location.pathname}</Text>
      <Switch>
        {/*
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
      */}
        <Route
          path='/'
          exact
        >
          <HomePage />
        </Route>
        <Route
          path='/education'
          exact
        >
          <EducationMainPage/>
        </Route>
        <Route
          path='/experience'
          exact
        >
          <ExperienceMainPage/>
        </Route>
        <Route
          path='/oss'
          exact
        >
          <OSSPage/>
        </Route>
        <Route
          path='/misc'
          exact
        >
          <MiscMainPage />
        </Route>
        <Route
          path='/picture'
          exact
        >
          <PhotoPage />
        </Route>
        <Route
          path='/colors'
          exact
        >
          <ColorChoicePage/>
        </Route>
        <Route path='/experience'>
          <ExperienceMainPage/>
        </Route>
      </Switch>
    </>
  )
} 
