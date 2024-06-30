
import Carousel from '../Component/Main/Carousel/Carousel'
import BrandIntroduction from '../Component/Main/BrandIntroduction/BrandIntroduction'
import WhyUs from '../Component/Main/WhyUs'
import ImagesBlock from '../Component/Main/ImagesBlock'
import ServicesSection from '../Component/Main/ServicesSection'
import ReviewsSection from '../Component/Main/ReviewsSection/ReviewsSection'
import HeroBlock from '../Component/Main/HeroBlock'



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