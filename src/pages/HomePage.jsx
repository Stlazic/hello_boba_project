import Title from "../components/Title.jsx";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FeaturedMenuCard from "../components/FeaturedMenuCard.jsx";
import { useState, useEffect } from "react";
import { MENU_ITEMS } from "../data.js";

export default function HomePage() {

// This is the coolest shit ever, I said I would do this in my proposal but I honestly didn't know if i could

    const [featuredItem, setFeaturedItem] = useState(MENU_ITEMS[0]);

    // this is an array of some menu items from data.js, these are the items I wanted to be featured on the main menu
    const featuredMenuItems = [MENU_ITEMS[0], MENU_ITEMS[4], MENU_ITEMS[6]]
    var num = 0;

    function getNumber() {
        if(num >=2){
            return num = 0; 
        }
        else {
            return num += 1
        }
    }

    //This useEffect runs every 7 seconds, it works the exact same way that the clock example worked except that it sets the featuredItem state to the index of the array of array items 0-2 so it will cycle through that array endlessly.
    
    //I'm sure there is a faster way to do this but I don't know what it is
    useEffect(() => {
        const newItem = setInterval(() => {
            setFeaturedItem(featuredMenuItems[getNumber()])
        }, 5000)
        return () => {
            clearInterval(newItem)
        }
    }, [])

    return (
        <>
            <Title title="Hello Boba" />

            <NavBar />
            <main>
                {/* It then displays the FeaturedMenuCard using the state variable, which contains the specific item I want to be displayed */}
                <h1>Featured</h1>
                <FeaturedMenuCard {...featuredItem} />

                <p className="homeMessage">Welcome to Hello Boba! Explore our site using the tabs up above. We hope you enjoy our site as much as our food! (Wait a few seconds on this page to see other featured food items)</p>
            </main>
            <Footer />
        </>
    )
}