import OrderButton from "./OrderButton.jsx";

export default function FeaturedMenuCard({menuImg, altText, name, price, description}) {

    return (
        <section className="featuredMenuCard">
            <figure>
                <img src={menuImg} alt={altText} />
            </figure>

            <div className="featuredText">
                <div>
                    <h2>{name} - ${price}</h2>
                    <p>{description}</p>
                </div>

                <div>
                    <OrderButton>Start Order</OrderButton>
                </div>
            </div>
        </section>
    )
}