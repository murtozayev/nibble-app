import { useDispatch, useSelector } from "react-redux"
import { RootType, setShowMap } from "../store"

const Map = () => {

    const dispatch = useDispatch()

    const { showMap } = useSelector((state: RootType) => state.nibble)

    return (
        <div onClick={() => dispatch(setShowMap(false))} className={` w-[100vw] h-[100vh] absolute top-0 left-0 z-[99] backdrop-brightness-[0.5] ${showMap ? "translate-y-0" : "translate-y-[-100%]"} transition duration-[0.2s] ease-linear`}>
            <div onClick={(e) => e.stopPropagation()} className=" tablet:w-[60vw] float-end w-[28vw] h-[100vh] rounded-l-[1vw] bg-[white] relative phone:w-full ">
                <img src="https://i.pinimg.com/564x/8e/bc/30/8ebc30ec0add285cdd01d5038ac3428c.jpg" alt="map" className=" rounded-l-[1vw] brightness-[0.8] " />

                <button onClick={() => dispatch(setShowMap(false))} className=" fas fa-xmark text-[1.3vw] w-[3vw] h-[3vw] rounded-[0.5vw] absolute top-[1vw] right-[1vw] bg-[white] tablet:w-[6vw] tablet:h-[6vw] tablet:rounded-[1vw] tablet:text-[3vw] phone:w-[10vw] phone:h-[10vw] phone:rounded-[2vw] phone:text-[4vw] " />

                <div className=" p-[1vw] tablet:p-[2vw] tablet:mt-[10vw] phone:mt-[10vw] ">
                    <div className=" flex item-center justify-between ">
                        <div className=" flex items-center mt-[1vw] gap-[1vw] tablet:gap-[2vw] ">
                            <i className=" fa-regular fa-clock text-[2vw] text-[red] tablet:text-[4vw] phone:text-[10vw] " />
                            <div>
                                <p className=" text-[1vw] font-semibold tablet:text-[2vw] phone:text-[3vw] ">Eslimated arrival</p>
                                <span className=" text-[2vw] font-bold tablet:text-[4vw] phone:text-[5vw] ">{Math.floor(Math.random() * 50)} min</span>
                            </div>
                        </div>

                        <div className=" flex items-center mt-[1vw] gap-[1vw] tablet:gap-[2vw] ">
                            <i className=" fa-regular fa-map text-[2vw] text-[orange] tablet:text-[4vw] phone:text-[10vw] " />
                            <div>
                                <p className=" text-[1vw] font-semibold tablet:text-[2vw] phone:text-[3vw] ">Distance</p>
                                <span className=" text-[2vw] font-bold tablet:text-[4vw] phone:text-[5vw] ">{Math.floor(Math.random() * 5)} km</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => dispatch(setShowMap(false))} className=" w-[100%] h-[8vh] tablet:h-[6vh] tablet:text-[2.4vw] bg-[purple] text-[white] text-[1.2vw] font-bold rounded-[0.5vw] mt-[4vw] tablet:mt-[14vw] phone:h-[7vh] phone:rounded-[2vw] phone:text-[3vw] phone:mt-[20vw] ">Okay</button>
                </div>
            </div>
        </div>
    )
}

export default Map