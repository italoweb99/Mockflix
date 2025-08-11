
import { Link } from "react-router-dom";
import Carrossel from "../components/Carrossel"
import CarrosselEmAlta from "../components/CarrosselEmAlta"
import CarrosselEmCartaz from "../components/CarrosselEmCartaz"
import CarrosselMelhorAval from "../components/CarrosselMelhorAval"
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
    return (
      <div className="bg-bgpurple pb-10 ">
       
          <div className="mb-8 ">
            <Carrossel />
          </div>
          <div className="mt-6 font-medium">
            <div className="flex items-center m-2 ml-10 text-gray-200 hover:text-gray-300 text-lg">           
             <h1 className="text-2xl font-bold ">Em Cartaz</h1>
            <Link to={'/filmes/em_cartaz'} className="flex items-center ml-10 ">Veja mais
            <FaChevronRight className=" ml-1"/>
            </Link>
            </div>
            <CarrosselEmCartaz />
          </div>
          <div className="mt-6 font-medium ">
          <div className="flex items-center m-2 ml-10 text-gray-200 hover:text-gray-300 text-lg">           
             <h1 className="text-2xl font-bold ">Em Alta</h1>
            <Link to={'/filmes/populares'} className="flex items-center ml-10 ">Veja mais
            <FaChevronRight className=" ml-1"/>
            </Link>
            </div>
            <CarrosselEmAlta />
          </div>
          <div className="mt-6 font-medium ">
          <div className="flex items-center m-2 ml-10 text-gray-200 hover:text-gray-300 text-lg">           
             <h1 className="text-2xl font-bold ">Melhor Avaliados</h1>
            <Link to={'/filmes/melhor_avaliados'} className="flex items-center ml-10 ">Veja mais
            <FaChevronRight className=" ml-1"/>
            </Link>
            </div>
            <CarrosselMelhorAval />
          </div>
     
      </div>
    );
  };
  
  export default Home;