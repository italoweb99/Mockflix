import axios from "axios";
import {  useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Carosel = ({width = 100,height=150,time = 10000}) =>{
   
    const wdToPixel = window.innerWidth;
    const hgToPixel = height*4;
    const [current, setCurrent] = useState(0);
    const [imgs,setFilmes] =useState<any[]>([]);
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
            console.log(response.data.results)
            setIsLoading(false);
           
        })
       .catch(error => {
        console.log("Erro ao carregar filmes", error);
       })
       
    }
    useEffect(()=>{
        getFilmes();
    },[])
    const next = () =>{
    current == imgs.length-1 ? setCurrent(0) : setCurrent(current+1);
    }
    const prev = () =>{
       current==0 ? setCurrent(imgs.length-1) : setCurrent(current-1);
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            next();
        },time);
        return ()=> clearInterval(interval);
    },[current])
    return(
        <div style={{
            width: wdToPixel,
       
        }}>
        <div className="relative overflow-hidden">
            <div className="flex transiton justify-start items-start ease-out duration-500" style={{
                transform: `translateX(-${current*(wdToPixel)}px)`,
                width: imgs.length*wdToPixel
                
            }}>
                 
                {
                  imgs.map((img)=>(
                   <Link to={`/filme/${img.id}`}>
                    <div>
                    <img 
                    src={wdToPixel> 1600 ? `https://image.tmdb.org/t/p/original${img.backdrop_path}`: `https://image.tmdb.org/t/p/w1280${img.backdrop_path}`} 
                    style={{
                       width: '100vw',
                       height: hgToPixel
                    }} 
                    className="shrink-0"
                  />
                  <div className="absolute bottom-0 h-24 w-screen bg-gradient-to-t from-bgpurple to-transparent text-gray-200 text-4xl font-bold" >
                    <h1 className="mx-10">{img.title}</h1>
                  </div>
                  
                  </div>
                  </Link>
                  ))
                }
                
            </div>
            {
         
         <div  className="pointer-events-none  text-transparent absolute top-0 h-full w-full flex justify-between items-center  text-lg ">
              <div className="flex items-center bg-gradient-to-r transition ease-out duration-500 hover:from-black/60 from-30%  to-transparent to-90% hover:text-white hover:backdrop-blur-[1px] h-full w-8 justify-center pointer-events-auto "onClick={()=>prev()} style={{
                width: wdToPixel*0.05
            }}>
            <FaArrowCircleLeft />
            </div>
           
            <div className="flex items-center bg-gradient-to-l transition ease-out duration-500 hover:from-black/60 from-30%  to-transparent to-90% hover:backdrop-blur-[1px] h-full w-8 justify-center pointer-events-auto  hover:text-white" onClick={()=>next()} style={{
                    width: wdToPixel*0.05
                }}>
            <FaArrowCircleRight />
                </div>
                </div>
            }
        </div>
        </div>
    );
}
export default Carosel