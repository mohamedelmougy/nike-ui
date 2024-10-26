import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="text-center">
      {/* <div className=""> */}
      <img
        className="object-contain rounded-full mx-auto"
        src={imgURL}
        alt=""
        width={300}
        height={300}
      />
      {/* </div> */}
      <p className="mt-4 mb-2 text-slate-gray max-w-lg">{feedback}</p>
      <div className="flex items-center justify-center gap-2">
        <img src={star} alt="star icon" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div> 
      <h3 className="font-bold text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
