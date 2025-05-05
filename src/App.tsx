import { BrowserRouter, Route, Routes } from "react-router-dom"

import Filmes from "./paginas/Filmes"

import Home from "./paginas/Home"
import Header from "./components/Header"
import PopularesPag from "./paginas/PopularesPag"
import EmCartazPag from "./paginas/EmCartazPag"
import MelhorAvaliadosPag from "./paginas/MelhorAvaliadosPag"


function App() {
  

  return (
    <>

    <BrowserRouter>
    <Header/>
    <main className="pt-18 bg-bgpurple ">
    <Routes>
      <Route path="/Mockflix" element = {<Home/>}/>
      <Route path="/Mockflix/filme/:id" element={<Filmes/>}/>
      <Route path="/Mockflix/filmes/Populares" element ={<PopularesPag/>}/>
      <Route path="/Mockflix/filmes/em_cartaz" element = {<EmCartazPag/>}/>
      <Route path="/Mockflix/filmes/melhor_avaliados" element={<MelhorAvaliadosPag/>}/>
    </Routes>
    </main>
    </BrowserRouter>
    </>
  )
}
export default App
