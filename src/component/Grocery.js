import { GroceryGridCard } from "../utils/GroceryData"
import Grocerycard from "./Grocerycard"

export default function GroceryOption(){
    
    return(
        <>
            <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="font-bold text-2xl">Shop Groceries on Instamart</h1>
            <div className="flex overflow-auto mt-10 gap-5">
                    {
                        GroceryGridCard.map((foodDetails)=><Grocerycard key={foodDetails.id} foodDetails={foodDetails}></Grocerycard>)
                    }
                  </div>
        </div>
        </>
    )
}