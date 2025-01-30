import { useDispatch } from "react-redux"
import leftImage from "../image/Register.png"
import { setAuthHeader, setLoading } from "../store"
import { FormEvent, useState } from "react"
import { AxiosError } from "axios"
import { useNavigate } from "react-router-dom"
import $api from "../http/api"

const Register = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function registerData(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault()
        dispatch(setLoading(true))

        try {
            const { data } = await $api.post("/auth/register", { name, email, password })

            console.log(data);

            localStorage.setItem("accessToken", data.accessToken)

            localStorage.setItem("data", JSON.stringify(data.user))

            navigate("/home")

            window.location.reload()
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                localStorage.removeItem("accessToken");
                alert(error.response.data.message || "Something went wrong")
            }
        } finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <div className=" flex justify-center tablet:flex-col phone:flex-col ">
            <img src={leftImage} className=" w-[30vw] h-[100vh] tablet:w-[100vw] tablet:h-[40vh] phone:w-full phone:h-[40vh] " alt="Logo" />

            <div className=" p-[8vw] h-[100vh] w-[50vw] tablet:w-full tablet:h-[60vh] phone:w-full phone:h-[60vh] ">
                <form onSubmit={registerData}>
                    <h1 className=" font-bold text-[2vw] tablet:text-[5vw] phone:text-[6vw] ">Create an account</h1>
                    <p className="text-[1vw] tablet:text-[2vw] phone:text-[2vw] ">Plese create an account to continue using our service</p>

                    <section className=" mt-[3vw] flex flex-col flex-shrink-0 gap-[3vw] ">
                        <aside className=" flex items-center gap-[1vw] ">
                            <i className="fa-solid fa-user p-[1vw] bg-[aqua] rounded-[0.4vw] text-[1vw] text-[blue] tablet:text-[4vw] phone:text-[5vw] phone:p-[2vw] tablet:p-[2vw] " />
                            <label className=" flex flex-col font-semibold ">
                                <span className=" text-[1vw] tablet:text-[3vw] phone:text-[3vw] ">Full name</span>
                                <input value={name} onChange={(e) => setName(e.target.value)} className=" text-[1.2vw] border-b-[0.2vw] w-[25vw] outline-none p-[0.2vw] tablet:w-[75vw] tablet:text-[3.2vw] px-[1vw] phone:w-[75vw] phone:text-[3.2vw] " type="text" placeholder="John Doe" />
                            </label>
                        </aside>
                        <aside className=" flex items-center gap-[1vw] ">
                            <i className="fa-solid fa-message p-[1vw] bg-[aqua] rounded-[0.4vw] text-[1vw] text-[blue] tablet:text-[4vw] phone:text-[5vw] phone:p-[2vw] tablet:p-[2vw] " />
                            <label className=" flex flex-col font-semibold ">
                                <span className=" text-[1vw] tablet:text-[3vw] phone:text-[3vw] ">Email</span>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className=" text-[1.2vw] border-b-[0.2vw] w-[25vw] outline-none p-[0.2vw] tablet:w-[75vw] tablet:text-[3.2vw] px-[1vw] phone:w-[75vw] phone:text-[3.2vw] " type="email" placeholder="johndoe@gmail.com" />
                            </label>
                        </aside>
                        <aside className=" flex items-center gap-[1vw] ">
                            <i className="fa-solid fa-key p-[1vw] bg-[aqua] rounded-[0.4vw] text-[1vw] text-[blue] tablet:text-[4vw] phone:text-[5vw] phone:p-[2vw] tablet:p-[2vw] " />
                            <label className=" flex flex-col font-semibold ">
                                <span className=" text-[1vw] tablet:text-[3vw] phone:text-[3vw] ">Password</span>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className=" text-[1.2vw] border-b-[0.2vw] w-[25vw] outline-none p-[0.2vw] tablet:w-[75vw] tablet:text-[3.2vw] px-[1vw] phone:w-[75vw] phone:text-[3.2vw] " type="password" placeholder="**********" />
                            </label>
                        </aside>
                    </section>

                    <button className=" tablet:h-[7vw] phone:h-[10vw] phone:text-[3vw] phone:rounded-[2vw] tablet:text-[2vw] w-[100%] h-[3.5vw] rounded-[0.3vw] mt-[2vw] text-white text-[1.3vw] font-semibold bg-[purple] ">Register</button>
                    <h3 className=" text-[1vw] mt-[1.5vw] text-center tablet:text-[1.5vw] phone:text-[2.2vw] ">
                        Already have an account? <span onClick={() => dispatch(setAuthHeader("login"))} className=" text-[red] cursor-pointer ">Sign In</span>
                    </h3>
                </form>
            </div>
        </div>
    )
}

export default Register