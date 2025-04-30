import { Link } from "react-router";

export default function restCard({ restInfo }) {

  return (
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="mx-auto w-65 mb-5 transform transition duration-200 hover:scale-95 shadow-2xl rounded p-1">
      <div>
        <img
          className="w-75 h-40 object-cover rounded"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restInfo?.info?.cloudinaryImageId
          }
        ></img>
        <div className="w-[95%] mx-auto mt-3">
          <div className="font-semibold text-xl">{restInfo?.info?.name.length>20?`${restInfo?.info?.name.slice(0,20)}...`:restInfo?.info?.name}</div>
          <div className="flex gap-2 items-center mt-2">
            <svg
              className="w-6 h-6 fill-green-600"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
            </svg>
            <span className="text-lg">{restInfo?.info?.avgRating}</span>
            <div className="text-lg font-semibold">
              {restInfo?.info?.sla?.slaString}
            </div>
          </div>
          <div className="text-gray-600 text-md mt-1">{restInfo?.info?.cuisines.join(",").length > 20 ? restInfo?.info?.cuisines.join(",").slice(0, 20) + "..." : restInfo?.info?.cuisines.join(",")}</div>
          <p className="text-gray-600 text-md mt-1">{restInfo?.info?.areaName}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
