import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Home from './pages/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import Nav from './components/Navbar/Nav'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ActivationEmail from './pages/Auth/ActivationEmail'
import ForgotPassword from './pages/Auth/ForgotPassword'
import ResetPassword from './pages/Auth/ResetPassword'
import Dashboard from './pages/Dashboard/Dashboard'
import Tracker from './pages/Dashboard/Tracker'
import Calculator from './pages/Calculateur/Calculator'
import { dispatchToken } from './redux/actions/tokenAction'
import {
    dispatchLogin,
    dispatchGetUser,
    fetchUser,
} from './redux/actions/authAction'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile/Profile'

import { ToastContainer } from 'react-toastify'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
    AOS.init()
    const [loading, setLoading] = useState(false)

    const auth = useSelector((state) => state.auth)
    const { userInfo, isAdmin, isLogged } = auth
    const token = useSelector((state) => state.token)

    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin) {
            dispatch(dispatchToken())
        }
    }, [auth.isLogged, dispatch])

    // when refresh the token exsit but the logged change to false so we logged out so that's we do that

    useEffect(() => {
        if (token) {
            //    dispatch(dispatchLogin()); //WE GOT  logged change to false so we transfer it to true
            //Get user information cuz after get token useeffecr re compile and get error mn dispatchLogin

            dispatch(dispatchGetUser(token))
        }
    }, [token, dispatch])

    return (
        <div>
            <section className="flex  justify-center items-center  min-h-screen bg-gradient-to-b from-[#110A19] to-[#321d48] bg-cover bg-center bg-fixed p-12 ">
                <Nav />
                <ToastContainer />
                <div className="background  bg-transparent ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/user/activate/:activation_token"
                            element={<ActivationEmail />}
                        />
                        <Route
                            path="/forgot_password"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/user/reset/:token"
                            element={<ResetPassword />}
                        />
                        <Route
                            path="/profile"
                            element={userInfo ? <Profile /> : <Login />}
                        />
                        <Route path="/tracker" element={<Tracker />} />
                        <Route
                            path="/dashboard/:id"
                            element={userInfo ? <Dashboard /> : <Login />}
                        />
                        <Route
                            path="/calculator"
                            element={userInfo ? <Calculator /> : <Login />}
                        />
                    </Routes>
                </>
          
            </section>
            <Footer />
        </div>
    )
}

export default App
