import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PromotionsPage from "./pages/PromotionsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
  {path: '/hello_boba_project/', element: <HomePage />},
  {path: '/hello_boba_project/menu', element: <MenuPage />},
  {path: '/hello_boba_project/locations', element: <LocationsPage />},
  {path: '/hello_boba_project/about', element: <AboutPage />},
  {path: '/hello_boba_project/promotions', element: <PromotionsPage />},
  {path: '/hello_boba_project/news', element: <NewsPage />},
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
