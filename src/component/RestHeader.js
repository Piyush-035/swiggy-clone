import { useSelector } from "react-redux"
import { Link } from "react-router";

export default function RestHeader(){

    const counter = useSelector(state=>state.cartslice.count);

    return(
        <div className="py-4 px-8 flex justify-between items-center bg-gray-300">
            <div>
                <p className="text-5xl font-semibold text-orange-400 ">Swiggy</p>
            </div>
            <div>
                <Link to="/checkout">
                <p className="text-5xl">Cart{`(${counter})`}</p>
                </Link>
            </div>
        </div>
    )
}