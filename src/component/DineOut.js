import { dineoutRestaurants } from "../utils/Dinedata";
import DineCard from "./DineCard";
 
export default function DineOut(){

    return(
        <div className='w-[80%] mx-auto mt-20 mb-20'>
            <h1 className="font-bold text-2xl">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap gap-10 overflow-auto mt-5">
                {
                    dineoutRestaurants.map((restCard)=><DineCard key={restCard?.info?.id} restCard={restCard}></DineCard>)
                }
            </div>
        </div>
    )
}