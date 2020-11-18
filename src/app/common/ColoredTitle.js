import * as React from 'react'

import { 
  useSettings,
} from 'app/common'

import { Box } from 'ink'

import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'

const ColoredTitle = ({
  font,
  children,
  secondaryColor:userSecondaryColor
}) => {
  const { 
    color,
    secondaryColor,
    gradient,
  } = useSettings()
  
  return (
    <Box
      width={90}
      justifyContent='center'
      key={ 'title' }
    >
      { gradient ?
        <Gradient name={ gradient }>
          <BigText
            font={ font }
            text={ children }
          />
        </Gradient> :
        <BigText
          font={ font }
          text={ children }
          colors={[color, userSecondaryColor || secondaryColor]}
        />
      }
    </Box>
  )
}

ColoredTitle.defaultProps = {
  font:'3d'
}

export default ColoredTitle

