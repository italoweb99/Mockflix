import ScrollInfinito from "../components/ScrollInfinito"

const SearchPag = () =>{
return(
    <>
    <h1 className="text-3xl font-bold text-gray-200 mx-4">Resultados</h1>
    <ScrollInfinito tipo = 'search'/>
    </>
)
}
export default SearchPag