import * as React from 'react'
import { useEffect } from 'react'
import packageInfo from '../../package.json'
import { Text, Box, Newline, useStdout } from 'ink'
import { useLocation } from 'react-router'
import { 
  Picture,
  useSettings,
} from 'app/common'

import {
  Route,
  Switch
} from 'react-router'

import {
  DownloadResumePage,
  DownloadPDFPage,
  ContactPage,
  HomePage,
  EducationMainPage,
  ExperienceMainPage,
  MiscMainPage,
  PhotoPage,
  SourcePage,
  SkillsPage,
  TestPage,
  OSSPage,
  ColorChoicePage,
} from 'app/pages'

export default (props) => {
  //
  //
  const location = useLocation()
  const {write} = useStdout()
  const { visitor } = useSettings()


  useEffect(() => {
    visitor.pageview(location.pathname + location.search).send()
  }, [location.pathname])


  return(
    <>
      {/*}<Text>{location.pathname}</Text>*/}
      <Switch>
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
        {/*
        <Route
          path='/oss'
          exact
        >
          <OSSPage/>
        </Route>
        */}
        <Route
          path='/hire'
          exact
        >
          <SkillsPage />
        </Route>
        <Route
          path='/contact'
          exact
        >
          <ContactPage/>
        </Route>
        <Route
          path='/downloadresume'
          exact
        >
          <DownloadResumePage/>
        </Route>
        <Route
          path='/downloadpdf'
          exact
        >
          <DownloadPDFPage/>
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
          path='/source'
          exact
        >
          <SourcePage />
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
