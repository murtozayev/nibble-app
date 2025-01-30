import { useDispatch } from "react-redux"
import leftImage from "../image/Register.png"
import { setAuthHeader, setLoading } from "../store"
import { FormEvent, useState } from "react"
import $axios from "../http/axios"
import { useNavigate } from "react-router-dom"
import { AxiosError } from "axios"

const Login = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    async function loginData(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()
        setLoading(true)

        try {
            const { data } = await $axios.post("/auth/login", { email, password })

            console.log(data);

            localStorage.setItem("accessToken", data.accessToken)

            localStorage.setItem("data", JSON.stringify(data.user))

            navigate("/dashboard/home")

            window.location.reload()
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                localStorage.removeItem("accessToken");
                alert(error.response.data.message || "Something went wrong")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className=" flex justify-center tablet:flex-col phone:flex-col ">
            <img src={leftImage} className=" w-[30vw] h-[100vh] tablet:w-[100vw] tablet:h-[40vh] phone:w-full phone:h-[40vh] " alt="Logo" />

            <div className=" p-[8vw] h-[100vh] w-[50vw] tablet:w-[100vw] tablet:h-[60vh] phone:w-full phone:h-[60vh] ">
                <form onSubmit={loginData}>
                    <h1 className=" font-bold text-[2vw] tablet:text-[5vw] phone:text-[6vw] ">Welcome!</h1>
                    <p className="text-[1vw] tablet:text-[2vw] phone:text-[2vw]">Sign in to your account to continue </p>

                    <section className=" mt-[3vw] flex flex-col flex-shrink-0 gap-[3vw] ">
                        <aside className=" flex items-center gap-[1vw] ">
                            <i className="fa-solid fa-message p-[1vw] bg-[aqua] rounded-[0.4vw] text-[1vw] text-[blue] tablet:text-[4vw]  tablet:p-[2vw]  phone:text-[5vw] phone:p-[2vw] " />
                            <label className=" flex flex-col font-semibold ">
                                <span className=" text-[1vw] tablet:text-[3vw] phone:text-[3vw] ">Email</span>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className=" text-[1.2vw] tablet:text-[3.2vw] border-b-[0.2vw] w-[25vw] outline-none p-[0.2vw] px-[1vw] tablet:w-[75vw] phone:w-[75vw] phone:text-[3.2vw] " type="email" placeholder="johndoe@gmail.com" />
                            </label>
                        </aside>
                        <aside className=" flex items-center gap-[1vw] ">
                            <i className=" tablet:text-[4vw] phone:text-[5vw] phone:p-[2vw] tablet:p-[2vw] fa-solid fa-key p-[1vw] bg-[aqua] rounded-[0.4vw] text-[1vw] text-[blue] " />
                            <label className=" flex flex-col font-semibold ">
                                <span className=" text-[1vw] tablet:text-[3vw] phone:text-[3vw] ">Password</span>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className=" phone:w-[75vw] phone:text-[3.2vw] text-[1.2vw] border-b-[0.2vw] w-[25vw] outline-none p-[0.2vw] px-[1vw] tablet:w-[75vw] tablet:text-[3.2vw] " type="password" placeholder="**********" />
                            </label>
                        </aside>
                    </section>

                    <button className=" w-[100%] h-[3.5vw] tablet:h-[7vw] tablet:text-[2vw] rounded-[0.3vw] mt-[2vw] text-[1.3vw] font-semibold bg-slate-200 phone:h-[10vw] phone:text-[3vw] phone:rounded-[2vw] ">Sign in</button>
                    <h3 className=" my-[1vw] text-[1vw] text-center tablet:text-[1.5vw] phone:text-[2vw] phone:my-[3vw] ">Dont have an account ?</h3>
                    <button onClick={() => dispatch(setAuthHeader("register"))} className=" w-[100%] h-[3.5vw] tablet:h-[7vw] tablet:text-[2vw] rounded-[0.3vw] text-white text-[1.3vw] font-semibold bg-[purple] phone:text-[3vw] phone:rounded-[2vw] phone:h-[10vw] ">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Login