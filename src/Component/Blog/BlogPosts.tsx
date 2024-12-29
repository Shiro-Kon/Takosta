import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { BlogPost, blogPosts } from '../../Utils/BlogPosts/BlogPosts';

const BlogPage: React.FC = () => {
  const groupPostsByCategory = (): Record<string, BlogPost[]> => {
    return blogPosts.reduce((acc, post) => {
      if (!acc[post.category]) {
        acc[post.category] = [];
      }
      acc[post.category].push(post);
      return acc;
    }, {} as Record<string, BlogPost[]>);
  };

  return (
    <div className="container mx-auto md:w-[90%] overflow-hidden my-12 md:my-16 xxl:my-28">
      {Object.entries(groupPostsByCategory()).map(([category, posts]) => (
        <AnimatedElement direction="right" key={category}>
          <div className="flex flex-col my-6 sm:px-6 px-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-pushkin text-olive-green sm:text-center flex justify-center">
              {category}
            </h2>
            <div className="h-[1px] md:h-[1px] bg-olive-green/80 w-full mt-2 md:mt-4 rounded-[50px]" />
          </div>
          {posts.map((post, index) => (
            <BlogPostItem key={post.id} post={post} delay={index * 0.1} />
          ))}
        </AnimatedElement>
      ))}
    </div>
  );
};

interface BlogPostItemProps {
  post: BlogPost;
  delay: number;
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ post, delay }) => {
  return (
    <AnimatedElement direction="right" delay={delay}>
      <main className="flex flex-col md:flex-row mb-20 sm:text-center md:text-left sm:px-6 px-4">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full md:w-[300px] lg:w-[500px] h-[350px]  lg:h-[500px]  object-cover mb-4 md:mb-0 md:mr-6 lg:mr-12 rounded-3xl"
        />
        <div className="flex-grow sm:mt-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-light text-olive-green font-sans mb-2 lg:mb-6">
            {post.title}
          </h3>
          <p className="text-sm  lg:text-md xl:text-xl leading-relaxed whitespace-pre-line  font-sans text-olive-drab my-4 xl:my-6 ">
            {post.summary}
          </p>
          
          <Link
            to={`/blog/${post.id}`}
            className="rounded-[10px] bg-olive-green/60 backdrop-blur-sm px-6 py-3 text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-3xl font-light text-white shadow-sm duration-200 ease-out hover:bg-olive-green/80 hover:scale-[1.03] active:scale-95 mobile-landscape:text-base"
          >
            Читати далі
          </Link>
        </div>
      </main>
    </AnimatedElement>
  );
};

export default BlogPage;
