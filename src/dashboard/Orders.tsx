import { useDispatch, useSelector } from "react-redux"
import { RootType, setOrder, setShowMap } from "../store"
import { CartType } from "../interfaces/interface";

const Orders = () => {

    const { orders } = useSelector((state: RootType) => state.nibble)

    const dispatch = useDispatch()

    function addOrder(id: string | undefined, item: CartType) {
        if (item._id === id) {
            dispatch(setOrder(item))
            dispatch(setShowMap(true))
        }
    }

    return (
        <div className=" shadow-2xl p-[2vw] float-start w-[80vw] h-[86.1vh] tablet:w-[90vw] overflow-y-scroll phone:w-full phone:shadow-none ">
            <h1 className=" text-[2vw] font-bold mb-[3vw] tablet:text-[4vw] phone:text-[6vw] ">Upcoming orders</h1>

            <div className=" flex flex-wrap gap-[1vw] justify-evenly phone:gap-[4vw] ">
                {orders && orders.map((item: CartType, index: number) => (
                    <div key={index} className=" w-[23vw] h-[13vw] rounded-[1vw] p-[1vw] bg-slate-100 phone:h-auto ">
                        <div className=" flex justify-between items-center ">
                            <h1 className=" text-[1.5vw] font-bold ">{item.productName}</h1>
                            <p className=" text-[1vw] font-semibold ">#{Number(item.author.slice(0, 2)) * Math.floor(Math.random() * 10000)}</p>
                        </div>

                        <div className=" flex items-center mt-[1vw] justify-between ">
                            <i className=" fa-regular fa-clock text-[2vw] " />
                            <div>
                                <p className=" text-[1vw] font-semibold ">Eslimated arrival</p>
                                <span className=" text-[2vw] font-bold ">{Math.floor(Math.random() * 50)} min</span>
                            </div>
                            <button onClick={() => addOrder(item._id, item)} className=" text-[1vw] px-[1vw] py-[0.5vw] rounded-[0.5vw] bg-[purple] text-[white] ">Track</button>
                        </div>

                        <input className=" w-[100%] mt-[2vw] " value={Math.floor(Math.random() * 100)} type="range" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders