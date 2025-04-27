import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import YouTube from "react-youtube"

const Filme = () =>{
    const {id} = useParams()
    const [trailer,setTrailer] = useState()
    const [isLoading,setIsLoading] = useState(true);
    const [filme,setFilmes] = useState<any>();
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
            console.log(response.data)
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
    <div className="bg-bgpurple">
    {!isLoading &&
   <div className="h-screen">
 <div className="relative">
{isTrailer?(
   
<YouTube videoId={`${trailer[0].key}`} opts={{
    width: "1536",
    height: "500px",
    playerVars: {
        autoplay:1,
        controls: 0,
    },
}}/>):(
    <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} style={{
        width: '1536x',
        height: '500px',
        objectFit: 'cover',
    }}/>
)

}

<div className="w-screen h-20  bg-gradient-to-t from-bgpurple to-transparent absolute bottom-0"></div>
</div>
<h1 className="text-3xl text-gray-200 font-bold my-2 mx-10">{filme.title}</h1>
<div className="flex text-xl text-gray-400 font-medium my-2 mx-10">
<p>{filme.genres.map(name => name.name).join(', ')}</p>
<p className="ml-2">{filme.release_date.split('-')[0]}</p>
</div>
<p className="text-2xl text-gray-200 font-medium mx-10 my-2">{filme.overview}</p>
</div>

}
</div>
 )
}
export default Filme