import BlogCTA from "../Component/Blog/BlogCTA";
import BlogPosts from "../Component/Blog/BlogPosts";
import BrandIntroduction from "../Component/Blog/BrandIntroduction/BrandIntroduction";
import FounderGrid from "../Component/Blog/FounderGrid";


const BlogPage = () => {
  return (
    <div className=" min-h-screen mt-[5%]">
      <section className="pt-12 pb-16">
        <BrandIntroduction />
      </section>
      <section className=" pb-16">
        <FounderGrid />
      </section>
      <section className="pt-12 pb-4">
        <BlogPosts />
      </section>
      <section className=" pb-16">
        <BlogCTA />
      </section>
    </div>
  );
};

export default BlogPage;
