import React from 'react'
import HeroBlock from '../Component/HeroBlock'
import Carousel from '../Component/Carousel'

type Props = {}

const Main = (props: Props) => {
  return (
    <div >
      <HeroBlock/>
      <Carousel />
    </div>
  )
}

export default Main