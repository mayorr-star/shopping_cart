import App from "../App"
import Home from "../components/home/Home"
import Catalog from "../components/catalog/Catalog"
import ErrorPage from "../components/error/ErrorPage"
import About from "../components/about/About"
import ContactPage from "../components/contact/ContactPage"
import Cart from "../components/CartPage/Cart"

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
];

export default routes;
