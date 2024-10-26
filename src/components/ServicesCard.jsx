import React from "react";

const ServicesCard = ({ imgURL, label, subtext }) => {

  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24}height={24} />
      </div>
        <h1 className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</h1>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServicesCard;
