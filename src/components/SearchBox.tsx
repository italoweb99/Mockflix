import { useEffect,} from "react"
import { useNavigate } from "react-router-dom"

interface sbType  {
    ref: any,
    onFocusParam: (e: boolean) => void,
    filmeList: any[]
}
const SearchBox = ({ref, onFocusParam,filmeList}:sbType) =>{
    const nav = useNavigate()
   const clickHandle = (e: any) =>{
    nav(`/Mockflix/filme/${e}`)
 
    onFocusParam(false)
    //console.log("teste")
   }
useEffect(()=>{
    onFocusParam(true);
},[])
    return(
      <div ref={ref} className="bg-bgpurple/80 backdrop-blur-sm hover:text-gray-300 text-gray-200  overflow-auto flex flex-col mx-20 h-[500px] rounded-b-xl" >
       {
        filmeList.length > 0?(
        filmeList.map(filme =>(
            <div key={filme.id} onClick={()=>clickHandle(filme.id)} className="flex items-center my-1 transition-all ease-out duration-300 mx-3 cursor-pointer hover:bg-bgpurplehover/80 rounded-lg"  >
            <img src={`https://image.tmdb.org/t/p/w500${filme.backdrop_path}`} className="h-28 rounded-s-lg"/>
            <p className="ml-20 font-medium">{filme.title}</p>
            </div>
        ))):
        (
            <p className="text-gray-200 flex justify-center items-center mt-16">Nenhum filme encontrado</p>
        )
       }
      </div>
    )
}
export default SearchBox