import * as React from 'react'
import { Text, Newline } from 'ink'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'

const Experience = (props) => {
  //
  return (
    <>
      <Gradient name='passion'>
        <BigText font='3d' text='Experience'></BigText>
      </Gradient>
      <Newline count={ 3 }/>
      <Text>Here is a description of my professional experience</Text>
      <Newline count={ 2 }/>
    </>

  )
}

export default Experience
