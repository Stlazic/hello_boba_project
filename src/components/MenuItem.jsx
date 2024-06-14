import OrderButton from "./OrderButton.jsx";

export default function MenuItem({menuImg, altText, name, price, description}) {

    return(
        <section className="menuItem">
            <figure>
                <img src={menuImg} alt={altText} />
                <blockquote>
                    {description}
                </blockquote>
            </figure>

            <div>
                <h3>{name} - ${price}</h3>
                <OrderButton>Add to Basket</OrderButton>
            </div>
        </section>
    )


}