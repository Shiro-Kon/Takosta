import HeroBlock from '../Component/Main/HeroBlock';
import Carousel from '../Component/Main/Carousel/Carousel';
import WhyUs from '../Component/Main/WhyUs';
import ServicesSection from '../Component/Main/ServicesSection/ServicesSection';
import ImageSlider from '../Component/ImageSlider/ImageSlider';
import BeforeAfterImages from '../Component/BeforeAfterImages/BeforeAfterImages';

const Main: React.FC = () => {
  return (
    <div className="grid gap-y-20">
      <HeroBlock />
      <Carousel />
      <WhyUs />
      <ImageSlider />
      <section className="pt-12 pb-16">
        <ServicesSection />
      </section>
      <section className="pt-12 pb-12">
        <BeforeAfterImages />
      </section>
    </div>
  );
};

export default Main;
