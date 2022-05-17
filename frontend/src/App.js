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

function App() {
    const [loading, setLoading] = useState(false)
    const auth = useSelector((state) => state.auth);
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
    }, [auth.isLogged,dispatch])

    return (
        <div>
            <section className="flex  justify-center items-center  min-h-screen bg-gradient-to-b from-[#110A19] to-[#321d48] bg-cover bg-center bg-fixed p-12 ">
                <Nav />

                <main>
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
                        <Route path="/profile" element={<Dashboard />} />
                        <Route path="/tracker" element={<Tracker />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/calculator" element={<Calculator />} />
                    </Routes>
                </main>
            </section>
            <Footer />
        </div>
    )
}

export default App
