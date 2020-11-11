import * as React from 'react'
import { useReducer } from 'react'

import SettingsContext from './Context'

const reducer = (state, action) =>{
  switch (action.type) {

  case 'SET_SETTINGS':
    return {
      ...state,
      ...action.payload
    }

  default:
    return state
  }

}

const SettingsContextProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    color:'blue'
  })

  const setSettings = (payload) => {
  //console.log('opening new tab', payload)
    dispatch({
      type:'SET_SETTINGS',
      payload, //'sidebar', 'main'
    })
  }
  //
  return (
    <SettingsContext.Provider
      value={{
        ...state,
        setSettings
      }}
    >
      { children }
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider
