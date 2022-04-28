import { Route, Routes } from 'react-router-dom'
import { Nav } from './components'
import Home from './components/Home';

function App() {
  return (
    <section className='flex justify-center items-center min-h-screen bg-gradient-to-b from-[#110A19] to-[#321d48] bg-cover bg-center bg-fixed	p-12 '>
      <Nav/> 
        <main>
          <Routes>
            <Route path='/*' element={<Home/>}/>
          </Routes>
        </main>
    </section>
  );
}

export default App;
