import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

export default function NavBar() {

    const [openMenu, setOpenMenu] = useState(false);


    return (
        <header>
            <NavLink to='/'>
                <h1>Hello Boba</h1> 
            </NavLink>

            <div className={`navItems ${openMenu ? "menuOn" : "menuOff"}`}>
                
                <NavLink to='/menu'>
                    Menu
                </NavLink>

                <NavLink to='/locations'>
                    Locations
                </NavLink>

                <NavLink to='/about'>
                    About
                </NavLink>

                <NavLink to='/promotions'>
                    Promotions
                </NavLink>

                <NavLink to='/news'>
                    News
                </NavLink>
            </div>

            {/* This is super similar to the toggle color thing we did in class im happy i could apply it here */}
            <i className="fa-solid fa-bars hamMenu" onClick={() => setOpenMenu(!openMenu)}></i>


        </header>
    )
}