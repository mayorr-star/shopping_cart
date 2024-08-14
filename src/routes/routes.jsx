import App from "../components/App/App"
import Home from "../components/Home/Home"
import Catalog from "../components/catalog/Catalog"
import Cart from "../components/Cart/Cart"
import ErrorPage from "../components/error/ErrorPage"

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/", element: <Home/>},
            {path: "catalog", element: <Catalog/>},
            {path: "cart", element: <Cart/>}
        ]
    }
]

export default routes