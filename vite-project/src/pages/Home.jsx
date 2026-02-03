import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PropertyCard from "../components/Propertycard";
function Home () {
    return (
        <>
        <Header />
        <SearchBar/>
        <h2>Alojamientos disponibles</h2>
        <PropertyCard
        title= "Apartamento en la playa"
        location= "Mogan"
        price={90}
        image="https://via.placeholder.com/400x250"/>        
        </>
    )
}

export default Home;