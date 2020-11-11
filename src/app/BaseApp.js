import * as React from 'react'

import { 
  SettingsContextProvider,
} from 'app/common'

import {
  MemoryRouter,
} from 'react-router'

import App from './App'

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
