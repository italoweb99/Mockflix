import axios from "axios";
import { useEffect, useRef, useState } from "react"

const MostrarMais = () =>{
    const [page,setPage] = useState(1);
    const[movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    const observer = useRef(null);
    const getMovies = async() =>{
        setLoading(true);
        try{
          const res =  await axios.get("https://api.themoviedb.org/3/movie/popular",{
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
        setLoading(false);
    }
    useEffect(()=>{
        getMovies()
    },[page]);
    useEffect(()=>{
        observer.current = new IntersectionObserver(
            (entrie) =>{
                if(entrie[0].isIntersecting){
                    setPage((prevP) => prevP +1);
                }
            },
            {threshold: 1}
        );
        if(observer.current && document.getElementById('sentinela')){
            observer.current.observe(document.getElementById('sentinela'));
        }
        return () => observer.current?.disconnect();
    },[])
    return(
         <>
         <div className="grid grid-cols-6 gap-4 mx-4 mt-4 text-gray-200 ">
         {
            
            movies.map(movie =>(
                <div className="hover:scale-110 transition-all duration-300">
                <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <p className="line-clamp-1">{movie.title}</p>
                </div>
            ))
         }
         <div id="sentinela" className="w-full h-5"></div>
         </div>
         </>
    )
}
export default MostrarMais