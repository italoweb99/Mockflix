import ScrollInfinito from "../components/ScrollInfinito"

const MelhorAvaliadosPag = () =>{
    return(
        <>
        <h1 className="mx-4 my-6 text-3xl font-bold text-gray-200">Melhor avaliados</h1>
        <ScrollInfinito tipo="top_rated"/>
        </>
    )
}
export default MelhorAvaliadosPag