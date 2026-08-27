import MyStoryimg from "../assets/img/icon-story.png";

const BlogComponents = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:rounded-3xl sm:p-10 lg:p-14">
        <div className="flex items-center gap-3">
          <img src={MyStoryimg} alt="icon envelope" />
          <h1 className="font-body text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            Blog
          </h1>
        </div>

        <div className="pt-3 sm:w-3/4">
          <p className="font-body text-xl font-light text-gray-300">
            Articles, tutorials, snippets, rants, and everything else.
            Subscribe for updates as they happen.
          </p>
        </div>

        <form className="flex flex-col gap-4 pt-8 sm:flex-row sm:gap-4">
          <input
            type="email"
            id="subscribe"
            placeholder="Drop that email here…"
            className="w-full rounded-md border border-white/10 bg-white/5 px-5 py-4 font-body font-light text-white placeholder-gray-400 transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:w-1/2"
          />
          <button
            type="submit"
            className="rounded-md bg-secondary px-10 py-4 font-body text-xl font-semibold text-white transition-colors hover:bg-green md:text-2xl"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogComponents;
