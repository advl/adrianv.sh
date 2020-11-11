import * as React from 'react'
import { Text, Box } from 'ink'

import SelectInput from 'ink-select-input'

import Gradient from 'ink-gradient'

import { useHistory } from 'react-router'

import { useSettings } from 'app/common'

import * as figures from 'figures'

const Indicator = ({ isSelected }) => {

  const { 
    color,
    gradient
  } = useSettings()

  const main = 
      isSelected ? <Text color={ color }>{figures.pointer}</Text> : <Text> </Text>

  if (gradient && isSelected) return (
    <Box marginRight={1}>
      <Gradient name={ gradient }>
        { main }
      </Gradient>
    </Box>

  )

  return (
    <Box marginRight={1}>
      { main }
    </Box>
  )

}

const Item = ({isSelected, label}) => {

  const { 
    gradient, 
    color 
  } = useSettings()

  const main = <Text
    color={isSelected ? color : undefined}
    bold={ isSelected }
               >
    {label}
  </Text>

  if (gradient && isSelected) return (
    <Gradient name={ gradient }>
      { main }
    </Gradient>

  )

  return main
}

const ColorSelectInput = (props) => {
  
  /*
  const history = useHistory()

  const { setSettings } = useSettings()

  const handleSelect = item => {
    if (item.value.startsWith('&')) {
      setSettings({color:'green'})
    } else if (item.value.startsWith('$')) {
      history.goBack()
    } else {
      history.push(item.value)
    }
    // `item` = { label: 'First', value: 'first' }
  }
    */

  return <SelectInput
    {...props}
    //items={items}
    //onSelect={handleSelect}
    indicatorComponent={ Indicator }
    itemComponent={ Item }
         />
}

export default ColorSelectInput
