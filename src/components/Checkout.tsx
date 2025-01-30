import { useDispatch, useSelector } from "react-redux"
import { RootType, setCheckOut } from "../store"

const Checkout = () => {

    const dispatch = useDispatch()

    const { checkout } = useSelector((state: RootType) => state.nibble)

    function onClick() {
        alert("Thank you too much for your shopping")

        return dispatch(setCheckOut(false))
    }

    return (
        <div onClick={() => dispatch(setCheckOut(false))} className={` w-[100vw] h-[100vh] absolute top-0 left-0 backdrop-brightness-[0.5] z-40 ${checkout ? "scale-1" : "scale-0"} transition duration-[0.2s] ease-linear `}>
            <div onClick={(e) => e.stopPropagation()} className=" float-end w-[27vw] h-[100vh] bg-[white] rounded-l-[1vw] p-[2vw] tablet:w-[60vw] tablet:p-[3vw] phone:rounded-none phone:w-full ">
                <div className=" flex iztems-center justify-between ">
                    <h1 className=" text-[1.5vw] font-bold tablet:text-[4vw] phone:text-[7vw] ">Checkout</h1>
                    <button onClick={() => dispatch(setCheckOut(false))} className="fas fa-xmark w-[3vw] h-[3vw] tablet:w-[5vw] tablet:h-[4vw] tablet:rounded-[1vw] tablet:text-[2vw] rounded-[0.5vw] text-[1.5vw] bg-slate-100 phone:w-[10vw] phone:h-[10vw] phone:rounded-[2vw] phone:text-[4vw] " />
                </div>

                <h1 className=" text-[1.3vw] font-semibold mt-[3vw] tablet:mt-[6vw] tablet:text-[2.5vw] phone:text-[6vw] ">Payment methods</h1>

                <div className=" flex items-center justify-between my-[2vw] phone:my-[4vw] ">
                    <button className="fa-regular fa-credit-card w-[7vw] phone:w-[30vw] phone:h-[15vw] phone:rounded-[3vw] phone:text-[7vw] tablet:w-[16vw] tablet:h-[9vw] tablet tablet:text-[4vw] h-[4vw] text-[2vw] text-[white] rounded-[0.5vw] bg-[purple] " />
                    <button className="fas fa-money-bill w-[7vw] phone:w-[30vw] phone:h-[15vw] phone:rounded-[3vw] phone:text-[7vw] tablet:w-[16vw] tablet:h-[9vw] tablet tablet:text-[4vw] h-[4vw] text-[2vw] text-[white] rounded-[0.5vw] bg-[purple] " />
                    <button className="fa-brands fa-paypal w-[7vw] phone:w-[30vw] phone:h-[15vw] phone:rounded-[3vw] phone:text-[7vw] tablet:w-[16vw] tablet:h-[9vw] tablet tablet:text-[4vw] h-[4vw] text-[2vw] text-[white] rounded-[0.5vw] bg-[purple] " />
                </div>

                <h1 className=" text-[1.3vw] font-semibold  tablet:text-[2.5vw] phone:text-[5vw] ">My cards</h1>

                <img src="https://cdn-icons-png.flaticon.com/512/9063/9063313.png" className=" w-[100%] " alt="Card" />

                <button onClick={onClick} className=" w-[100%] h-[4vw] bg-[purple] text-[white] text-[1.3vw] font-bold rounded-[0.6vw] tablet:h-[8vw] tablet:text-[2.3vw] tablet:mt-[10vw] phone:h-[6vh] phone:text-[3vw] ">Confirm payment</button>
            </div>
        </div>
    )
}

export default Checkout