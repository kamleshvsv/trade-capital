import { useState, useEffect } from "react";

// react-router components
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from './../../../assets/images/logo.jpg'
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Capital Growth Trader React base styles
import breakpoints from "assets/theme/base/breakpoints";

function DefaultNavbar({ transparent, light, action }) {
  const navigate =  useNavigate()
  const location = useLocation()

  const goToService = (url) => {
      navigate(`/${url}`, { replace: true });
  }
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <SoftBox
        py={1.5}
        px={{ xs: transparent ? 4 : 5, sm: transparent ? 2 : 5, lg: transparent ? 0 : 5 }}
        my={2}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="section"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <SoftBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
        <img src={logo} alt="logo" className="logo-style"/>
          {/* <SoftTypography variant="button" component="h6" fontWeight="bold"  className="company-name-other">
            Capital Growth Trader
          </SoftTypography> */}
        </SoftBox>
        <SoftBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink icon="" name="home" route="/home" light={light} />
          <SoftBox
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer", userSelect: "none" }}
    >
      <Icon
      >
      </Icon>
          <div className="dropdown">
        <a href={() => false} className="dropdown-toggle menu"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Features
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className={`${location.pathname === '/commodity-trading' ? 'is-active-dropdown' : ''}`} ><a href={() => false} onClick={() => { goToService('commodity-trading')}} className="dropdown-item" >Commodity Trading</a></li>
          <li className={`${location.pathname === '/currency-trading'  ? 'is-active-dropdown' : ''}`}><a href={() => false}  onClick={() => {goToService('currency-trading')}} className="dropdown-item" >Currency Trading</a></li>
          <li className={`${location.pathname === '/derivatives-trading'  ? 'is-active-dropdown' : ''}`}><a href={() => false} onClick={() => {goToService('derivatives-trading')}} className="dropdown-item">Derivative Trading</a></li>
          <li className={`${location.pathname === '/equity-trading'  ? 'is-active-dropdown' : ''}`}><a href={() => false} onClick={() => {goToService('equity-trading')}} className="dropdown-item">Equity Trading</a></li>
          <li className={`${location.pathname === '/portfolio-management'  ? 'is-active-dropdown' : ''}`}><a href={() => false} onClick={() => {goToService('portfolio-management')}} className="dropdown-item">Portfolio Management</a></li>
          <li className={`${location.pathname === '/wealth-management'  ? 'is-active-dropdown' : ''}`}><a href={() => false} onClick={() => {goToService('wealth-management')}} className="dropdown-item">Wealth Management</a></li>
        </ul>
      </div>
      </SoftBox>
          {/* <DefaultNavbarLink icon="" name="features" route="/features" light={light} /> */}
          <DefaultNavbarLink
            icon=""
            name="about"
            route="/about"
            light={light}
          />
          <DefaultNavbarLink
            icon=""
            name="contact"
            route="/contact"
            light={light}
          />
        </SoftBox>
        {action &&
          (action.type === "internal" ? (
            <SoftBox display={{ xs: "none", lg: "inline-block" }}>
              <SoftButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                {action.label}
              </SoftButton>
            </SoftBox>
          ) : (
            <SoftBox display={{ xs: "none", lg: "inline-block" }}>
              <SoftButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                {action.label}
              </SoftButton>
            </SoftBox>
          ))}
        <SoftBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </SoftBox>
      </SoftBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
