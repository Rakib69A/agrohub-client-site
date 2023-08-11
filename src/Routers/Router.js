import ContactUs from "../Components/Pages/ContactUs/ContactUs";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layout/MainLayout/MainLayout");
const { default: ErrorPage } = require("../Components/Shared/ErrorPage/ErrorPage");
const { default: Home } = require("../Components/Pages/Home/Home");
const { default: AboutUs } = require("../Components/Pages/AboutUs/AboutUs");
const { default: Blogs } = require("../Components/Pages/Blogs/Blogs");
const { default: HelpCenter } = require("../Components/Pages/HelpCenter/HelpCenter");
const { default: Login } = require("../Components/Pages/Login/Login");
const { default: Register } = require("../Components/Pages/Register/Register");
const { default: Shop } = require("../Components/Pages/Shop/Shop");

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/helpcenter",
                element: <HelpCenter></HelpCenter>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/contactus",
                element: <ContactUs></ContactUs>
            },
        ]
    }
])
export default router;