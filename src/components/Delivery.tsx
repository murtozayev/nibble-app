import { FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootType, setCheckOut, setShowCart, setShowDelivery } from "../store"

const Delivery = () => {

    const dispatch = useDispatch()

    const { isShowDelivery } = useSelector((state: RootType) => state.nibble)

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        e.stopPropagation()

        const formData = new FormData(e.currentTarget)

        const data = Object.fromEntries(formData.entries())

        localStorage.setItem("address", JSON.stringify(data))

        dispatch(setShowDelivery(false))

        dispatch(setShowCart(false))

        dispatch(setCheckOut(true))

        return alert("We got you")

    }

    return (
        <div onClick={() => setShowDelivery(false)} className={` w-[100vw] h-[100vh] flex items-center justify-center absolute top-0 left-0 z-30 backdrop-brightness-[0.4] transition ease-linear duration-[0.2s] ${isShowDelivery ? "scale-1" : "scale-0"} `}>
            <form onSubmit={onSubmit} className=" w-[25vw] h-[35vw] rounded-[1vw] p-[2vw] bg-[white] tablet:w-[50vw] tablet:h-[65vw] phone:w-[90vw] phone:h-[55vh] phone:p-[4vw] ">
                <h1 className=" text-[1.5vw] font-semibold mb-[1vw] tablet:text-[3vw] tablet:mb-[5vw] phone:text-[6vw] ">Delivery address</h1>
                <label className=" mt-[0.5vw] phone:mt-[2vw] ">
                    <span className=" text-[1vw] tablet:text-[2vw] phone:text-[3vw] font-semibold ">STREET NAME</span>
                    <input name="street" required className=" text-[1.3vw] phone:text-[3vw] tablet:text-[3vw] w-[100%] outline-none px-[0.5vw] border-b-[0.2vw] py-[0.4vw] " placeholder="300 Post street" type="text" />
                </label>
                <label className=" mt-[0.5vw] ">
                    <span className=" text-[1vw] tablet:text-[2vw] phone:text-[3vw] font-semibold ">CITY</span>
                    <input name="city" required className=" text-[1.3vw] phone:text-[3vw] tablet:text-[3vw] w-[100%] outline-none px-[0.5vw] border-b-[0.2vw] py-[0.4vw] " placeholder="300 Post street" type="text" />
                </label>
                <label className=" mt-[0.5vw] ">
                    <span className=" text-[1vw] tablet:text-[2vw] phone:text-[3vw] font-semibold ">STATE</span>
                    <input name="state" required className=" text-[1.3vw] phone:text-[3vw] tablet:text-[3vw] w-[100%] outline-none px-[0.5vw] border-b-[0.2vw] py-[0.4vw] " placeholder="300 Post street" type="text" />
                </label>
                <label className=" mt-[0.5vw] ">
                    <span className=" text-[1vw] tablet:text-[2vw] phone:text-[3vw] font-semibold ">ZIP CODE</span>
                    <input name="zip" required className=" text-[1.3vw] phone:text-[3vw] tablet:text-[3vw] w-[100%] outline-none px-[0.5vw] border-b-[0.2vw] py-[0.4vw] " placeholder="300 Post street" type="text" />
                </label>

                <button className=" phone:h-[10vw] phone:rounded-[2vw] phone:text-[3vw] phone:mt-[10vw] w-[100%] tablet:py-[1.8vw] tablet:text-[2.4vw] tablet:mt-[8vw] py-[0.6vw] mt-[2vw] bg-[purple] text-[white] font-semibold text-[1.4vw] rounded-[0.5vw] hover:bg-[#561b56] ">Confirm</button>
            </form>
        </div>
    )
}

export default Delivery