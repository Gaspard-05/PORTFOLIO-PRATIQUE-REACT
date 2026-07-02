import MyStoryimg from "../assets/img/icon-story.png";

const MyStory2 = ({titre, posts, category, description, date, time}) => {
  return (
    <>
      <div className="mx-auto w-screen max-w-screen-xl py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <img src={MyStoryimg} alt="icon story" />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            {titre}
          </h3>
          <a
            href="blog"
            className="flex items-center pl-10 font-body italic text-white transition-colors hover:text-secondary"
          >
           { posts }
            <img src={MyStoryimg} className="ml-3" alt="arrow right" />
          </a>
        </div>
        <div className="pt-8">
          <div className="border-b border-grey-lighter pb-8">
            <span className="mb-4 inline-block rounded-full  px-2 py-1 font-body text-sm text-white">
              {category}
            </span>
            <a
              href="post"
              className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary"
            >
              {description}
            </a>
            <div className="flex items-center pt-4">
              <p className="pr-2 font-body font-light text-primary dark:text-white">
               {date}
              </p>
              <span className="font-body text-grey dark:text-white">//</span>
              <p className="pl-2 font-body font-light text-primary dark:text-white">
                {time}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};



export default MyStory2;
