import React from "react";

const LangBar: React.FC = () => {
  return (
    <div className="bg-[#011C38] h-[75px] flex items-center top-0 px-6 bg-[url('src/assets/Images/LangBarBG.png')]">
      {/* Language options aligned to the left */}
      <div className="text-white text-[26px] space-x-6">
        <span className="cursor-pointer hover:underline">EN</span>
        <span className="cursor-pointer hover:underline">RU</span>
        <span className="cursor-pointer hover:underline">PL</span>
      </div>
    </div>
  );
};

export default LangBar;
