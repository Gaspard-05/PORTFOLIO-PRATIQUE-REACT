import MyStoryimg from "../assets/img/icon-story.png";

const MyStory2 = ({titre, posts, category, description, date, time}) => {
  return (
    <section className="px-2 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 xl:px-0">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:rounded-3xl sm:p-10 lg:p-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={MyStoryimg} alt="icon story" />
            <h3 className="font-body text-2xl font-semibold text-white">
              {titre}
            </h3>
          </div>
          <a
            href="blog"
            className="flex items-center gap-2 font-body italic text-white transition-colors hover:text-secondary"
          >
            {posts}
            <img src={MyStoryimg} className="h-4 w-4" alt="arrow right" />
          </a>
        </div>

        <div className="mt-8">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 font-body text-sm text-white">
            {category}
          </span>
          <a
            href="post"
            className="block font-body text-lg font-semibold text-white transition-colors hover:text-secondary"
          >
            {description}
          </a>
          <div className="mt-4 flex items-center">
            <p className="pr-2 font-body font-light text-gray-300">{date}</p>
            <span className="font-body text-gray-400">//</span>
            <p className="pl-2 font-body font-light text-gray-300">{time}</p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default MyStory2;
