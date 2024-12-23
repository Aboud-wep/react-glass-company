import React from "react";
import SearchField from "../../Component/SearchField";
import Header from "../../Layout/Header";
import LangBar from "../../Layout/LangBar";
import Footer from "../../Layout/Footer";
import HomeLeft from "../../assets/Images/HomeLeft.png";
import HomeRight from "../../assets/Images/HomeRight.png";
const Home = () => {
  return (
    <div>
      <div className="bg-[url('src/assets/Images/HeaderBG.png')] bg-cover bg-center h-auto">
        <LangBar />
        <div className="relative overflow-hidden ">
          <img
            src={HomeLeft}
            alt="Overlay"
            className="absolute top-0 left-0 overflow-hidden hidden lg:block -z-50"
          />

          <img
            src={HomeRight}
            alt="Overlay"
            className="absolute top-0 right-0 overflow-hidden hidden lg:block -z-50"
          />
          <SearchField />

          <Header />

          <div className="container text-[#011C38] mx-auto px-4 py-8 mt-10">
            <h1 className="border-b-4 md:border-b-8 pb-2 md:pb-6 lg:pb-8  border-[#011C38]  text-lg sm:text-xl md:text-3xl lg:text-[56px] font-bold sm:w-[50%] md:w-[60%] lg:w-[825px] mb-4 lg:mb-[32px]">
              FROM EUROPE TO CYPRUS
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-3xl lg:max-w-4xl  leading-relaxed md:leading-8">
              FB PROJECT Ltd, is a construction and building company founded in
              2019. Due to the experience gained earlier as a company DIAXO Ltd,
              and work in subcontracting with foreign contractors in Belgium,
              the Netherlands and Luxembourg. Our company is dynamically
              developing, increasing employment and equipment base. We offer a
              full range of construction services. We consistently focus on
              providing the highest quality services approaching each project
              with full commitment and passion. The mission and vision of FB
              PROJECT Ltd are based on strong principles of integrity and
              responsibility passed down from generation to generation in the
              company. At FB PROJECT Ltd, we are constantly raising the bar by
              creating innovative solutions, as well as supporting creative
              ideas with forward thinking. We meet the latest technologies in
              the industry, guaranteeing our customers the highest quality,
              durable and solid building materials from leading manufacturers on
              the market.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#011C38] text-white py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center px-4">
          Working with us in Cyprus is enjoyable
        </h1>
        <ul className="list-disc pl-6 space-y-2 max-w-3xl mx-auto px-4">
          <li>
            We have all the necessary documents to hire Cypriot employees in all
            European Union countries
          </li>
          <li>
            We have the status of an employment agency in Cyprus and abroad.
          </li>
          <li>We know the applicable Cypriot and European law</li>
          <li>We provide our employees with fully legal and safe work</li>
          <li>We serve many prestigious clients</li>
        </ul>
      </div>

      <div>SERVICES</div>
      <Footer />
    </div>
  );
};

export default Home;
