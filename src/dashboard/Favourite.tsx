import Foods from "../components/Foods"
import { useGetAxios } from "../hook/useAxios"
import { FoodData } from "../interfaces/interface"

const Favourite = () => {

    const foods = useGetAxios("/nibble/favourites")

    return (
        <div className=" shadow-2xl p-[2vw] float-start w-[80vw] h-[86.1vh] tablet:w-[90vw] overflow-y-scroll phone:shadow-none phone:w-full ">
            <h1 className=" text-[2vw] font-bold mb-[3vw] tablet:mt-[7vw] tablet:text-[4vw] phone:text-[6vw] ">Your favourites</h1>

            <div className=" mt-[3vw] flex flex-wrap gap-[0.5vw] tablet:gap-[1vw] tablet:justify-evenly phone:justify-between phone:gap-[2vw] ">
                {foods.data && foods.data.map((item: FoodData, index) => (
                    <Foods key={index} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Favourite