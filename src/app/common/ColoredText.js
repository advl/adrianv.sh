import * as React from 'react'

import Gradient from 'ink-gradient'

import { useSettings } from 'app/common'

import { Text } from 'ink'

const ColoredText = ({children, ...props}) => {
  const {
    color,
    gradient
  } = useSettings()

  const main = <Text
    color={ color }
    {...props}
               >
    { children }
  </Text>

  if (gradient) return (
    <Gradient name={ gradient }>
      { main }
    </Gradient>

  )
  
  return main
}

export default ColoredText
