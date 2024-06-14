import OrderButton from "./OrderButton.jsx";

export default function Coupons({title, description, code}) {

    return(
        <section className="couponCard">
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>Use code: {code}</h4>
            <OrderButton>Redeem</OrderButton>
        </section>
    )
}