import ScrollInfinito from "../components/ScrollInfinito"

const EmCartazPag = () =>{
    return(
        <>
        <h1 className="mx-4 my-6 text-3xl font-bold text-gray-200">Em Cartaz</h1>
        <ScrollInfinito tipo="now_playing"/>
        </>
    )
}
export default EmCartazPag