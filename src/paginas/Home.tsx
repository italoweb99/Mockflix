
import Carrossel from "../components/Carrossel"
import CarrosselEmAlta from "../components/CarrosselEmAlta"
import CarrosselEmCartaz from "../components/CarrosselEmCartaz"
import CarrosselMelhorAval from "../components/CarrosselMelhorAval"

const Home = () => {
    return (
      <div className="bg-bgpurple pb-10 ">
       
          <div className="mb-8 ">
            <Carrossel />
          </div>
          <div className="mt-6 font-medium">
            <h1 className="text-2xl font-bold text-gray-200 m-2 ml-10">Em cartaz</h1>
            <CarrosselEmCartaz />
          </div>
          <div className="mt-6 font-medium ">
            <h1 className="text-2xl font-bold text-gray-200 m-2 ml-10">Em Alta</h1>
            <CarrosselEmAlta />
          </div>
          <div className="mt-6 font-medium ">
            <h1 className="text-2xl font-bold text-gray-200 m-2 ml-10">Melhor Avaliados</h1>
            <CarrosselMelhorAval />
          </div>
     
      </div>
    );
  };
  
  export default Home;