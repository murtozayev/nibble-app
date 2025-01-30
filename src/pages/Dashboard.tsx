import { Route, Routes, useNavigate } from "react-router-dom"
import LeftMenu from "../components/LeftMenu"
import Navbar from "../components/Navbar"
import Home from "../dashboard/Home"
import { useEffect } from "react"
import Cart from "../components/Cart"
import Delivery from "../components/Delivery"
import Checkout from "../components/Checkout"
import { useSelector } from "react-redux"
import { RootType } from "../store"
import SearchResult from "../components/SearchResult"
import AboutFood from "../components/AboutFood"
import Category from "../components/Category"
import Restaurant from "../components/Restaurant"
import Explore from "../dashboard/Explore"
import Favourite from "../dashboard/Favourite"
import Orders from "../dashboard/Orders"
import Map from "../components/Map"
import Settings from "../dashboard/Settings"

const Dashboard = () => {

    const navigate = useNavigate()

    const { search, showCategory, showRestaurant } = useSelector((state: RootType) => state.nibble)

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate("/auth")
        }
    }, [navigate])

    return (
        <div>
            <Navbar />
            <LeftMenu />
            {search ? <SearchResult /> : showCategory ? <Category /> : showRestaurant ? <Restaurant /> : (
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="favourites" element={<Favourite />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="settings" element={<Settings />} />
                </Routes>
            )}

            <Cart />

            <Delivery />

            <Checkout />

            <AboutFood />

            <Map />
        </div>
    )
}

export default Dashboard