import { useDispatch, useSelector } from "react-redux"
import { RootType, setShowAbout } from "../store"
import $api from "../http/api"

const AboutFood = () => {
    const { data, isShowAbout } = useSelector((state: RootType) => state.nibble)

    const dispatch = useDispatch()
    async function addToCart(id: string | undefined) {
        try {
            const { data } = await $api.post("/nibble/add-to-cart/" + id)

            alert(data)

            dispatch(setShowAbout(false))
        } catch (error) {
            throw new Error("We don't add to cart this element")
        }
    }

    async function addToFav(id: string | undefined) {
        try {
            const res = await $api.put(`/nibble/favourite/${id}`)

            if (res.data.favourite) {
                alert("Added to favourite")
            } else {
                alert("Removed from favourites")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div onClick={() => dispatch(setShowAbout(false))} className={`w-[100vw] h-[100vh] absolute top-0 left-0 z-40 backdrop-brightness-[0.4] flex items-center transition duration-[0.2s] justify-center ease-linear ${isShowAbout ? "scale-1" : "scale-0"} `}>
            <div onClick={(e) => e.stopPropagation()} className=" w-[22vw] h-[35vw] tablet:w-[50vw] tablet:h-[70vw] bg-[white] rounded-[1vw] relative z-11 phone:w-full phone:h-screen ">
                <img className="rounded-t-[1vw] brightness-[0.8]" src={data && data.image} alt="Image" />
                <div className=" px-[1vw] flex items-center justify-between absolute top-[1vw] w-[100%] tablet:px-[3vw] phone:px-[5vw] ">
                    <button onClick={() => addToFav(data && data._id)} className={` fa-regular fa-heart w-[3vw] h-[3vw] tablet:w-[6vw] tablet:h-[6vw] tablet:rounded-[2vw] tablet:text-[3vw] phone:w-[10vw] phone:h-[10vw] phone:rounded-[2vw] phone:text-[4vw] rounded-[0.5vw] text-[1.5vw] bg-[blue] ${data && data.favourite ? "text-[red]" : "text-[white]"} `} />
                    <button onClick={() => dispatch(setShowAbout(false))} className=" fas fa-xmark w-[3vw] h-[3vw] tablet:w-[6vw] tablet:h-[6vw] tablet:rounded-[2vw] tablet:text-[3vw] phone:w-[10vw] phone:h-[10vw] phone:rounded-[2vw] phone:text-[4vw] rounded-[0.5vw] text-[1.5vw] bg-[white] " />
                </div>

                <div className=" p-[1.5vw] tablet:p-[3vw] phone:p-[3vw] ">
                    <h1 className="font-bold text-[2vw] tablet:text-[4vw] phone:text-[7vw] ">{data && data.name}</h1>
                    <p className=" text-[0.7vw] mt-[0.5vw] tablet:text-[1.4vw] tablet:mt-[1vw] phone:text-[3vw] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a hic totam tempore</p>

                    <div className=" mt-[1vw] flex justify-between items-center phone:mt-[6vw] ">
                        <h2 className=" text-[red] font-bold text-[1vw] tablet:text-[2vw] phone:text-[4vw] ">Rice choice</h2>
                        <h2 className=" text-[white] bg-[purple] text-[0.8vw] p-[0.4vw] rounded-[0.3vw] tablet:text-[1.6vw] tablet:p-[0.8vw] phone:text-[3vw] phone:py-[1vw] phone:px-[2vw] ">Optional</h2>
                    </div>

                    <div className=" flex items-center gap-[2vw] mt-[0.7vw] tablet:mt-[1.4vw] tablet:gap-[4vw] phone:gap-[6vw] phone:mt-[3vw] ">
                        <input type="radio" name="rice" className=" w-[1.3vw] h-[1.3vw] phone:w-[4vw] phone:h-[4vw] tablet:w-[2.6vw] tablet:h-[2.6vw] " />
                        <h4 className=" text-[1vw] phone:text-[3vw] tablet:text-[2vw] font-semibold text-[purple] ">Basmati rice</h4>
                    </div>
                    <div className=" flex items-center gap-[2vw] mt-[0.7vw] tablet:mt-[1.4vw] tablet:gap-[4vw] phone:gap-[6vw] phone:mt-[3vw] ">
                        <input type="radio" name="rice" className=" w-[1.3vw] h-[1.3vw] phone:w-[4vw] phone:h-[4vw] tablet:w-[2.6vw] tablet:h-[2.6vw] " />
                        <h4 className=" text-[1vw] phone:text-[3vw] tablet:text-[2vw] font-semibold text-[purple] ">Brown rice</h4>
                    </div>
                    <div className=" flex items-center gap-[2vw] mt-[0.7vw] tablet:mt-[1.4vw] tablet:gap-[4vw] phone:gap-[6vw] phone:mt-[3vw] ">
                        <input type="radio" name="rice" className=" w-[1.3vw] h-[1.3vw] phone:w-[4vw] phone:h-[4vw] tablet:w-[2.6vw] tablet:h-[2.6vw] " />
                        <h4 className=" text-[1vw] phone:text-[3vw] tablet:text-[2vw] font-semibold text-[purple] ">Bulgur Pilaf</h4>
                    </div>
                    <button onClick={() => addToCart(data && data?._id)} className=" w-[100%] h-[3vw] tablet:h-[6vw] tablet:text-[3vw] tablet:rounded-[1.2vw] text-[1.3vw] font-semibold text-[white] bg-[purple] rounded-[0.6vw] mt-[3vw] phone:h-[10vw] phone:rounded-[2vw] phone:mt-[40vw] phone:text-[3vw] ">Add ${data && data.price}.00</button>
                </div>
            </div>

        </div>
    )
}

export default AboutFood