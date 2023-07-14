
import { Link, useNavigate } from "react-router-dom";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import CoverLayout from "../components/CoverLayout";
import ApiService from "API/ApiService";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function OTPVerification() {
  const [isDisabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  useEffect(()=> {
    if(localStorage.getItem('register_user_data')){
       let data = JSON.parse(localStorage.getItem('register_user_data'))
        setEmail(data.email)
    }else{
      navigate('/authentication/sign-in', { replace: true });
    }
  },[])

  useEffect(()=> {
    console.log(email,"data")    
  },[email])

  const initialValues = {
    email: email ? email : '',
    otp : "",
}

const schema = Yup.object().shape({

  otp: Yup.string()
    .required("Otp is a required field")
    .min(5, "OTP must be at least 6 characters")
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
            "email": email,
            "otp": values.otp,
          }
          ApiService.verifyOTP(req).then((res) => {
            console.log(res,"Outerddd")
            if(res.data.status_code === 200){
              toast.success(res.data.message)
              localStorage.setItem('email', req.email)
              localStorage.setItem('token', res.data.data.access_token)
              setDisabled(false)
              navigate('/dashboard', { replace: true });
            }
          })
          .catch((err)=> {
            setDisabled(false)
          })
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
                <SoftBox mb={2} ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Check your email : {email}. You must have received an email with the OTP.
                  </SoftTypography>
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
                 
                </button>
              ) :  <button type="submit" className="soft-ui-btn" disabled={isDisabled} >Submit</button>}
               
              </SoftBox>
           </Form>
        )}
    </Formik>
    <SoftBox mt={3} textAlign="center">
            
            </SoftBox>
    </div>
     
    </CoverLayout>
  );
}

export default OTPVerification;
