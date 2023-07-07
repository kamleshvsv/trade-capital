
import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Trade Capital React components
import SoftBox from "components/SoftBox";

// Trade Capital React context
import { useSoftUIController, setLayout } from "context";

function DashboardLayout({ children }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav } = controller;
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    if(localStorage.getItem('email')){
      setIsVisible(true)
    }else{
      setIsVisible(false)
      navigate('/authentication/sign-in', { replace: true });
    }
  },[])

  useEffect(() => {
    setLayout(dispatch, "dashboard");
  }, [pathname]);

  return (
    <>
    {isVisible ? (
    <SoftBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </SoftBox>
    ) : null}
    </>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
