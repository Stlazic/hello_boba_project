import Title from "../components/Title.jsx";
import NavBar from "../components/Navbar.jsx";
import MenuItem from "../components/MenuItem.jsx";
import Footer from "../components/Footer.jsx";
import OrderButton from "../components/OrderButton.jsx";

import { MENU_ITEMS } from "../data.js";
import { useState } from "react";

export default function MenuPage() {

    const [foodSelection, setFoodSelection] = useState("all")

    function handleSelect(foodSelection) {
        setFoodSelection(foodSelection);
    }

    let foodType = foodSelection;

    // I should just use a loop
    if(foodSelection == "all") {
        foodType = 
            <div className="menuOutput">
                <MenuItem {...MENU_ITEMS[1]} />
                <MenuItem {...MENU_ITEMS[2]} />
                <MenuItem {...MENU_ITEMS[0]} />
                <MenuItem {...MENU_ITEMS[3]} />
                <MenuItem {...MENU_ITEMS[4]} />
                <MenuItem {...MENU_ITEMS[5]} />
                <MenuItem {...MENU_ITEMS[6]} />
                <MenuItem {...MENU_ITEMS[7]} />
                <MenuItem {...MENU_ITEMS[8]} />
            </div>;
    }
    else if(foodType == "drinks") {
        foodType = 
        <div className="menuOutput">
            <MenuItem {...MENU_ITEMS[0]} />
            <MenuItem {...MENU_ITEMS[1]} />
            <MenuItem {...MENU_ITEMS[2]} />
        </div>;
    } else if(foodType == "food") {
        foodType = 
        <div className="menuOutput">
            <MenuItem {...MENU_ITEMS[3]} />
            <MenuItem {...MENU_ITEMS[4]} />
            <MenuItem {...MENU_ITEMS[5]} />
        </div>;
    } else if(foodType == "dessert") {
        foodType = 
        <div className="menuOutput">
            <MenuItem {...MENU_ITEMS[6]} />
            <MenuItem {...MENU_ITEMS[7]} />
            <MenuItem {...MENU_ITEMS[8]} />
        </div>;
    }

    

    return (
        <>
            <Title title="Hello Boba | Menu" />

            <NavBar />
            <main className="menuMain">
                <h1>Menu</h1>
                <menu>
                    <OrderButton isSelected={foodSelection ==="all"} onSelect={() => handleSelect("all")}>All</OrderButton>

                    <OrderButton isSelected={foodSelection ==="drinks"} onSelect={() => handleSelect("drinks")}>Drinks</OrderButton>

                    <OrderButton isSelected={foodSelection ==="food"} onSelect={() => handleSelect("food")}>Food</OrderButton>

                    <OrderButton isSelected={foodSelection ==="dessert"} onSelect={() => handleSelect("dessert")}>Dessert</OrderButton>
                </menu>

                <div>
                    {foodType}
                </div>
            </main>
            <Footer />
        </>
    )
}