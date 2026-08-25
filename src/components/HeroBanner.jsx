const HeroBanner = ({
  badge = "Portfolio",
  title,
  description,
  startButton,
  learnMoreButton,
  imageUrl,
}) => {
  return (
    <>
      <section className="px-2 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm sm:rounded-3xl">
          <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 md:grid-cols-2 md:gap-10 lg:p-14">
            <div className="text-left">
              {badge && (
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {badge}
                </span>
              )}

              <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>

              <p className="mt-4 text-base text-pretty text-gray-300 sm:text-lg/relaxed">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                  href="#"
                >
                  {startButton}
                </a>

                <a
                  className="inline-block rounded border border-white/20 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                  href="#"
                >
                  {learnMoreButton}
                </a>
              </div>
            </div>

            <div>
              <img
                className="h-64 w-full rounded-xl object-cover sm:h-80 md:h-[360px] lg:h-[420px]"
                src={imageUrl}
                alt="Any Image Here"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;