import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom";
interface ScrollInfinitoTipo{
    tipo: string,
}
const ScrollInfinito = ({tipo}:ScrollInfinitoTipo) =>{
    const [page,setPage] = useState(1);
    //const{tipo} = useParams();
    const {query} = useParams();
    const[movies,setMovies] = useState<any []>([]);
    const [loading,setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const observer = useRef<any>(null);
    useEffect(() => {
        setMovies([]); // Limpa os filmes para nova busca
        setPage(1); // Reseta página para a primeira
        setNotFound(false);
    }, [query]);
    
    const getMovies = async() =>{
        setLoading(true);
        if(tipo == 'search'){
            try{
           const res = await axios.get(`https://api.themoviedb.org/3/search/movie`,{
            params:{
                query: query,
                api_key: "c603e5708f0df97ff3bcd6e0833721a8",
                language: "pt-BR",
                page: page
            }
           })
           setMovies((prevM)=>[...prevM, ...res.data.results]);
           if(res.data.total_results == 0){
            setNotFound(true);
           }
           
        }
        catch(error){
            console.log("Erro ao carregar resultados da pasquisa",error)
        }
        }
        else{
        try{
          const res =  await axios.get(`https://api.themoviedb.org/3/movie/${tipo}`,{
                params:{
                    api_key: "c603e5708f0df97ff3bcd6e0833721a8",
                    language: "pt-BR",
                    page: page
                }
            })
            setMovies((prevM) => [...prevM, ...res.data.results]);

        }
        catch(error){
            console.log("Erro ao carregar filmes", error);
        }
    }
        setLoading(false);
    }
    useEffect(()=>{
        getMovies()
    },[page]);
    useEffect(()=>{
        observer.current = new IntersectionObserver(
            (entrie) =>{
                if(entrie[0].isIntersecting && !notFound){
                    setPage((prevP) => prevP +1);
                }
            },
            {threshold: 1}
        );
        if(observer.current && document.getElementById('sentinela')){
            observer.current.observe(document.getElementById('sentinela'));
        }
        return () => observer.current?.disconnect();
    },[notFound])
  return (
  <>
    <div className="grid grid-cols-6 gap-4 mx-4 mt-4 text-gray-200">
      {movies.length === 0 && !loading ? (
        <p className="col-span-6 text-center text-gray-400">
          Nenhum filme encontrado para "{query}". Tente outra busca!
        </p>
      ) : (
        movies.map((movie, index) => (
          <Link key={`${movie.id}-${index}`} to={`/Mockflix/filme/${movie.id}`}>
            <div className="hover:scale-110 transition-all duration-300">
              <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <p className="line-clamp-1">{movie.title}</p>
            </div>
          </Link>
        ))
      )}
      <div id="sentinela" className="w-full h-5"></div>
    </div>
  </>
);
}
export default ScrollInfinito