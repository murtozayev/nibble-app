import { Data } from "../interfaces/interface";

const Categories = ({ _id, count, onclick }: Data) => {
    return (
        <div onClick={onclick} className=" flex-shrink-0 w-[10vw] h-[10vw] bg-slate-200 rounded-[1vw] flex flex-col items-center justify-center gap-[0.3vw] cursor-pointer tablet:w-[17vw] tablet:h-[17vw] tablet:rounded-[2vw] phone:w-[20vw] phone:h-[20vw] phone:rounded-[3vw] ">
            <i className=" fas fa-info text-[2vw] text-[red] bg-red-300 w-[3vw] h-[3vw] flex items-center justify-center rounded-full tablet:w-[7vw] tablet:h-[7vw] tablet:text-[4vw] phone:w-[10vw] phone:h-[10vw] phone:text-[4vw] " />
            <h1 className=" text-[rgb(0,0,255)] font-bold text-[1.5vw] tablet:text-[3vw] phone:text-[3vw] ">{_id}</h1>
            <p className=" text-[purple] text-[1vw] font-bold tablet:text-[2vw] phone:text-[2vw] ">{count}+ options</p>
        </div>
    );
};

export default Categories
