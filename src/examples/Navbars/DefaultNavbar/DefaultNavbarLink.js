import { Link, NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function DefaultNavbarLink({ icon, name, route, light }) {
  const navigate =  useNavigate()

  const goToService = (url) => {
      navigate(`/${url}`, { replace: true });
  }
  return (
    <SoftBox
      component={Link}
      to={route}
      mx={1}
      p={1}
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer", userSelect: "none" }}
    >
      <Icon
        sx={{
          color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
          verticalAlign: "middle",
        }}
      >
        {icon}
      </Icon>
      {
        name === 'features' ? (
          <div className="dropdown">
        <a className="dropdown-toggle menu"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Features
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a onClick={() => { goToService('commodity-trading')}} className="dropdown-item" >Commodity Trading</a></li>
          <li><a  onClick={() => {goToService('currency-trading')}} className="dropdown-item" >Currency Trading</a></li>
          <li><a onClick={() => {goToService('derivatives-trading')}} className="dropdown-item">Derivative Trading</a></li>
          <li><a onClick={() => {goToService('equity-trading')}} className="dropdown-item">Equity Trading</a></li>
          <li><a onClick={() => {goToService('portfolio-management')}} className="dropdown-item">Portfolio Management</a></li>
          <li><a onClick={() => {goToService('wealth-management')}} className="dropdown-item">Wealth Management</a></li>
        </ul>
      </div>
        ) : (
          <NavLink to={route}  className= {(navData) => (navData.isActive ? "is-active menu" : 'none menu')}> {name}</NavLink>
        )
      }
      
   
    </SoftBox>
  );
}

DefaultNavbarLink.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  light: PropTypes.bool.isRequired,
};

export default DefaultNavbarLink;
