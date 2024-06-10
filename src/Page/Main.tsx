
import HeroBlock from '../Component/HeroBlock'
import Carousel from '../Component/Carousel'
import BrandIntroduction from '../Component/BrandIntroduction'


type Props = {}

const Main = (props: Props) => {
  return (
    <div >
      <HeroBlock />
      <Carousel />
      <BrandIntroduction />
    </div>
  )
}

export default Main