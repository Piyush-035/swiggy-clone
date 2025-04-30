import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption(){

    return(
        <>
            <div className="w-[80%] container mx-auto flex flex-wrap gap-2 mt-20">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)
                } 
            </div>
        </>
    )
}