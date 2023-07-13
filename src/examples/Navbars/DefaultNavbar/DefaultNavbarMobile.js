
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import SoftBox from "components/SoftBox";
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@mui/material";

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect();
  const navigate =  useNavigate()
  const location = useLocation()

  const goToService = (url) => {
      navigate(`/${url}`);
  }
  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <SoftBox px={0.5}>
        <DefaultNavbarLink icon="" name="home" route="/home" />
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
        <a className="dropdown-toggle menu"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Features
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className={`${location.pathname === '/commodity-trading' ? 'is-active-dropdown' : ''}`} ><a onClick={() => { goToService('commodity-trading')}} className="dropdown-item" >Commodity Trading</a></li>
          <li className={`${location.pathname === '/currency-trading'  ? 'is-active-dropdown' : ''}`}><a  onClick={() => {goToService('currency-trading')}} className="dropdown-item" >Currency Trading</a></li>
          <li className={`${location.pathname === '/derivatives-trading'  ? 'is-active-dropdown' : ''}`}><a onClick={() => {goToService('derivatives-trading')}} className="dropdown-item">Derivative Trading</a></li>
          <li className={`${location.pathname === '/equity-trading'  ? 'is-active-dropdown' : ''}`}><a onClick={() => {goToService('equity-trading')}} className="dropdown-item">Equity Trading</a></li>
          <li className={`${location.pathname === '/portfolio-management'  ? 'is-active-dropdown' : ''}`}><a onClick={() => {goToService('portfolio-management')}} className="dropdown-item">Portfolio Management</a></li>
          <li className={`${location.pathname === '/wealth-management'  ? 'is-active-dropdown' : ''}`}><a onClick={() => {goToService('wealth-management')}} className="dropdown-item">Wealth Management</a></li>
        </ul>
      </div>
      </SoftBox>
        {/* <DefaultNavbarLink icon="" name="features" route="/features" /> */}
        <DefaultNavbarLink icon="" name="about" route="/about" />
        <DefaultNavbarLink icon="" name="contact" route="/contact" />
        <DefaultNavbarLink icon="" name="Sign In" route="/authentication/sign-in" />
        <DefaultNavbarLink icon="" name="Sign Up" route="/authentication/sign-up" />
      </SoftBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
