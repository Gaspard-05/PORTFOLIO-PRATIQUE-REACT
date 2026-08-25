import MyStoryimg from "../assets/img/icon-story.png";

const MyStory = ({titre, description}) => {
  return (
    <section className="px-2 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10 xl:px-0">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:rounded-3xl sm:p-10 lg:p-14">
        <div className="flex items-center gap-3 pb-6">
          <img src={MyStoryimg} alt="icon story" />
          <h3 className="font-body text-2xl font-semibold text-white">
            {titre}
          </h3>
        </div>
        <p className="font-body font-light text-gray-300">{description}</p>
      </div>
    </section>
  );
}

export default MyStory;