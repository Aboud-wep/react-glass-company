import React from "react";
import One from "../../assets/Images/Portfolio/1.png";
import Two from "../../assets/Images/Portfolio/2.png";
import Three from "../../assets/Images/Portfolio/3.png";
import Four from "../../assets/Images/Portfolio/4.png";
import Five from "../../assets/Images/Portfolio/5.png";

const Portfolio = () => {
  return (
    <div className="text-center my-20">
      <div className="my-10 px-5 lg:px-10">
        <h1 className="text-lg lg:text-2xl font-bold">
          SCHEVENINGEN. NETHERLANDS 2019
        </h1>
        <p className="text-sm lg:text-base">
          Project under construction. Subcontracting from FB PROJECT sp.z o.o.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={One}
          alt="SCHEVENINGEN 2019"
          className="w-full   max-w-sm md:max-w-md lg:max-w-full h-60 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="my-10 px-5 lg:px-10">
        <h1 className="text-lg lg:text-2xl font-bold">
          EMA AMSTERDAM. NETHERLANDS 2019
        </h1>
        <p className="text-sm lg:text-base">
          The project was made by the coordinator of the company DIAXO sp.z o.o,
          who founded a second company operating under the name FB PROJECT sp.z
          o.o. Project under construction.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={Two}
          alt="EMA AMSTERDAM 2019"
          className="w-full   max-w-sm md:max-w-md lg:max-w-full h-60 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="my-10 px-5 lg:px-10">
        <h1 className="text-lg lg:text-2xl font-bold">
          UTRECHT NETHERLANDS 2019
        </h1>
        <p className="text-sm lg:text-base">
          The project was made by the coordinator of the company DIAXO sp.z o.o,
          who founded a second company operating under the name FB PROJECT sp.z
          o.o.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={Three}
          alt="UTRECHT 2019"
          className="w-full   max-w-sm md:max-w-md lg:max-w-full h-60 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="my-10 px-5 lg:px-10">
        <h1 className="text-lg lg:text-2xl font-bold">
          AIRPORT ZAVENTEM. BRUSSEL. BELGIE 2016.2017
        </h1>
        <p className="text-sm lg:text-base">
          The project was made by the coordinator of FB PROJECT sp. z o.o.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={Four}
          alt="AIRPORT ZAVENTEM 2016-2017"
          className="w-full   max-w-sm md:max-w-md lg:max-w-full h-60 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
        />
      </div>

      <div className="my-10 px-5 lg:px-10">
        <h1 className="text-lg lg:text-2xl font-bold">
          EPO RIJSWIJK. NETHERLANDS 2016.2017
        </h1>
        <p className="text-sm lg:text-base">
          The project was made by the coordinator of FB PROJECT sp. z o.o.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={Five}
          alt="EPO RIJSWIJK 2016-2017"
          className="w-full   max-w-sm md:max-w-md lg:max-w-full h-60 lg:h-auto object-cover lg:object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Portfolio;
