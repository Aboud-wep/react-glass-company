import React from "react";

const ForInvestors = () => {
  return (
    <div>
      <div className="flex h-[110px] bg-[#011C38]">
        <h1 className="text-white text-[50px] items-center flex ml-16">
          For Investors
        </h1>
      </div>
      {/* <div className="py-12 flex items-center justify-center text-2xl">
        <ul className="list-disc  space-y-2 max-w-full   ">
          <li>
            We have all the necessary documents to hire Cypriot employees in all
            European Union countries
          </li>
          <li>
            We have the status of an employment agency in Cyprus and abroad
          </li>
          <li>We know the applicable Cypriot and European law</li>
          <li>We provide our employees with fully legal and safe work</li>
          <li>We serve many prestigious clients</li>
        </ul>
      </div> */}
      <div className=" text-2xl text-[#011C38] py-12">
        
        <ul className="list-disc  space-y-2 max-w-6xl mx-auto px-10">
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
    </div>
  );
};

export default ForInvestors;
