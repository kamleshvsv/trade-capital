
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Trade Capital React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import CoverLayout from "../components/CoverLayout";

function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <CoverLayout
      title=" Create a New Account !"
      description=""
      image={curved9}
    >
    <div className="scrollable-form">
    <SoftBox component="form" role="form">
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Name
            </SoftTypography>
          </SoftBox>
          <SoftInput type="text" placeholder="Name" />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput type="email" placeholder="Email" />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Mobile No.
            </SoftTypography>
          </SoftBox>
          <SoftInput type="number" placeholder="Mobile Nubmber" />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Aadhar No.
            </SoftTypography>
          </SoftBox>
          <SoftInput type="number" placeholder="Aadhar Nubmber" />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              PAN
            </SoftTypography>
          </SoftBox>
          <SoftInput type="number" placeholder="PAN Nubmber" />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Password" />
        </SoftBox>
       
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Confirm Password
            </SoftTypography>
          </SoftBox>
          <SoftInput type="password" placeholder="Confirm Password" />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Aadhar Front Photo
            </SoftTypography>
          </SoftBox>
          <SoftInput type="file" placeholder="Aadhar Front Photo" />
        </SoftBox>
        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Aadhar Back Photo
            </SoftTypography>
          </SoftBox>
          <SoftInput type="file" placeholder=" Aadhar Back Photo" />
        </SoftBox>

        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              PAN Card Photo
            </SoftTypography>
          </SoftBox>
          <SoftInput type="file" placeholder="PAN Photo" />
        </SoftBox>

        <SoftBox mb={1}>
          <SoftBox  ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              User Photo
            </SoftTypography>
          </SoftBox>
          <SoftInput type="file" placeholder="User Photo" />
        </SoftBox>
        <SoftBox mt={2} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth>
            sign up
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
      </SoftBox>
    </div>
     
    </CoverLayout>
  );
}

export default SignUp;
