import { useDispatch, useSelector } from "react-redux"
import { RootType, setOrders, setShowCart, setShowDelivery } from "../store"
import { useGetAxios } from "../hook/useAxios"
import { CartType } from "../interfaces/interface"

const Cart = () => {

    const dispatch = useDispatch()

    const { isShowCart } = useSelector((state: RootType) => state.nibble)

    const { data } = useGetAxios("/nibble/cart")

    const totalPrice = data?.reduce((acc: number, item: CartType) => acc + item.productPrice, 0) || 0

    const delivery = data.reduce((deliver: number, item: CartType) => Math.floor(deliver + item.productPrice / 3), 0)

    function checkout() {
        dispatch(setShowDelivery(true))

        dispatch(setOrders(data))
    }

    return (
        <div onClick={() => dispatch(setShowCart(false))} className={`w-[100%] h-[100vh] backdrop-brightness-[0.5] absolute top-0 left-0 ${isShowCart ? "translate-y-0" : "translate-y-[-130%]"} transition duration-[0.3s] z-[10] `}>
            <div onClick={(e) => e.stopPropagation()} className=" float-end w-[27vw] h-[100vh] rounded-l-[1vw] bg-[white] p-[2vw] tablet:p-[4vw] tablet:w-[60vw] phone:w-full rounded-none ">
                <div className=" flex items-center justify-between ">
                    <span className=" flex items-center gap-[0.4vw] text-[1vw] tablet:text-[3vw] phone:text-[4vw] "><h1 className=" text-[1.7vw] tablet:text-[4vw] font-bold phone:text-[6vw] ">My Cart</h1>({data.length} items)</span>
                    <button onClick={() => dispatch(setShowCart(false))} className=" fas fa-xmark w-[3vw] h-[3vw] text-[1vw] shadow-lg rounded-[1vw] tablet:w-[7vw] tablet:h-[7vw] tablet:text-[3vw] phone:w-[10vw] phone:h-[10vw] phone:rounded-[2vw] phone:text-[4vw] " />
                </div>

                <h1 className=" mt-[2vw] font-bold text-[2vw] tablet:mt-[4vw] tablet:text-[4vw] phone:text-[5vw] ">Food Hot <i className=" fas fa-fire text-[red] " /></h1>

                <div className=" mt-[2vw] tablet:mt-[10vw] flex flex-col gap-[1vw] overflow-y-auto h-[20vw] shadow rounded-[1vw] p-[0.5vw] tablet:h-[50vw]  phone:h-[80vw] phone:mt-[7vw]">
                    {data && data.map((item: CartType, index: number) => (
                        <div key={index} className=" flex items-center justify-between ">
                            <img className=" w-[9vw] rounded-[1vw] tablet:w-[20vw] phone:w-[35vw] " src={item.productImage} alt="Image" />
                            <span className=" text-[1vw] font-bold tablet:text-[2vw] phone:text-[3vw] ">{item.productQuantity}X</span>
                            <span className=" text-[1vw] font-semibold text-[red] phone:text-[2vw] ">
                                <h1 className=" text-[1.4vw] tablet:text-[2.4vw] phone:text-[4vw] font-bold ">{item.productName}</h1>
                                ${item.productPrice}.00
                            </span>

                            <button className=" fas fa-trash text-[red] text-[1.5vw] w-[3vw] h-[3vw] rounded-[0.5vw] bg-red-200 border-none tablet:w-[5vw] tablet:h-[5vw] tablet:text-[2.5vw] phone:w-[10vw] phone:h-[10vw] phone:rounded-[2vw] phone:text-[3vw] " />
                        </div>
                    ))}
                </div>

                <div className=" mt-[2vw] flex  items-center justify-between tablet:mt-[7vw] phone:mt-[10vw] ">
                    <i className=" fas fa-bicycle text-[goldenrod] bg-yellow-200 px-[3vw] py-[1.4vw] text-[3vw] rounded-[1vw] tablet:px-[8vw] tablet:py-[4vw] tablet:text-[6vw] phone:text-[10vw] phone:px-[10vw] phone:py-[3vw] " />
                    <h1 className=" text-[orange] text-[1.4vw] tablet:text-[2.5vw] font-bold phone:text-[5vw] ">Delivery {delivery}$</h1>
                </div>

                <button onClick={checkout} className=" w-[100%] h-[3.5vw] bg-[purple] text-[white] font-semibold phone:text-[4vw] phone:h-[12vw] phone:rounded-[2vw] phone:mt-[16vw] text-[1.2vw] mt-[2vw] tablet:mt-[10vw] rounded-[0.5vw] tablet:h-[8vw] tablet:text-[2.4vw] ">Checkout (${totalPrice}.00)</button>
            </div>
        </div>
    )
}

export default Cart