
import * as React from 'react'
import { Text, Newline } from 'ink'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'


/*
fonts :[
  'block',//2
  'slick',
  'tiny',
  'grid',//2
  'pallet'
  'shade', //2
  'chrome', //3
  'simple',
  'simpleBlock',
  '3d', //2
  'simple3d',
  'huge', //2
  'console'
]
 */

const Page = ({
  title,
  titleFont,
  titleGradient,
  children,

}) => {
  //
  return (
    <>
      { (title && titleGradient) &&
      <Gradient name={ titleGradient }>
        <BigText font={ titleFont } text={ title }/>
      </Gradient>
      }
      { (title && !titleGradient) && 
        <BigText font={ titleFont } text={ title }
          colors={['green', 'red']}/>
      }
      { children }
      <Newline count={ 1 }/>
    </>

  )
}

Page.defaultProps = {
  titleFont:'3d',
  titleGradient:'passion'
}

export default Page
