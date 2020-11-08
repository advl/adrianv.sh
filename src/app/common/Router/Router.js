import * as React from 'react'
import { 
  useReducer,
  useCallback
} from 'react'
import RouterContext from './Context'

const reducer = (state, action) =>{
  switch (action.type) {

  case 'PUSH_HISTORY':
    return {
      ...state,
      location:{
        ...state.location,
        pathname:action.payload.path,
        state:action.payload.state
      }
    }

  default:
    return state
  }

}

const RouterContextProvider = ({pathname, children, ...props}) => {

  const [state, dispatch] = useReducer(reducer, {
    history :{},
    location:{
      pathname:pathname
    },
    match   :{},
  })

  const historyPush = useCallback((path, state) => 
    dispatch({
      type   :'PUSH_HISTORY',
      payload:{
        path,
        state
      }
    }),
    []
  )
  

  return (
    <RouterContext.Provider value={{ 
      location:state.location,
      history :{
        push:historyPush,
      },
      match:{},
    }}
    >
      { children }
    </RouterContext.Provider>
  )
}

RouterContextProvider.defaultProps = {
  pathname:'/'
}

export default RouterContextProvider
