import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './Carrossel2.css'
const Carrossel2 = () =>{
const [filmes,setFilmes] = useState<any[]>([]);
const [isLoaded,setIsLoaded] = useState(false);
const[translate,setTranslate] = useState(50);
//const Ws = window.screen.width;
const loadMovies = async() =>{
    await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
        params:{
            api_key:"c603e5708f0df97ff3bcd6e0833721a8",
            language: "pt-BR",
            page: 1,
        }
    })
    .then(response =>{
        setFilmes(response.data.results);
        setIsLoaded(true);
    })
   .catch(error => {
    console.log("Erro ao carregar filmes", error);
   })
}
const handleAntes = () =>{
   if(translate == 50)
   {
    setTranslate(translate);
   } 
   else{   
    setTranslate(translate+(200+2))
   }
    
}
const handleProx = () =>{
    console.log(translate);
    if(translate  > -19*200){
    setTranslate(translate-202)
    }
    else{
        setTranslate(translate)
    }
}
    useEffect (()=>{
      loadMovies();
    },[])
    console.log(filmes);
    return(
        <>
        <div className="carossel">
        <div style={{
            translate:`${translate}px`,
            display: 'flex',
            transition: "ease 0.5s"
        }}>
        {
            isLoaded &&
            filmes.map(filme =>(
                <div className="conteiner" >  
                <Link to={`/filme/${filme.id}`}key = {filme.id}>
                 
                <p>{filme.title}</p>
                <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt = {filme.title}/>
                
                </Link>
                </div>
                
            ))
        }
        </div>
        </div>
        <div className="botoes">
            <button onClick={handleAntes}>ant</button>
            <button onClick={handleProx}>prox</button>
        </div>
       </>
    )
}
export default Carrossel2