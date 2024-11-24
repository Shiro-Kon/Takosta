import BrandIntroduction from "../Component/Blog/BrandIntroduction/BrandIntroduction";
import FounderSection from "../Component/Blog/FounderSection";
import CarouselImg from "../Component/ImageSlider/ImageSlider";


const Blog = () => {
  return (
    <div className="flex flex-col grid gap-y-20 my-12 md:my-16 xl:my-32">
      <section className="">
        <BrandIntroduction />
      </section>

      <section className="">
        <CarouselImg />
      </section>

      <section className="-mb-32">
        <FounderSection />
      </section>
    </div>
  );
};

export default Blog;
