import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {
  dispatchLogin,
  dispatchGetUser,
  fetchUser,
} from "./redux/actions/authAction";
import axios from "axios";
import Home from './pages/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import Nav from './components/Navbar/Nav'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
function App() {
    //Get Acces token
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const auth = useSelector((state) => state.auth);
    const { isLogged, user, isAdmin } = auth;
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        // make post request : hey db get me some data and return it to me
        const res = await axios.post("/user/refresh_token", null);
        dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);
  // when refresh the token exsit but the logged change to false that's we do that

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());
        //Get user infor
        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);
    return (
      <div>
        <section className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#110A19] to-[#321d48] bg-cover bg-center bg-fixed	p-12 ">
            <Nav />

            <main>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
          
            </main>
          
        </section>
        <Footer/>
      </div>
    )
}

export default App
