import Title from "../components/Title.jsx";
import NavBar from "../components/Navbar.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import CouponCard from "../components/Coupons.jsx"
import Footer from "../components/Footer.jsx";

import { REVIEW_DATA, COUPON_DETAILS } from "../data.js";

export default function PromotionsPage() {

    return (
        <>
            <Title title="Hello Boba | Promotions" />
            
            <NavBar />
            <main className="promotionsMain">
                <h1>Promotions</h1>
                
                <div>
                    <CouponCard {...COUPON_DETAILS[0]} />
                    <CouponCard {...COUPON_DETAILS[1]} />
                    <CouponCard {...COUPON_DETAILS[2]} />
                    <CouponCard {...COUPON_DETAILS[3]} />
                </div>

                <h1>Reviews</h1>
                <div>
                    <ReviewCard {...REVIEW_DATA[0]} />
                    <ReviewCard {...REVIEW_DATA[1]} />
                    <ReviewCard {...REVIEW_DATA[2]} />
                    <ReviewCard {...REVIEW_DATA[3]} />
                    <ReviewCard {...REVIEW_DATA[4]} />
                    <ReviewCard {...REVIEW_DATA[5]} />
                    <ReviewCard {...REVIEW_DATA[6]} />
                </div>

            </main>
            <Footer />


        </>
    )
}