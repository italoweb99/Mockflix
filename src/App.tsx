import { BrowserRouter, Route, Routes } from "react-router-dom"
import Carrossel2 from "./components/Carossel2"
import Filmes from "./paginas/Filmes"
import Carrossel from "./components/Carrossel"
import Home from "./paginas/Home"

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/filme/:id" element={<Filmes/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
