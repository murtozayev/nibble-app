import { useDispatch, useSelector } from "react-redux"
import { RootType, setData, setShowAbout, setShowRestaurant } from "../store"
import { FoodData } from "../interfaces/interface"
import $api from "../http/api"

const Restaurant = () => {

    const { restaurant } = useSelector((state: RootType) => state.nibble)

    const dispatch = useDispatch()

    const findData = async (id: string) => {
        try {
            const { data } = await $api.get(`/nibble/food/${id}`);

            dispatch(setData(data));

            dispatch(setShowAbout(true));

        } catch (error) {
            console.error("Something went wrong", error);
        }
    };

    console.log(restaurant);

    return (
        <div className=" shadow-2xl p-[2vw] float-start w-[80vw] h-[86.1vh] tablet:w-[90vw] overflow-y-scroll phone:w-full phone:shadow-none ">
            <button onClick={() => dispatch(setShowRestaurant(false))} className=" tablet:text-[3vw] flex items-center gap-[1vw] text-[1.5vw] mb-[2vw] hover:underline phone:text-[4vw] ">
                <i className=" fas fa-arrow-left " />
                <span className=" font-semibold ">Back</span>
            </button>

            <div className=" flex flex-wrap gap-[0.5vw] tablet:gap-[1vw] tablet:justify-evenly phone:justify-between phone:gap-[1vw] ">
                {restaurant && restaurant.map((item: FoodData) => (
                    <div key={item._id} onClick={() => findData(item._id)} className=" w-[25vw] tablet:w-[35vw] flex flex-col gap-[1vw] pb-[2vw] shadow rounded-[1vw] hover:scale-[1.05] transition cursor-pointer phone:w-[30vw] ">
                        <img src={item.image} alt="Image" className="w-[25vw] rounded-[1vw] phone:w-[30vw] tablet:w-[35vw] " />
                        <div className=" px-[1vw] flex justify-between items-center ">
                            <h2 className=" font-bold text-[2vw] ">{item.name}</h2>
                            <span className=" text-[blue] bg-[aqua] p-[0.3vw] px-[1vw] rounded-[0.5vw] text-[1vw] ">{item.delivery}$ Delivery</span>
                        </div>

                        <div className=" flex items-center justify-between px-[1vw] ">
                            <div className=" flex items-center gap-[1vw] ">
                                <div className=" flex items-center gap-[0.4vw] ">
                                    <i className=" fas fa-star text-[1.2vw] text-[gold] " />
                                    <span className=" text-[1.4vw] text-[gold] font-bold ">{item.rate}</span>
                                </div>
                                <div className=" flex items-center gap-[0.4vw] text-slate-500 ">
                                    <i className="fa-solid fa-utensils text-[1vw]"></i>
                                    <span className=" text-[1vw] font-bold ">{item.category}</span>
                                </div>
                                <div className=" flex items-center text-[1vw] gap-[0.4vw] text-slate-500 ">
                                    <i className="fa-solid fa-bicycle"></i>
                                    <span className=" font-bold ">{item.time} min</span>
                                </div>
                            </div>
                            <h3 className=" font-extrabold text-[2vw] text-[green] ">{item.price}.00$</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurant