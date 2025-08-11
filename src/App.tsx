import { BrowserRouter, Route, Routes } from "react-router-dom"

import Filmes from "./paginas/Filmes"

import Home from "./paginas/Home"
import Header from "./components/Header"
import PopularesPag from "./paginas/PopularesPag"
import EmCartazPag from "./paginas/EmCartazPag"
import MelhorAvaliadosPag from "./paginas/MelhorAvaliadosPag"
import SearchPag from "./paginas/SearchPag"


function App() {
  

  return (
    <>

    <BrowserRouter>
    <Header/>
    <main className="pt-18 bg-bgpurple ">
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/filme/:id" element={<Filmes/>}/>
      <Route path="/filmes/Populares" element ={<PopularesPag/>}/>
      <Route path="/filmes/em_cartaz" element = {<EmCartazPag/>}/>
      <Route path="/filmes/melhor_avaliados" element={<MelhorAvaliadosPag/>}/>
      <Route path="/search/:query" element={<SearchPag/>}/>
    </Routes>
    </main>
    </BrowserRouter>
    </>
  )
}
export default App
