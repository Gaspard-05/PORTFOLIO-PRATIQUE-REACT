import MyStoryimg from "../assets/img/icon-story.png";

const BlogComponents = () => {
  return (
    <>

      <div className="py-16 lg:py-20">
            <div>
              <img src={MyStoryimg} alt="icon envelope" />
            </div>

            <h1
              className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl"
            >
              Blog
            </h1>

            <div className="pt-3 sm:w-3/4">
              <p
                className="font-body text-xl font-light text-primary dark:text-white"
              >
                Articles, tutorials, snippets, rants, and everything else.
                Subscribe for updates as they happen.
              </p>
            </div>

            <form className="flex flex-col py-12 sm:flex-row">
              <input
                type="email"
                id="subscribe"
                placeholder="Drop that email here…"
                className="w-full border border-primary bg-grey-lightest px-5 py-4 font-body font-light text-primary placeholder-primary transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary dark:border-secondary sm:w-1/2"
              />
              <button
                type="submit"
                className="mt-5 bg-secondary px-10 py-4 font-body text-xl font-semibold text-white hover:bg-green sm:mt-0 md:text-2xl"
              >
                Subscribe
              </button>
            </form>
    </div> 
    </>
  );
};

export default BlogComponents;
