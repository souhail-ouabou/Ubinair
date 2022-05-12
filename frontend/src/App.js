import { Route, Routes } from 'react-router-dom'
import { Nav } from './components'
import Home from './components/Home'
import Calculator from './components/calculator/Calculator'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {
  const  [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( ()=> {
      setLoading(false)
    },3000)

  }, [])
    return (
        <section className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#110A19] to-[#321d48] bg-cover bg-center bg-fixed	p-12 ">
            {/* <Nav /> */}

            <main>
                <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/calculator" element={<Calculator />} />
                </Routes>
            </main>
        </section>
    )
}

export default App
