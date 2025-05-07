import ScrollInfinito from "../components/ScrollInfinito"

const PopularesPag = () =>{
    return(
        <>
        <h1 className="mx-4 my-6 text-3xl font-bold text-gray-200">Populares</h1>
        <ScrollInfinito tipo="popular"/>
        </>
    )
}
export default PopularesPag