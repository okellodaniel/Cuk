
import { ContactPage } from "@mui/icons-material"
import { createBrowserRouter } from "react-router-dom"
import HomePage from "../../features/Home/homePage"
import AboutPage from "../../features/about/AboutPage"
import ProductDetails from "../../features/catalogue/ProductDetails"
import Catalogue from "../../features/catalogue/catalogue"
import App from "../layout/App"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'catalogue', element: <Catalogue /> },
            { path: 'catalogue/:id', element: <ProductDetails /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> }

        ]
    }])

