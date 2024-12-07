
const BlogHeader = () => {
  return (
    <header className="relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-olive-green to-soft-sand text-white py-16 px-6 lg:py-24">
      <h1 className="font-pushkin text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
        Ласкаво просимо до блогу
        <span className="block text-sage-green">TAKOSTA</span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans max-w-3xl leading-relaxed">
        Відкрийте для себе секрети догляду за волоссям, інноваційні формули та
        натхнення від професійної косметики. Давайте разом створювати красу!
      </p>
    </header>
  );
};

export default BlogHeader;
