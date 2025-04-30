import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./component/Home"
import Restaurant from "./component/Restaurant"
import {BrowserRouter,Route,Routes} from "react-router"
import RestaurantMenu from "./component/RestaurantMenu"
import SearchFood from "./component/SeachFood"
import SecondaryHome from "./component/SecondaryHome"
import { store } from "./stored/store"
import { Provider } from "react-redux"
import Checkout from "./component/Checkout"

function App(){

    return(
        <Provider store={store}>
            <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)