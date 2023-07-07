
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";


import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import HomePage from "layouts/home";
import AboutUs from "layouts/authentication/components/About";
import ContactUS from "layouts/authentication/components/Contact";
import BankDetails from "layouts/BankDetails";
import AddBankDetails from "layouts/BankDetails/AddBankDetails";
import PaymentDetails from "layouts/Payment";
import PortfolioDetails from "layouts/Portfolio";
import LogOut from "layouts/authentication/sign-in/logout";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Bank Details",
    key: "bank-details",
    route: "/bank-details",
    icon: <CreditCard size="12px" />,
    component: <BankDetails />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Add Bank Details",
    key: "add-bank-details",
    route: "/add-bank-details",
    icon: <Cube size="12px" />,
    component: <AddBankDetails />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Payment",
    key: "payment",
    route: "/payment",
    icon: <CreditCard size="12px" />,
    component: <PaymentDetails />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Portfolio",
    key: "portfolio",
    route: "/portfolio",
    icon: <CustomerSupport size="12px" />,
    component: <PortfolioDetails />,
    noCollapse: true,
  },
  { type: "title", title: "", key: "account-pages" },
  
  {
    type: "none",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <Document size="12px" />,
    component: <HomePage />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "About",
    key: "about",
    route: "/about",
    icon: <SpaceShip size="12px" />,
    component: <AboutUs />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Contact",
    key: "contact",
    route: "/contact",
    icon: <SpaceShip size="12px" />,
    component: <ContactUS />,
    noCollapse: true,
  },
];

export default routes;