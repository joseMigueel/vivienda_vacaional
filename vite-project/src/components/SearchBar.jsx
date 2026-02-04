function SearchBar({search, setSearch}){
    return ( 
        <section>
            <input type="text"
            placeholder="Buscar por zona (ej:Mogan)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

        </section>
    )
}

export default SearchBar