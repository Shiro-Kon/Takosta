import { Link } from "react-router-dom";

const BlogCTA = () => {
  return (
    <div className="max-w-[90%] mx-auto px-4 lg:px-8 py-12 bg-olive-green/70 text-white text-center rounded-lg ">
      <h2 className="text-2xl md:text-5xl lg:text-6xl font-forum mb-4">
        Хочете більше порад по догляду за волоссям?
      </h2>
      <p className="text-md md:text-lg mb-6">
        Підпишіться на наш блог, щоб отримувати найновіші статті та рекомендації від професіоналів.
      </p>
      <Link
  to="#"
  onClick={() => window.open("https://www.instagram.com/takosta_ua/", "_blank")}
  className="inline-block bg-white text-olive-green px-6 py-3 rounded-lg font-semibold hover:bg-soft-sand transition duration-300"
>
  Підписатися
</Link>

    </div>
  );
};

export default BlogCTA;
