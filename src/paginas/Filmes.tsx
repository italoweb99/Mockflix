import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import YouTube from "react-youtube"

const Filme = () =>{
    const {id} = useParams()
    const [trailer,setTrailer] = useState<any>()
    const [isLoading,setIsLoading] = useState(true);
    const [filme,setFilmes] = useState<{ backdrop_path: string, title: string, genres: any[], release_date: string, overview: string}>();
    const [isTrailer,setIsTrailer] = useState(false);
    const [providers,setProviders] = useState<{display_priority: number, logo_path: string,provider_id: number,provider_name: string}[]>([])
    const [avalibleStream,setAvalableStream] = useState(true);
    const wScreen = window.innerWidth;
    const getStreaming = async () =>{
        await axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers`,{
            params:{
                api_key:"c603e5708f0df97ff3bcd6e0833721a8",
                language: "pt-BR"
            
            }})
            .then(response => {
               
                setProviders(response.data.results.BR.flatrate);
            })
        
        .catch(error =>{
            console.log("Erro ao carregar provedor", error);
            setAvalableStream(false);
        })

    }
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
       getStreaming();
    },[id])
   
 return(
    <div className="bg-bgpurple">
    {!isLoading &&
   <div key={filme?.title} className="h-screen">
 <div className="relative">
{isTrailer?(
   
<YouTube videoId={`${trailer[0].key}`} opts={{
    width:'100%',
    height: wScreen > 1540? 700 : 600,
    playerVars: {
        autoplay:1,
        controls: 0,
        cc_load_policy: 0,
        iv_load_policy: 3,
    },
}} />):(
    <img src={`https://image.tmdb.org/t/p/original${filme?.backdrop_path}`} alt={filme?.title} style={{
        width: wScreen,
        height: '500px',
        objectFit: 'cover',
    }}/>
)

}

<div className="w-full h-20  bg-gradient-to-t from-bgpurple from-20% to-transparent to-100% absolute bottom-0"></div>
</div>
<div className="bg-bgpurple pb-10">
<h1 className="text-3xl text-gray-200 font-bold my-2 mx-10">{filme?.title}</h1>
<div className="flex text-xl text-gray-400 font-medium my-2 mx-10">
<p>{filme?.genres.map(name => name.name).join(', ')}</p>
<p className="ml-2">{filme?.release_date.split('-')[0]}</p>
</div>
{
avalibleStream &&
<>
<p className="text-2xl text-gray-200 font-bold my-2 mx-10">Assista em:</p>
<div className="flex mx-10">
    
    {
       providers.map(provider => (
         <img src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`} key = {provider.provider_id} className="h-14 ml-2 my-2 rounded-md"/>
       ))
    }
</div>
</>
}
<p className="text-2xl text-gray-200 font-medium mx-10 my-2">{filme?.overview}</p>
</div>
</div>
}
</div>
 )
}
export default Filme