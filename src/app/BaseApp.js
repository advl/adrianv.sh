import * as React from 'react'
import ua from 'universal-analytics'

import { 
  SettingsContextProvider,
} from 'app/common'

import {
  MemoryRouter,
} from 'react-router'

import App from './App'

var visitor = ua('UA-51857966-4')


export default (props) => {
  //

  return(
    <MemoryRouter>
      <SettingsContextProvider
        visitor={ visitor }
      >
        <App />
      </SettingsContextProvider>
    </MemoryRouter>
  )
} 
