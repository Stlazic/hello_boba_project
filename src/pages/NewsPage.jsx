import Title from "../components/Title.jsx";
import NavBar from "../components/Navbar.jsx";
import NewsItem from "../components/NewsItem.jsx";
import Footer from "../components/Footer.jsx";

import { NEWS_ITEMS } from "../data.js";

export default function NewsPage() {

    return (
        <>
            <Title title="Hello Boba | News" />

            <NavBar />
            <main>
                <h1>News</h1>
                <NewsItem {...NEWS_ITEMS[0]}/>
                <NewsItem {...NEWS_ITEMS[1]}/>
                <NewsItem {...NEWS_ITEMS[2]}/>
                <NewsItem {...NEWS_ITEMS[3]}/>
                <NewsItem {...NEWS_ITEMS[4]}/>
            </main>
            <Footer />


        </>
    )
}