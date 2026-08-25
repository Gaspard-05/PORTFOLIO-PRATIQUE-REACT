import { Link } from "react-router-dom";

const Cta = ({titre, projects, contactButton, myContact}) => {
  return (
    <>
      <section className="px-2 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm sm:rounded-3xl">
          <div className="px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {titre}
            </h2>
            <p className="mt-4 text-xl font-medium text-gray-300 sm:text-2xl">
              {projects}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-12">
              <Link
                to="#"
                title=""
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-indigo-700 focus:bg-indigo-700 sm:w-auto"
                role="button"
              >
                {contactButton}
              </Link>

              <Link
                to="#"
                title=""
                className="inline-flex w-full items-center justify-center rounded-md border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10 focus:bg-white/10 sm:w-auto"
                role="button"
              >
                <svg
                  className="mr-2 -ml-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                {myContact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;