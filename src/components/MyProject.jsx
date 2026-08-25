import MyStoryimg from "../assets/img/icon-story.png";
import {Link} from "react-router-dom";
const MyProject = ({ titre, description }) => {
  return (
    <Link
      to="./"
      className="mb-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/10 sm:px-6"
    >
      <span className="min-w-0 flex-1">
        <h4 className="font-body text-lg font-semibold text-white">
          {titre}
        </h4>
        <p className="mt-1 font-body font-light text-gray-300">
          {description}
        </p>
      </span>
      <img
        src={MyStoryimg}
        className="h-5 w-5 flex-shrink-0"
        alt="chevron right"
      />
    </Link>
  );
};

export default MyProject;
