import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../../Utils/BlogPosts/BlogPosts';
import AnimatedElement from '../AnimatedElement/AnimatedElement';
import { useEffect, useState } from 'react';

const BlogDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id.toString() === postId);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return <div>Стаття не знайдена</div>;
  }

  return (
    <main className="container mx-auto py-20 px-4 md:px-6 lg:px-8 xl:max-w-6xl min-h-screen overflow-hidden relative">
      <AnimatedElement direction="right" delay={0.1} className='ml-4'>
        <button onClick={() => navigate('/blog')} className="my-6">
          <h1 className="text-sm md:text-md lg:text-lg font-light text-sage-green font-sans border-b-[1px] border-sage-green ">
            Повернутися до блогу
          </h1>
        </button>
      </AnimatedElement>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Image Section */}
        <div className="lg:w-1/2 h-full relative">
          <AnimatedElement direction="left" delay={0.2}>
            <img
              src={post.image}
              alt={`${post.title}`}
              className="w-full h-[550px] rounded-3xl shadow-md object-cover"
            />
          </AnimatedElement>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-12">
          <AnimatedElement direction="right" delay={0.3}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-sage-green font-sans mb-6">
              {post.title}
            </h1>
            <div className="text-sm md:text-md lg:text-lg text-olive-drab leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="fixed bottom-0 left-0 h-1 bg-sage-green"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </main>
  );
};

export default BlogDetailsPage;
