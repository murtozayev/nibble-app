import Carousel from "../components/Carousel"
import { Data, FoodData } from "../interfaces/interface"
import Categories from "../components/Categories"
import { useGetAxios } from "../hook/useAxios"
import Restaurants from "../components/Restaurants"
import Foods from "../components/Foods"
import { useDispatch } from "react-redux"
import { setCategory, setShowCategory } from "../store"
import $api from "../http/api"

const Home = () => {

    const categories = useGetAxios("/nibble/categories")
    const foods = useGetAxios("/nibble/foods")
    const dispatch = useDispatch()

    async function postCategory(categor: string) {

        try {
            const { data } = await $api.get(`/nibble/category?category=${categor}`);

            dispatch(setCategory(data))

            dispatch(setShowCategory(true))

        } catch (error) {
            console.error("Xatolik:", error);
        }
    }

    return (
        <div className=" shadow-2xl p-[2vw] float-start w-[80vw] h-[86.1vh] overflow-y-scroll tablet:w-[90vw] phone:w-full phone:shadow-none ">
            <Carousel />

            <h1 className=" text-[2vw] font-bold mt-[3vw] tablet:mt-[7vw] tablet:text-[4vw] phone:text-[6vw] phone:mt-[5vw] ">Explore Categories</h1>

            <div className=" flex w-[100%] gap-[1vw] flex-nowrap mt-[2vw] phone:mt-[4vw] phone:gap-[3vw] ">
                {categories.data && categories.data.map((item: Data, index: number) => {
                    return <Categories onclick={() => postCategory(item._id)} key={index} count={item.count} _id={item._id} />
                })}
            </div>

            <h1 className=" text-[2vw] font-bold mt-[3vw] tablet:mt-[7vw] tablet:text-[4vw] phone:text-[6vw] phone:mt-[5vw] ">Restaurants Nearby</h1>

            <Restaurants />

            <h1 className=" text-[2vw] font-bold mt-[3vw] tablet:mt-[7vw] tablet:text-[4vw] phone:text-[6vw] phone:mt-[5vw] ">Start shopping now</h1>

            <div className=" mt-[3vw] flex flex-wrap gap-[0.5vw] tablet:gap-[4vw] tablet:justify-evenly phone:justify-between phone:gap-[2vw] ">
                {foods.data && foods.data.map((item: FoodData, index) => (
                    <Foods key={index} {...item} />
                ))}
            </div>

        </div>
    )
}

export default Home