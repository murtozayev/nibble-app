import Restaurants from "../components/Restaurants"
import Foods from "../components/Foods"
import { FoodData } from "../interfaces/interface"
import { useGetAxios } from "../hook/useAxios"

const Explore = () => {

    const foods = useGetAxios("/nibble/foods")

    return (
        <div className=" shadow-2xl p-[2vw] float-start w-[80vw] h-[86.1vh] tablet:w-[90vw] overflow-y-scroll phone:shadow-none phone:w-full ">
            <h1 className=" text-[2vw] font-bold mt-[3vw] tablet:mt-[7vw] tablet:text-[4vw] phone:text-[6vw] ">Restaurants Nearby</h1>

            <Restaurants />

            <h1 className=" text-[2vw] font-bold mt-[3vw] tablet:mt-[7vw] tablet:text-[4vw] phone:text-[6vw] phone:mt-[5vw] ">Explore foods</h1>

            <div className=" mt-[3vw] flex flex-wrap gap-[0.5vw] tablet:gap-[1vw] tablet:justify-evenly phone:justify-between phone:gap-[2vw] ">
                {foods.data && foods.data.map((item: FoodData, index: number) => (
                    <Foods key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Explore