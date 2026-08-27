const Pagination = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="flex flex-wrap items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-sm sm:justify-start sm:gap-4 sm:rounded-3xl sm:p-6">
        <span className="cursor-pointer rounded-md border-2 border-secondary px-3 py-1 font-body font-medium text-secondary">
          1
        </span>
        <span className="cursor-pointer rounded-md border-2 border-white/20 px-3 py-1 font-body font-medium text-white transition-colors hover:border-secondary hover:text-secondary">
          2
        </span>
        <span className="cursor-pointer rounded-md border-2 border-white/20 px-3 py-1 font-body font-medium text-white transition-colors hover:border-secondary hover:text-secondary">
          3
        </span>
        <span className="group flex cursor-pointer items-center rounded-md border-2 border-white/20 px-3 py-1 font-body font-medium text-white transition-colors hover:border-secondary hover:text-secondary">
          Next
          <i className="bx bx-right-arrow-alt ml-1 text-white transition-colors group-hover:text-secondary"></i>
        </span>
      </div>
    </section>
  );
};

export default Pagination;
