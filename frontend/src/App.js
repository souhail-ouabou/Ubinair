import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer'
import Nav from './components/Navbar/Nav'
function App() {
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])
    return (
      <div>
        <section className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#110A19] to-[#321d48] bg-cover bg-center bg-fixed	p-12 ">
            <Nav />

            <main>
                <Routes>
                    <Route path="/*" element={<Home />} />
                </Routes>
          
            </main>
          
        </section>
        <Footer/>
      </div>
    )
}

export default App
