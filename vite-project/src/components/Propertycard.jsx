function PropertyCard({title, location, price, image}) {
    return (
        <article className="property-card">
            <img className="property-image" 
            src={image} 
            alt={title} 
            />
            <div className="property-info">
                <h3>{title}</h3>
                <p className="property-location">{location}</p>
                <p className="property-price">{price}€ / noche</p>

                <button className="property-button">
                    Ver más
                </button>
            </div>
        </article>
    )
}

export default PropertyCard