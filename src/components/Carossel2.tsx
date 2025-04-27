
import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Carrossel2Props{
    obj: any;
    width?: number;
    height?: number;
   
    marginStart?: number;
  
}

const Carrossel2 = ({obj,width = 50, height = 40,marginStart = 0.2}:Carrossel2Props) =>{
   /* const imgs = ["https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
"https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
"https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
"https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
"https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
"https://pixlr.com/images/generator/text-to-image.webp",
"https://www.bnf.fr/sites/default/files/2019-10/btv1b8457904c_f1.jpg"

    ]*/
    const wdToPixel = width*4;
    const [current, setCurrent] = useState(0);
    const { innerWidth: widthS} = window;
    const [showControls,setShowControls] = useState(false);
    const [showRControl,setShowRControl] = useState(true);
   
    useEffect(()=>{
        wdToPixel*obj.length+wdToPixel*marginStart >= widthS ? setShowControls(true) : setShowControls(false);
    },[widthS,obj])
    const next = () =>{
       // wdToPixel*(imgs.length - current-1) <= width ? setShowRControl(false) : setCurrent(current+1);
        if(wdToPixel*(obj.length - current-1)+wdToPixel*marginStart <= widthS){
            setCurrent(current+1);
            setShowRControl(false);
        }
        else{
            setCurrent(current+1);
        }
    }
    const prev = () =>{
       current==0 ? setCurrent(0) : setCurrent(current-1);
       if(!showRControl){
        setShowRControl(true);
       }
    }

  
    return(

            
        <div className="w-screen">
        <div className="relative overflow-hidden">
         
            <div  className="flex space-x-3 transition ease-out duration-500" style={{
                transform: `translateX(-${current*(wdToPixel)}px)`,
                marginInlineStart: `${wdToPixel*marginStart}px`,
                width: obj.length*wdToPixel
            }}>
                {
                  obj.map((item: any) =>(
                    <div key = {item.id} className="text-gray-200 relative w-full"
                    >
                    <Link to = {`/filme/${item.id}`} key = {item.id}>
                   <img  src={`https://image.tmdb.org/t/p/original${item.poster_path}`} className="rounded-md" style={{
                    width: `${wdToPixel}px`,
                   }}/>
                   </Link>
                   <Link  className= "line-clamp-1" to ={`/filme/${item.id}`}>{item.title}</Link>    
                    </div>
                  ))
                }
            </div>
            {
            showControls&&
            (<div  className="pointer-events-none  text-transparent absolute top-0 h-full w-full flex justify-between items-center  text-lg ">
            <div className="flex items-center bg-gradient-to-r transition ease-out duration-500 hover:from-black/60 from-30%  to-transparent to-90% hover:text-white hover:backdrop-blur-[1px] h-full w-8 justify-center pointer-events-auto "onClick={()=>prev()} style={{
                width: wdToPixel*marginStart
            }}>
            <FaArrowCircleLeft />
            </div>
            {
                showRControl &&
            (
                <div className="flex items-center bg-gradient-to-l transition ease-out duration-500 hover:from-black/60 from-30%  to-transparent to-90% hover:backdrop-blur-[1px] h-full w-8 justify-center pointer-events-auto  hover:text-white" onClick={()=>next()} style={{
                    width: wdToPixel*marginStart
                }}>
            <FaArrowCircleRight />
                </div>
            )
            }
            </div>)
            }
        </div>
        </div>
     
    );
}
export default Carrossel2