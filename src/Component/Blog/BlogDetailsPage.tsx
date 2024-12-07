import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../../Utils/BlogPosts/BlogPosts';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

const BlogDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <div>Стаття не знайдена</div>;
  }

  return (
    <main className="container mx-auto py-20 xxl:py-24 px-4 md:px-6 lg:px-8 xl:max-w-6xl xxl:max-w-7xl min-h-screen overflow-hidden text-balance">
      <AnimatedElement direction="right" delay={0.1}>
        <button onClick={() => navigate("/blog")}>
          <h1 className="text-sm md:text-sm lg:text-md xl:text-lg font-light text-sage-green ml-6 md:ml-8 font-sans mb-6 sm:text-center border-b-[1px] border-sage-green">
            Повернутися до блогу
          </h1>
        </button>
      </AnimatedElement>
      <div>
        <AnimatedElement direction="right" delay={0.2}>
          <img
            src={post.image}
            alt={`${post.title}`}
            className="w-full md:w-[300px]  h-[400px]  lg:h-[450px]  md:float-left md:mr-8 md:mb-6 rounded-[30px] object-cover"
          />
        </AnimatedElement>
        <AnimatedElement direction="right" delay={0.3}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-sage-green font-sans mb-6">
            {post.title}
          </h1>
          
          <div className="mt-8 text-sm md:text-md lg:text-lg xl:text-xl text-olive-drab/80 cursor-default whitespace-pre-wrap">
            {post.content}
          </div>
        </AnimatedElement>
      </div>
    </main>
  );
};

export default BlogDetailsPage;
