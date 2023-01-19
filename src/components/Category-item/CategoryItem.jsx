import React from "react";

const categoryItem = ({ categories }) => {
  const { id, imageUrl, title } = categories;
  return (
    <div
      key={id}
      className="sm:p-1 p-3 min-w-[30%] sm:w-auto h-60 flex flex-auto items-center justify-center border-black border border-solid mt-0 mx-[7.5px] mb-[15px] overflow-hidden  lg:h-[380px] first:mr-[7.5px] last:ml-[7.5] hover:cursor-pointer "
    >
      {/* category body */}
      <div
        className=" hover:scale-110 hover:transition-transform hover:duration-1000 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className=" bg-white p-7 hover:opacity-[0.8] h-[90px] sm:w-auto px-6 flex flex-col items-center justify-center border border-solid border-black opacity-[0.7] absolute">
        <h2 className="font-bold mb-2 text-[22px] text-[#4a4a4a]">{title}</h2>
        <p className=" font-light text-[16px]">Shop Now!</p>
      </div>
    </div>
  );
};

export default categoryItem;
