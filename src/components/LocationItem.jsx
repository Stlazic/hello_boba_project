
export default function LocationItem({neighborhood, address, phone, locationIMG, locationAlt}) {

    return (
        <section className="locationItem">
            <div>
                <h3>{neighborhood}</h3>
                <p><span>{address[0]}</span> <span>{address[1]}</span></p>
                <p>{phone}</p>
            </div>

            <figure>
                <img src={locationIMG} alt={locationAlt} />
            </figure>
        </section>
    )
}