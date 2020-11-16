import * as React from 'react'
import ReactGA from 'react-ga'

import { 
  SettingsContextProvider,
} from 'app/common'

import {
  MemoryRouter,
} from 'react-router'

import App from './App'

ReactGA.initialize('UA-51857966-4', { debug: true })


export default (props) => {
  //

  return(
    <MemoryRouter>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </MemoryRouter>
  )
} 
