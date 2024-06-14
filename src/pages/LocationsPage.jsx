import Title from "../components/Title.jsx";
import NavBar from "../components/Navbar.jsx";
import LocationItem from "../components/LocationItem.jsx";
import Hours from "../components/Hours.jsx";
import Footer from "../components/Footer.jsx";

import { LOCATION_ITEMS } from "../data.js";

export default function LocationsPage() {

    return (
        <>
            <Title title="Hello Boba | Locations" />
            <NavBar />
            <main>
                <h1>Locations</h1>
                <Hours />
                <LocationItem {...LOCATION_ITEMS[0]}/>
                <LocationItem {...LOCATION_ITEMS[1]}/>
                <LocationItem {...LOCATION_ITEMS[2]}/>
            </main>
            <Footer />
        </>
    )
}