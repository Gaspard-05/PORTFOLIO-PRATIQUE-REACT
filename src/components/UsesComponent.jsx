import  MyIcone  from "../assets/img/icon-uses.png";

const UsesComponent = ({titresection, description, titrecontenu, element1, element2, element3}) => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="py-16 lg:py-20">
            <div>
              <img src={MyIcone} alt="icon uses" />
            </div>
            <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
              {titresection}
            </h1>
            <div className="pr-2 pt-3">
              <span className="font-body text-xl font-light text-primary dark:text-white">
                {description}
              </span>
            </div>

            <div className="pt-16 lg:pt-20">
              <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
                {titrecontenu}
              </h3>
              <ul className="list-disc pl-10">
                <li className="font-body text-lg font-light text-primary dark:text-white">
                 {element1}
                </li>
                <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
                 {element2}
                </li>
                <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
                  {element3}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsesComponent;
