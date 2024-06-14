import Title from "../components/Title.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import bakingIMG from "../assets/aboutPics/baking.jpg";
import chicagoIMG from "../assets/aboutPics/chicago.jpg";
import farmIMG from "../assets/aboutPics/farming.jpg";

import { NavLink } from "react-router-dom";

export default function AboutPage() {

    return (
        <>
            <Title title="Hello Boba | About" />

            <NavBar />
            <main className="aboutMain">
                <h1>About</h1>
                <section>
                    <div>
                        <h2>Hello Boba</h2>
                        <p>We at Hello Boba started off 5 years ago as students with a passion and love for boba. We were dissapointed with the boba selection in Chicago so we wanted to do something different. We taught ourselves how to make handmade boba and using our families recipies started expanding our food selection.</p>
                    </div>

                    <figure>
                        <img src={bakingIMG} alt="https://unsplash.com/photos/person-pouring-flour-on-table-beside-eggs-and-whisk-rgRbqFweGF0" />
                    </figure>
                </section>

                <section>
                    <figure>
                        <img src={chicagoIMG} alt="https://unsplash.com/photos/yacht-on-body-of-water-near-buildings-yb7Yg3Rv7WA"/>
                    </figure>

                    <div>
                        <h2>Hello Chicago</h2>
                        <p>Since 2019, we have opened 3 <NavLink to="/hello_boba/locations">Locations</NavLink> around Chicago. Our first location was in Lincoln Park but we maintain the same quality and care for each one.
                        </p>
                    </div>
                </section>

                <section>
                    <div>
                        <h2>Why we're unique</h2>
                        <p>To provide the most authentic, high-quality fusion dishes and drinks, we source only the highest quality, freshest ingredients. Thats why we at Hello Boba ensure that when you buy our food, you are supporting individual farmers and small businesses.</p>
                    </div>
                    <figure>
                        <img src={farmIMG} alt="https://unsplash.com/photos/green-plant-on-persons-hand-bYZn_C-RswQ"/>
                    </figure>
                </section>

            </main>
            <Footer />

        </>
    )
}