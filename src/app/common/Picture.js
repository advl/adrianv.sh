import * as React from 'react'
import { Text } from 'ink'
import picture from 'assets/yo.txt'

const Picture = ({ bold }) => {
  //
  return (
    <Text bold={ bold }>{ picture }</Text>
  )
}

Picture.defaultProps = {
  bold:true
}

export default Picture
