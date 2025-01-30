import { FoodData } from "../interfaces/interface"
import { useDispatch } from "react-redux"
import { setData, setShowAbout } from "../store"
import $api from "../http/api"

const Foods = (props: FoodData) => {

    const dispatch = useDispatch()

    async function findData(id: string) {
        try {
            const { data } = await $api.get(`/nibble/food/${id}`)

            dispatch(setData(data))

            return dispatch(setShowAbout(true))

        } catch (error) {
            throw new Error("Something went wrong")
        }
    }

    return (
        <div onClick={() => findData(props._id)} className=" w-[25vw] tablet:w-[35vw] tablet:pb-[3vw] flex flex-col gap-[1vw] pb-[2vw] shadow rounded-[1vw] hover:scale-[1.05] transition cursor-pointer phone:w-[30vw] ">
            <img src={props.image} alt="Image" className="w-[25vw] rounded-[1vw] phone:w-[30vw] tablet:w-[35vw]" />
            <div className=" px-[1vw] flex justify-between items-center ">
                <h2 className=" font-bold text-[2vw] ">{props.name}</h2>
                <span className=" text-[blue] bg-[aqua] p-[0.3vw] px-[1vw] rounded-[0.5vw] text-[1vw] ">{props.delivery}$ Delivery</span>
            </div>

            <div className=" flex items-center justify-between px-[1vw] ">
                <div className=" flex items-center gap-[1vw] ">
                    <div className=" flex items-center gap-[0.4vw] ">
                        <i className=" fas fa-star text-[1.2vw] text-[gold] " />
                        <span className=" text-[1.4vw] text-[gold] font-bold ">{props.rate}</span>
                    </div>
                    <div className=" flex items-center gap-[0.4vw] text-slate-500 ">
                        <i className="fa-solid fa-utensils text-[1vw]"></i>
                        <span className=" text-[1vw] font-bold ">{props.category}</span>
                    </div>
                    <div className=" flex items-center text-[1vw] gap-[0.4vw] text-slate-500 ">
                        <i className="fa-solid fa-bicycle"></i>
                        <span className=" font-bold ">{props.time} min</span>
                    </div>
                </div>
                <h3 className=" font-extrabold text-[2vw] text-[green] ">{props.price}.00$</h3>
            </div>
        </div>
    )
}

export default Foods