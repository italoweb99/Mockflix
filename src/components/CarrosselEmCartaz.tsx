import { useEffect, useState } from "react";
import Carrossel2 from "./Carossel2";
import axios from "axios";

const CarrosselEmCartaz = () =>{
     const [filmes,setFilmes] =useState<any[]>([]);
        const [isLoading,setIsLoading] = useState(true);
        const getFilmes = async () =>{
            await axios.get(`https://api.themoviedb.org/3/movie/now_playing`,{
                params:{
                    api_key:"c603e5708f0df97ff3bcd6e0833721a8",
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
export default CarrosselEmCartaz