import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, currentImg }) => {
  const handleClick =()=>{
    if (currentImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div
      className={`border-2 rounded-e-xl cursor-pointer max-sm:flex-1
        ${currentImg === imgURL.bigShoe ?'border-coral-red' :'border-transparent'}
      `}
   
    >
     <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img 
            src={imgURL.thumbnail} 
            width={127}
            height={103} 
            alt=""
            className="object-contain"
            onClick={handleClick} />
     </div>
    </div>
    
  );
};

export default ShoeCard;
