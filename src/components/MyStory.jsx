import MyStoryimg from "../assets/img/icon-story.png";

const MyStory = ({titre, description}) => {
  return (
    <div className="border-b border-grey-lighter py-16  lg:py-20">
            <div className="flex items-center pb-6">
              <img src={MyStoryimg} alt="icon story" />
              <h3
                className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white"
              >
                {titre}
              </h3>
            </div>
            <div>
              <p className="font-body font-light text-primary dark:text-white">
                {description}
              </p>
            </div>
    </div>


        
  );
}

export default MyStory;