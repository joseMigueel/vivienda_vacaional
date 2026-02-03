import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PropertyCard from "../components/Propertycard";
import { properties } from "../data/properties";

function Home () {
    return (
        <>
        <Header />
        <SearchBar/>
        <h2>Alojamientos disponibles</h2>
        {properties.map(properties => (
            <PropertyCard
                key={properties.id}
                title={properties.title}
                location={properties.location}
                price={properties.price}
                image={properties.image}/>  
        ))}
        </>
    )
}

export default Home;