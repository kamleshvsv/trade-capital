
import Dashboard from "layouts/dashboard";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Basket from  "examples/Icons/Basket";

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
import CommodityTrading from "layouts/authentication/components/Services/commodity";
import CurrencyTrading from "layouts/authentication/components/Services/currency";
import DerivativeTrading from "layouts/authentication/components/Services/derivative";
import EquityTrading from "layouts/authentication/components/Services/equity";
import PortfolioTrading from "layouts/authentication/components/Services/portfolio";
import WealthManagement from "layouts/authentication/components/Services/wealth";
import AdminPaymentDetails from "layouts/Admin/payment";
import AdminBankDetails from "layouts/Admin/bank-details";
import AdminDashboard from "layouts/Admin/dashboard";
import OTPVerification from "layouts/authentication/otp-verfication";
import UserList from "layouts/Admin/Users/users";
import Settings from "examples/Icons/Settings";
import ChangePassword from "layouts/Password";
import ContactDetails from "layouts/Admin/Contact-details";

const routes = [
  // {
  //   type: "admin",
  //   name: "Dashboard",
  //   key: "admin-dashboard",
  //   route: "/admin-dashboard",
  //   icon: <Shop size="12px" />,
  //   component: <AdminDashboard />,
  //   noCollapse: true,
  // },
  {
    type: "admin",
    name: "Bank Details",
    key: "admin-bank-details",
    route: "/admin-bank-details",
    icon: <CreditCard size="12px" />,
    component: <AdminBankDetails />,
    noCollapse: true,
  },
  {
    type: "admin",
    name: "Users",
    key: "users",
    route: "/users",
    icon: <SpaceShip size="12px" />,
    component: <UserList />,
    noCollapse: true,
  },
  {
    type: "admin",
    name: "Payment Details",
    key: "admin-payment-details",
    route: "/admin-payment-details",
    icon: <CreditCard size="12px" />,
    component: <AdminPaymentDetails />,
    noCollapse: true,
  },
  {
    type: "admin",
    name: "Contact Details",
    key: "admin-contact-details",
    route: "/admin-contact-details",
    icon: <CustomerSupport size="12px" />,
    component: <ContactDetails />,
    noCollapse: true,
  },
  
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
  // {
  //   type: "collapse",
  //   name: "Add Bank Details",
  //   key: "add-bank-details",
  //   route: "/add-bank-details",
  //   icon: <Cube size="12px" />,
  //   component: <AddBankDetails />,
  //   noCollapse: true,
  // },
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
    name: "Verfication OTP",
    key: "verify-otp",
    route: "/verify-otp",
    icon: <SpaceShip size="12px" />,
    component: <OTPVerification />,
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
  {
    type: "none",
    name: "Commodity Trading",
    key: "commodity-trading",
    route: "/commodity-trading",
    icon: <SpaceShip size="12px" />,
    component: <CommodityTrading />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Currency Trading",
    key: "currency-trading",
    route: "/currency-trading",
    icon: <SpaceShip size="12px" />,
    component: <CurrencyTrading />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Derivatives Trading",
    key: "derivatives-trading",
    route: "/derivatives-trading",
    icon: <SpaceShip size="12px" />,
    component: <DerivativeTrading />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Equity Trading",
    key: "equity-trading",
    route: "/equity-trading",
    icon: <SpaceShip size="12px" />,
    component: <EquityTrading />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Portfolio Management",
    key: "portfolio-management",
    route: "/portfolio-management",
    icon: <SpaceShip size="12px" />,
    component: <PortfolioTrading />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Wealth Management",
    key: "wealth-management",
    route: "/wealth-management",
    icon: <SpaceShip size="12px" />,
    component: <WealthManagement />,
    noCollapse: true,
  },
  {
    type: "none",
    name: "Change Password",
    key: "change-password",
    route: "/change-password",
    icon: <Settings size="12px" />,
    component: <ChangePassword />,
    noCollapse: true,
  },
];

export default routes;
