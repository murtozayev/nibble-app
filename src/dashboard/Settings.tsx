import { useDispatch } from "react-redux"
import { setLoading } from "../store"
import $axios from "../http/axios"
import { useNavigate } from "react-router-dom"

const Settings = () => {

    const data = JSON.parse(localStorage.getItem("data") || "")

    const dispatch = useDispatch()

    const navigate = useNavigate()

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
        <div className=" shadow-2xl p-[2vw] float-start w-[80vw] h-[86.1vh] overflow-y-scroll phone:w-full phone:shadow-none ">
            <h1 className=" text-[2vw] font-bold phone:text-[6vw] ">Settings</h1>

            <h2 className=" text-[1vw] mt-[1vw] phone:text-[3vw] phone:mt-[3vw] ">Personal info</h2>

            <h1 className=" w-[10vw] h-[10vw] rounded-full flex justify-center items-center bg-[purple] text-[5vw] font-extrabold text-[white] mt-[2vw] phone:w-[50vw] phone:h-[50vw] phone:text-[30vw]  ">{data && data.name.charAt(0)}</h1>

            <div className=" flex items-center gap-[2vw] border-b-[0.2vw] px-[1vw] py-[0.5vw] mt-[1vw] phone:px-[3vw] phone:py-[2vw] phone:gap-[7vw] phone:mt-[10vw] ">
                <i className=" fas fa-user text-[2vw] phone:text-[10vw] text-[purple] " />
                <span className=" text-[1.3vw] phone:text-[5vw] font-semibold  text-[purple]">{data && data.name}</span>
            </div>
            <div className=" flex items-center gap-[2vw] border-b-[0.2vw] px-[1vw] py-[0.5vw] mt-[1vw] phone:px-[3vw] phone:py-[2vw] phone:gap-[7vw]  ">
                <i className=" fas fa-message text-[2vw] phone:text-[10vw] text-[yellow] " />
                <span className=" text-[1.3vw] phone:text-[5vw] font-semibold text-[yellow] ">{data && data.email}</span>
            </div>
            <div onClick={() => onLogout()} className=" cursor-pointer flex items-center gap-[2vw] border-b-[0.2vw] px-[1vw] py-[0.5vw] mt-[1vw] phone:px-[3vw] phone:py-[2vw] phone:gap-[7vw]  ">
                <i className=" fas fa-arrow-left text-[2vw] phone:text-[10vw] text-[red] " />
                <span className=" text-[1.3vw] phone:text-[5vw] font-semibold text-[red] ">Logout</span>
            </div>
        </div>
    )
}

export default Settings