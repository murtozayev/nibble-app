import { useDispatch } from "react-redux"
import logo from "../image/logo-food.png"
import LeftRouter from "./LeftRouter"
import { setLoading } from "../store"
import $axios from "../http/axios"
import { useNavigate } from "react-router-dom"

const LeftMenu = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const data = JSON.parse(localStorage.getItem("data") || "")


    async function onLogout() {
        dispatch(setLoading(true))
        try {
            await $axios.post("/auth/logout")

            localStorage.removeItem("accessToken")
            localStorage.removeItem("data")
            navigate("/auth")
            window.location.reload()

        } catch (error) {
            throw error
        } finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <div className=" float-left bg-[#F7F7F7] h-screen w-[20vw] p-[1vw] tablet:w-[10vw] phone:w-full phone:h-[10vw] phone:fixed phone:bottom-[4vw] phone:float-none " >
            <div className="flex items-center gap-[1vw] p-[1vw] phone:hidden ">
                <img className=" w-[4vw] tablet:w-[7vw] " src={logo} alt="Logo" />
                <h1 className=" font-extrabold text-[purple] text-[1.5vw] tablet:hidden ">Nibble</h1>
            </div>

            <LeftRouter />

            <div className=" flex items-center gap-[1vw] mt-[18vw] absolute bottom-[2vw] tablet:flex-col phone:hidden ">
                <h1 className=" text-[2vw] w-[3vw] h-[3vw] tablet:w-[7vw] tablet:h-[7vw] tablet:text-[5vw] text-center text-white rounded-full bg-[purple]  data && ">{data.name.charAt(0)}</h1>
                <div className=" flex flex-col text-[0.8vw] font-semibold tablet:hidden ">
                    <span>{data && data.name}</span>
                    <span>{data && data.email}</span>
                </div>
                <button onClick={onLogout} className=" fas fa-door-open text-[red] text-[2vw] tablet:text-[4vw] " />
            </div>
        </div>
    )
}

export default LeftMenu