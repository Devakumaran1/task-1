
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Content } from './Components/Content/Content'
import { Header } from './Components/Header/Header'
import { Navbar } from './Components/Navbar.jsx/Navbar'
import { About } from './Components/Pages/About'
import { FindDoctor } from './Components/Pages/FindDoctor'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/find' element={<FindDoctor/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </BrowserRouter>
      
      
    
  )
}

export default App
