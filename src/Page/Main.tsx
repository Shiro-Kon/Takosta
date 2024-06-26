
import HeroBlock from '../Component/HeroBlock'
import Carousel from '../Component/Carousel/Carousel'
import BrandIntroduction from '../Component/BrandIntroduction/BrandIntroduction'
import WhyUs from '../Component/WhyUs'
import ImagesBlock from '../Component/ImagesBlock'
import ServicesSection from '../Component/ServicesSection'
import ReviewsSection from '../Component/ReviewsSection'


type Props = {}

const Main = (props: Props) => {
  return (
    <div >
      <HeroBlock />
      <Carousel />
      <BrandIntroduction />
      <ImagesBlock/>
      <WhyUs/>
      <ServicesSection/>
      <ReviewsSection/>
    </div>
  )
}

export default Main