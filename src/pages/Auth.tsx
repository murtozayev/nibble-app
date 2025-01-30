import { useSelector } from "react-redux"
import { RootType } from "../store";
import Login from "../components/Login";
import Register from "../components/Register";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            navigate("/dashboard/home")
        }
    }, [navigate])

    const authHeader = useSelector((state: RootType) => state.nibble.authHeader)
    return (
        <>
            {authHeader === "login" ? <Login /> : <Register />}
        </>
    )
}

export default Auth