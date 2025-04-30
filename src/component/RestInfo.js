import {useState} from "react"
import { addItems,IncrementItems,DecrementItems } from "../stored/cartSlicer"
import { useDispatch, useSelector } from "react-redux"

export default function RestInfo({restData}){

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cartslice.items)

    const element = items.find(item=>item.id===restData.id)
    const count = element?element.quantity:0;

    function handleAddItems(){
        dispatch(addItems(restData));
    }
    function handleIncrementItems(){
        dispatch(IncrementItems(restData));
    }
    function handleDecrementItems(){
        dispatch(DecrementItems(restData));
    }

    return(
        <>
        <div className="flex justify-between mb-6 pb-2">
            <div className="w-[70%]">
            <p className="text-gray-700 text-2xl">{restData?.name}</p>
            <p className="text-xl mb-3">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            <span className="text-green-700 ">{restData?.ratings?.aggregatedRating?.rating}</span>
            <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p className="mt-3 text-lg text-gray-500">{restData?.description}</p>
            </div>
            <div className="w-[20%] relative h-[80%]">
                <img className="w-full h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId}></img>
                
                {
                    (count==0)?(<button className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 shadow-md rounded-xl text-green-600 bg-white px-5 py-2 text-2xl border border-white cursor-pointer" onClick={()=>handleAddItems()}>ADD</button>):(
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 shadow-md flex gap-3 rounded-xl text-green-600 bg-white px-5 py-2 text-2xl">
                            <button className=" hover:bg-gray-300 " onClick={()=>handleDecrementItems()}>-</button>
                            <span>{count}</span>
                            <button className=" hover:bg-gray-300 " onClick={()=>handleIncrementItems()}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )
}