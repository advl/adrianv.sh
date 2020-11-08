import * as React from 'react'
import { Text } from 'ink'
import { 
  Picture,
  Router,
  Switch,
  Route,
  SelectMenu
} from 'app/common'


import {
  PhotoPage,
  TestPage
} from 'app/pages'

export default (props) => {
  //

  return(
    <Router>
      <Switch>
        <Route path='/home'>
          <Text>Hello from route</Text>
        </Route>
        <Route path='/heythere'>
          <Text>Hello from 2222</Text>
        </Route>
        <Route path='/picture'>
          <PhotoPage/>
        </Route>
      </Switch>
        <TestPage></TestPage>
      <SelectMenu/>
    </Router>
  )
} 
