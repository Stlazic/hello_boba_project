import { NavLink } from "react-router-dom";

export default function Footer() {

    return (
        <footer>
            <nav>
                <p>Looking for our Hours?</p>
                <NavLink to="/locations">Locations</NavLink>
            </nav>

            <section>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-yelp"></i></a>
                <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
            </section>

            <p>Copyright &copy; 2024 Hello Boba All Rights Reserved</p>
        </footer>
    )
}