import { useDispatch } from "react-redux"
import { useGetAxios } from "../hook/useAxios"
import $api from "../http/api"
import { Data } from "../interfaces/interface"
import { setAddRes, setShowRestaurant } from "../store"

const Restaurants = () => {
    const { data } = useGetAxios("/nibble/restoraunts")

    const dispatch = useDispatch()

    async function findRes(id: string) {
        try {
            const res = $api.get("/nibble/restaurant?rest=" + id)

            dispatch(setAddRes((await res).data))

            return dispatch(setShowRestaurant(true))

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className=" flex mt-[3vw] flex-wrap justify-between cursor-pointer tablet:mt-[6vw]  ">
            {data && data.map((item: Data, index: number) => (
                <div onClick={() => findRes(item._id)} key={index} className=" w-[24vw] h-[10vw] gap-[2vw] bg-slate-100 rounded-[2vw] flex justify-center items-center flex-shrink-0 tablet:w-[27vw] tablet:h-[15vw] phone:w-[30vw] phone:h-[15vw] ">
                    <i className=" text-[yellow] text-[4vw] fas fa-utensils tablet:text-[7vw] phone:text-[8vw] " />
                    <div className=" flex flex-col ">
                        <span className=" text-[1vw] font-bold text-[gold] tablet:text-[2vw] phone:text-[2vw] text-ellipsis ">{decodeURIComponent(item._id)}</span>
                        <div className=" text-[orange] ">
                            <i className=" fas fa-person-walking text-[1.3vw] phone:text-[2vw] " />
                            <span className=" text-[1vw] font-semibold tablet:text-[1.4vw] phone:text-[2vw] "> {item.count}km away</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Restaurants