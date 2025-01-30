import { Route, Routes, useNavigate } from "react-router-dom"
import Auth from "./pages/Auth"
import { useDispatch, useSelector } from "react-redux"
import { RootType, setAuth, setLoading } from "./store"
import Dashboard from "./pages/Dashboard"
import { useEffect } from "react"
import $axios from "./http/axios"
import { PropagateLoader } from "react-spinners"
import io from "socket.io-client"

const App = () => {

  // const socket = io("http://localhost:8090")

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Client connected");
  //   });

  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     console.log("Client disconnected");
  //   };
  // }, []);

  const { isAuth, loading } = useSelector((state: RootType) => state.nibble)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const verifyAuth = async () => {
      dispatch(setLoading(true));
      try {
        if (localStorage.getItem("accessToken")) {
          const { data } = await $axios.get("/auth/refresh");
          localStorage.setItem("accessToken", data.accessToken);
          dispatch(setAuth(true));
        } else {
          navigate("/auth");
        }
      } catch (error) {
        console.error("Auth error:", error);
        localStorage.removeItem("accessToken");
        dispatch(setAuth(false));
        navigate("/auth");
      } finally {
        dispatch(setLoading(false));
      }
    };

    verifyAuth();
  }, [navigate]);


  return (
    <div>
      {loading && (
        <div className=" absolute top-0 backdrop-blur-lg w-full h-screen z-[100] flex items-center justify-center ">
          <PropagateLoader size="1vw" />
        </div>
      )}
      <Routes>
        {!isAuth ? <Route path="/auth" element={<Auth />} /> : <Route path="/*" element={<Dashboard />} />}
      </Routes>
    </div>
  )
}

export default App