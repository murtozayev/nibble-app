import { useDispatch, useSelector } from "react-redux"
import { RootType, setData, setSearch, setSearchTerm, setShowAbout, setShowCart, setShowMap, setTabletSearch } from "../store"
import { useGetAxios } from "../hook/useAxios"
import { useEffect, useState } from "react"
import $api from "../http/api";
import { FoodData } from "../interfaces/interface";
import logo from "../image/logo-food.png"

const Navbar = () => {
    const dispatch = useDispatch();
    const [search, setSear] = useState("");

    const [showMenu, setShowMenu] = useState(false)

    const { data } = useGetAxios("/nibble/findfood?search=" + search);

    useEffect(() => {
        if (search.length === 0 || !data) {
            return;
        }
        dispatch(setSearchTerm(data));
    }, [data, search]);

    const { searchTerm, tabletSearch } = useSelector((state: RootType) => state.nibble)

    const findData = async (id: string) => {
        try {
            const { data } = await $api.get(`/nibble/food/${id}`);

            dispatch(setData(data));

            dispatch(setShowAbout(true));

        } catch (error) {
            console.error("Something went wrong", error);
        }
    };


    return (
        <nav className="p-[1.5vw] flex gap-[1vw] items-center float-right tablet:w-[90vw] phone:w-full ">


            <button onClick={() => setShowMenu(true)} className=" fas fa-bars text-[white] hidden tablet:block w-[5vw] h-[5vw] rounded-[1vw] bg-[purple] " />


            {/* Top Menu */}

            <div className=" hidden phone:flex justify-between w-full items-center ">
                <div className=" flex items-center gap-[2vw] ">
                    <button onClick={() => setShowMenu(true)} className=" fas fa-bars w-[10vw] h-[10vw] text-[3vw] rounded-[2vw] bg-[purple] text-[white] " />
                    <div className=" flex items-center gap-[1vw] ">
                        <img className=" w-[12vw] " src={logo} alt="" />
                        <h1 className=" text-[5vw] font-extrabold ">Nibble</h1>
                    </div>
                </div>
                <div className=" flex items-center gap-[2vw] ">
                    <button onClick={() => dispatch(setTabletSearch(true))} className=" fas fa-magnifying-glass w-[10vw] h-[10vw] rounded-[2vw] bg-slate-100 text-[3vw] " />
                    <button onClick={() => dispatch(setShowCart(true))} className="fa-solid fa-cart-shopping w-[10vw] h-[10vw] bg-[purple] text-white rounded-[2vw] text-[3vw] " />
                </div>
            </div>

            {/* Top Menu */}

            {/* Responsive Search */}

            <div className={` hidden phone:block tablet:block w-[100vw] h-[100vh] bg-[white] absolute z-[10] top-0 left-0 p-[2vw] ${tabletSearch ? "scale-1" : "scale-0"} transition duration-[0.2s] `}>
                <div className=" flex items-center gap-[3vw] ">
                    <button onClick={() => dispatch(setTabletSearch(false))} className=" fas fa-arrow-left text-[4vw] " />
                    <input
                        value={search}
                        onChange={(e) => setSear(e.target.value)}
                        type="text"
                        placeholder="Search"
                        className="px-[4vw] rounded-[1vw] outline-none py-[2vw] w-full text-[3vw] bg-slate-200"
                    />
                    <button className=" fas fa-magnifying-glass relative text-[4vw] " />
                </div>


                <div className=" p-[2vw] float-start w-full overflow-y-scroll">

                    {searchTerm && searchTerm.length === 0 && (
                        <div className=" flex flex-col justify-center items-center gap-[1vw] mt-[8vw] ">
                            <i className="fa-solid fa-face-sad-tear text-[10vw] text-[orange]" />
                            <h1 className=" text-[2vw] font-bold text-[red] ">We don't found any food</h1>
                        </div>
                    )}

                    <div className=" flex flex-wrap gap-[2vw] justify-evenly ">

                        {searchTerm && searchTerm.map((item: FoodData) => (
                            <div key={item._id} onClick={() => findData(item._id)} className=" w-[35vw] flex flex-col gap-[1vw] pb-[2vw] shadow rounded-[1vw] hover:scale-[1.05] transition cursor-pointer ">

                                <img src={item.image} alt="Image" className="w-[35vw] rounded-[1vw]" />
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
                </div >

            </div>

            {/* /Responsive Search */}


            {/* Responsive  Menu*/}

            <div className={` hidden tablet:flex phone:flex flex-col gap-[4vw] w-[90vw] h-screen absolute top-0 right-0 bg-[white] z-[20] p-[2vw] ${showMenu ? "translate-y-0" : "translate-y-[-100%]"} transition duration-[0.2s] phone:w-full `}>

                <button onClick={() => setShowMenu(false)} className=" fas fa-xmark w-[7vw] h-[7vw] bg-[purple] text-[white] rounded-[2vw] text-[3vw] " />

                <button onClick={() => dispatch(setShowMap(true), setShowMenu(false))} className="text-[purple] flex items-center gap-[3vw]">
                    <i className="fa-solid fa-crosshairs text-[4vw]" />
                    <span className="text-[3vw]">San Francisco, California</span>
                </button>
                <button className="text-[red] flex items-center gap-[3vw]">
                    <i className="fa-solid fa-bag-shopping text-[4vw]" />
                    <span className="text-[3vw]">Pick up</span>
                </button>
                <button className="text-[gold] flex items-center gap-[3vw]">
                    <i className="fa-solid fa-ticket text-[4vw]" />
                    <span className="text-[3vw]">#kasj6{Math.floor(Math.random() * 30)}</span>
                </button>
            </div>

            {/* Responsive  Menu*/}

            <div className="flex items-center gap-[2vw] tablet:hidden phone:hidden ">
                <button onClick={() => dispatch(setShowMap(true))} className="text-[purple] flex items-center gap-[0.5vw]">
                    <i className="fa-solid fa-crosshairs text-[1.5vw]" />
                    <span className="text-[1vw]">San Francisco, California</span>
                </button>
                <button className="text-[red] flex items-center gap-[0.5vw]">
                    <i className="fa-solid fa-bag-shopping text-[1.5vw]" />
                    <span className="text-[1vw]">Pick up</span>
                </button>
                <button className="text-[gold] flex items-center gap-[0.5vw]">
                    <i className="fa-solid fa-ticket text-[1.5vw]" />
                    <span className="text-[1vw]">#kasj6{Math.floor(Math.random() * 30)}</span>
                </button>
            </div>

            <div className="flex items-center tablet:hidden phone:hidden ">
                <button className="fas fa-magnifying-glass relative left-[2vw] text-[1vw]" />
                <input
                    onFocus={() => dispatch(setSearch(true))}
                    value={search}
                    onChange={(e) => setSear(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="px-[3vw] rounded-[1vw] outline-none py-[0.8vw] text-[1vw] bg-slate-200 w-[25vw]"
                />
            </div>

            <div className="flex items-center gap-[2vw] tablet:ml-[68vw] phone:hidden ">
                <button onClick={() => dispatch(setTabletSearch(true))} className=" fas fa-magnifying-glass text-[2vw] w-[7vw] h-[7vw] hidden tablet:block rounded-[1vw] bg-slate-100 " />
                <button onClick={() => dispatch(setShowCart(true))} className="fa-solid fa-cart-shopping p-[1vw] text-[1.5vw] bg-[purple] text-white rounded-[0.5vw]" />
            </div>
        </nav>
    );
};

export default Navbar;
