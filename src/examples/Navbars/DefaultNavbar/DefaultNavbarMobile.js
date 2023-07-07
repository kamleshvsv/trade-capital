
import PropTypes from "prop-types";
import Menu from "@mui/material/Menu";
import SoftBox from "components/SoftBox";
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";

function DefaultNavbarMobile({ open, close }) {
  const { width } = open && open.getBoundingClientRect();

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
        <DefaultNavbarLink icon="" name="features" route="/features" />
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
