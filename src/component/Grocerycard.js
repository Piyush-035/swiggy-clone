export default function Grocerycard({foodDetails}){

    return(
        <div className="flex-none">
        <a href={foodDetails?.action?.link}>
        <img className  ="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodDetails?.imageId}></img>
        </a>
        <h1 className="text-center font-bold">{foodDetails?.action?.text}</h1>
        </div>
    )
}