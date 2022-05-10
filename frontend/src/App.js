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
function App() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>
            <section className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#110A19] to-[#321d48] bg-cover bg-center bg-fixed	p-12 ">
                <Nav />

                <main>
                    <Routes>
                        <Route path="/*" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/user/activate/:activation_token" element={<ActivationEmail/>}
                        />
                    </Routes>
                </main>
            </section>
            <Footer />
        </div>
    )
}

export default App
