import { BrowserRouter, Route, Routes } from "react-router-dom"

import Filmes from "./paginas/Filmes"

import Home from "./paginas/Home"
import Header from "./components/Header"


function App() {
  

  return (
    <>

    <BrowserRouter>
    <Header/>
    <main className="pt-18 h-screen bg-bgpurple ">
    <Routes>
      <Route path="/Mockflix" element = {<Home/>}/>
      <Route path="/Mockflix/filme/:id" element={<Filmes/>}/>
    </Routes>
    </main>
    </BrowserRouter>
    </>
  )
}
export default App
