import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PromotionsPage from "./pages/PromotionsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
  {path: '/' || '/home', element: <HomePage />},
  {path: '/menu', element: <MenuPage />},
  {path: '/locations', element: <LocationsPage />},
  {path: '/about', element: <AboutPage />},
  {path: '/promotions', element: <PromotionsPage />},
  {path: '/news', element: <NewsPage />},
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
