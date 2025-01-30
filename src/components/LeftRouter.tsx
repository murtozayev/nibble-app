import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setLoading } from "../store";
import $axios from "../http/axios";

const LeftRouter = () => {


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
        <div className=" flex flex-col gap-[0.2vw] tablet:gap-[1vw] tablet:mt-[5vw] phone:flex-row phone:justify-between phone:items-center ">
            <NavLink
                to="/home"
                className={({ isActive }) =>
                    isActive
                        ? "bg-[#503E9D] text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                        : "text-slate-600 hover:bg-[#503E9D] hover:text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                }
            >
                <i className="fas fa-home text-[1.2vw] tablet:text-[2vw] phone:text-[4vw]" />
                <span className="text-[1.1vw] font-light tablet:hidden phone:hidden">Home</span>
            </NavLink>
            <NavLink
                to="/explore"
                className={({ isActive }) =>
                    isActive
                        ? "bg-[#503E9D] text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                        : "text-slate-600 hover:bg-[#503E9D] hover:text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                }
            >
                <i className="fas fa-table text-[1.2vw] tablet:text-[2vw] phone:text-[4vw]" />
                <span className="text-[1.1vw] font-light tablet:hidden phone:hidden">Explore</span>
            </NavLink>
            <NavLink
                to="/favourites"
                className={({ isActive }) =>
                    isActive
                        ? "bg-[#503E9D] text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                        : "text-slate-600 hover:bg-[#503E9D] hover:text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                }
            >
                <i className="fa-regular fa-bookmark text-[1.2vw] tablet:text-[2vw] phone:text-[4vw]" />
                <span className="text-[1.1vw] font-light tablet:hidden phone:hidden">Favourites</span>
            </NavLink>
            <NavLink
                to="/orders"
                className={({ isActive }) =>
                    isActive
                        ? "bg-[#503E9D] text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                        : "text-slate-600 hover:bg-[#503E9D] hover:text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                }
            >
                <i className="fas fa-file text-[1.2vw] tablet:text-[2vw] phone:text-[4vw]" />
                <span className="text-[1.1vw] font-light tablet:hidden phone:hidden">Orders</span>
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    isActive
                        ? "bg-[#503E9D] text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                        : "text-slate-600 hover:bg-[#503E9D] hover:text-white w-[100%] phone:w-[12vw] phone:h-[12vw] phone:items-center phone:justify-center phone:rounded-[3vw] h-[3vw] tablet:h-[7vw] tablet:w-[7vw] tablet:items-center tablet:justify-center tablet:rounded-[2vw] flex items-center px-[2vw] gap-[2vw] rounded-[0.5vw]"
                }
            >
                <i className="fas fa-gear text-[1.2vw] tablet:text-[2vw] phone:text-[4vw]" />
                <span className="text-[1.1vw] font-light tablet:hidden phone:hidden">Settings</span>
            </NavLink>
            <button onClick={onLogout} className=" hidden phone:block fas fa-door-open text-[red] text-[5vw] " />
            <h1 className=" text-[8vw] w-[10vw] h-[10vw] hidden phone:block tablet:w-[7vw] tablet:h-[7vw] text-center text-white rounded-full bg-[purple]  data && ">{data.name.charAt(0)}</h1>
        </div>
    );
};

export default LeftRouter;
