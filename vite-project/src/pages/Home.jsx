import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import PropertyCard from "../components/Propertycard";
import { properties } from "../data/properties";
import {useState} from "react"

function Home () {
    const [search, setSearch] = useState("");
    const filterProperties = properties.filter(property => 
        property.location.toLowerCase().includes(search.toLocaleLowerCase())
    )
    return (
        <>
        <Header />

        <SearchBar
        search={search}
        setSearch={setSearch}/>
        <h2>Alojamientos disponibles</h2>
        
        <div className="properties-grid">
        {filterProperties.map(properties => (
            <PropertyCard
                key={properties.id}
                title={properties.title}
                location={properties.location}
                price={properties.price}
                image={properties.image}/>  
        ))}
        </div>
        </>
    )
}

export default Home;