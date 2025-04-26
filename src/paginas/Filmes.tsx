import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import YouTube from "react-youtube"

const Filme = () =>{
    const {id} = useParams()
    const [trailer,setTrailer] = useState()
    const [isLoading,setIsLoading] = useState(true);
    const [filme,setFilmes] = useState();
    const [isTrailer,setIsTrailer] = useState(false);
    
    const loadMovie = async() =>{
        await axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
            params:{
                api_key:"c603e5708f0df97ff3bcd6e0833721a8",
                language: "pt-BR",
            
            }
        })
        .then(response =>{
         
            setFilmes(response.data);
            setIsLoading(false);
           
        })
       .catch(error => {
        console.log("Erro ao carregar filmes", error);
       })
    }
    const getTrailer = async() =>{
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`,{
            params:{
                api_key:"c603e5708f0df97ff3bcd6e0833721a8",
                language: "pt-BR",
                
            }
        })
        .then(response =>{
        if(response.data.results.length != 0){
          setTrailer(response.data.results);
          setIsTrailer(true);
        }
        else{
            
            setIsTrailer(false);
        }
        })
       .catch(error => {
        console.log("Erro ao carregar filmes", error);
       })
    }
    useEffect(()=>{
       getTrailer();
       loadMovie();
    },[])
    console.log(trailer);
 return(
    <>
    {!isLoading &&
    <>
<p>{filme.title}</p>
{isTrailer?(
<YouTube videoId={`${trailer[0].key}`} opts={{
    width: "1520px",
    height: "500px",
    playerVars: {
        autoplay:1,
        controls: 0,
    },
}}/>):(
    <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} style={{
        width: '1520px',
        height: '500px',
        objectFit: 'cover',
    }}/>
)
}

<p>{filme.genres.map(name => name.name).join(', ')}</p>
<p>{filme.overview}</p>
</>
}
</>
 )
}
export default Filme