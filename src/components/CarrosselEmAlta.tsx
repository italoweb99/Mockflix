import axios from "axios";
import { useEffect, useState } from "react";
import Carrossel2 from "./Carossel2";

const CarrosselEmAlta = () => {
    const [filmes,setFilmes] =useState<any[]>([]);
    const [isLoading,setIsLoading] = useState(true);
    const getFilmes = async () =>{
        await axios.get(`https://api.themoviedb.org/3/movie/popular`,{
            params:{
                api_key: import.meta.env.VITE_API_KEY,
                language: "pt-BR",
                page: 1,
            }
        })
        .then(response =>{
         
            setFilmes(response.data.results);
            setIsLoading(false);
           
        })
       .catch(error => {
        console.log("Erro ao carregar filmes", error);
       })
    }
    useEffect(()=>{
        getFilmes();
    },[])
return(
    <>
    
        
   <Carrossel2 obj = {filmes} isloading = {isLoading}/>
    
   </>
)
} 

export default CarrosselEmAlta