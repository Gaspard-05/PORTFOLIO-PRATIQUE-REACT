import MyStoryimg from "../assets/img/icon-story.png";
import {Link} from "react-router-dom";
const MyProject = ({ titre, description }) => {
  return (
    <>
      <div>
        <Link
          to="./"
          className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
        >
          <span className="w-9/10 pr-8">
            <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
              {titre}
            </h4>
            <p className="font-body font-light text-primary dark:text-white">
              {description}
            </p>
          </span>
          <span className="w-1/10">
            <img src={MyStoryimg} className="mx-auto" alt="chevron right" />
          </span>
        </Link>

          {/* <a
            href="./"
            className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
          >
            <span className="w-9/10 pr-8">
              <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                Maizzle
              </h4>
              <p className="font-body font-light text-primary dark:text-white">
                Framework for Rapid Email Prototyping
              </p>
            </span>
            <span className="w-1/10">
              <img src={MyStoryimg} className="mx-auto" alt="chevron right" />
            </span>
          </a>

          <a
            href="./"
            className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
          >
            <span className="w-9/10 pr-8">
              <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                Alpine.js
              </h4>
              <p className="font-body font-light text-primary dark:text-white">
                Think of it like Tailwind for JavaScript.
              </p>
            </span>
            <span className="w-1/10">
              <img src={MyStoryimg} className="mx-auto" alt="chevron right" />
            </span>
          </a>

          <a
            href="./"
            className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6"
          >
            <span className="w-9/10 pr-8">
              <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                PostCSS
              </h4>
              <p className="font-body font-light text-primary dark:text-white">
                A tool for transforming CSS with JavaScript
              </p>
            </span>
            <span className="w-1/10">
              <img src={MyStoryimg} className="mx-auto" alt="chevron right" />
            </span>
          </a> */}
      </div>
    </>
  );
};

export default MyProject;
