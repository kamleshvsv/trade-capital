
import { Link } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import CoverLayout from "../components/CoverLayout";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useEffect, useState } from "react";

function OTPVerification() {
  const [isDisabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('')

  useEffect(()=> {
    if(localStorage.getItem('register_email')){
       let email = localStorage.getItem('register_email')
        setEmail(email)
    }
    
  },[])

  const initialValues = {
    email: email ? email : '',
    otp : "",
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  otp: Yup.string()
    .required("Otp is a required field")
    .min(6, "OTP must be at least 6 characters")
    .max(6, "OTP not more then 6 characters"),
});



  return (
    <CoverLayout
      title="OTP Verifications"
      description=""
      image={curved9}
    >
    <div className="scrollable-form">
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setDisabled(true);
      

        let req = {
            "email": values.email,
            "otp": values.otp,
          }

        //   ApiServices.registerUser(req).then((res) => {
        //     if(res.data.data.status_code === 200){
        //       setDisabled(false)
        //     }
        //   })
        //   .catch((err)=> {
        //     setDisabled(false)
        //   })
        
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        }) => (
          <Form className="login-padding">
        
              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Email
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="email" 
                  readOnly
                  placeholder="Email" 
                  name="email" 
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} 
                  className={`${errors.email && touched.email ? "is-invalid" : ""}`}/>
                {errors.email && touched.email ?  <ErrorMessage name="email" component="div" className="error-message" /> : null}
              </SoftBox>
              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    OTP
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="number" 
                  placeholder="Enter OTP" 
                  name="otp" 
                  id="otp" 
                  max="6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.otp} 
                  className={`${errors.otp && touched.otp ? "is-invalid" : ""}`}/>
                  
                {errors.otp && touched.otp ?  <ErrorMessage name="otp" component="div" className="error-message" /> : null}
              </SoftBox>
            <SoftBox mt={4} mb={1}>
              {isDisabled ?  (
                <button className="soft-ui-btn" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {/* Loading... */}
                </button>
              ) :  <button type="submit" className="soft-ui-btn" disabled={isDisabled} >Verfiy</button>}
               
              </SoftBox>
           </Form>
        )}
    </Formik>
    <SoftBox mt={3} textAlign="center">
              {/* <SoftTypography variant="button" color="text" fontWeight="regular">
                
                <SoftTypography
                  component={Link}
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Resent OTP
                </SoftTypography>
              </SoftTypography> */}
            </SoftBox>
    </div>
     
    </CoverLayout>
  );
}

export default OTPVerification;
