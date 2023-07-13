import { Link,useNavigate } from "react-router-dom";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApiServices from './../../../API/ApiService'
function SignIn() {
  
  const navigate = useNavigate()
  const [isDisabled, setDisabled] = useState(false);
  const [isLoginComponent, setIsLoginComponent] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('email')){
      navigate('/dashboard', { replace: true });
    }
  },[])

  const initialValues = {
    email: "",
    password: ""
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const initialForgotValues  = {
  email: "",
}

const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
});





  return (
    <>
    {isLoginComponent ? (
      <CoverLayout
      title="Sign In"
      description=""
      image={curved9}
    >
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setDisabled(true);
        console.log(values,"values")
        var req = {
          "email" : values.email,
          "code" : 0,
          "password" : values.password
        }
        ApiServices.login(req).then((res) => {
            console.log(res, "DDDDDDDD")
            toast.success("Login Successfull.");
            localStorage.setItem('email', values.email)
            navigate('/dashboard', { replace: true });
          }).catch((err)=> {
            toast.error(err)
          })
        
        // if((values.email === 'admin@gmail.com' && values.password === '12345678') || (values.email === 'user@gmail.com' && values.password === '12345678')){
        //   toast.success("Login Successfull.");
        //   setTimeout(() => {
        //     localStorage.setItem('email', values.email)
        //     navigate('/dashboard', { replace: true });
        //   }, 3000);
        // }else{
        //   setDisabled(false)
        //   toast.error("Please check user creadentials");
        // }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form className="login-padding">
              <SoftBox mb={2}>
                <SoftBox mb={1} ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Email
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  id="email" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} 
                  className={`${errors.email && touched.email ? "is-invalid" : ""}`}/>
                {errors.email && touched.email ?  <ErrorMessage name="email" component="div" className="error-message" /> : null}
              </SoftBox>
              <SoftBox mb={2}>
                <SoftBox mb={1} ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Password
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                  type="password" 
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={`${errors.password && touched.password ? "is-invalid" : ""}`} />
                {errors.password && touched.password ? (
                  <ErrorMessage name="password" component="div" className="error-message"/>
                 ) : null}
              </SoftBox>
              <SoftBox display="flex" alignItems="center">
                <SoftTypography
                  variant="button"
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  onClick={()=> {
                    setIsLoginComponent(!isLoginComponent)
                  }}
                >
                  Forgot Password?
                </SoftTypography>
              </SoftBox>
              <SoftBox mt={4} mb={1}>
              {isDisabled ?  (
                <button className="soft-ui-btn" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {/* Loading... */}
                </button>
              ) :  <button type="submit" className="soft-ui-btn" disabled={isDisabled} >Submit</button>}
               
              </SoftBox>
           </Form>
        )}
    </Formik>
    <SoftBox mt={3} textAlign="center">
    <SoftTypography variant="button" color="text" fontWeight="regular">
    Don&apos;t have an account?{" "}
    <SoftTypography
      component={Link}
      to="/authentication/sign-up"
      variant="button"
      color="info"
      fontWeight="medium"
      textGradient
      type="submit"
    >
      Sign up
    </SoftTypography>
  </SoftTypography>
</SoftBox>
     
    </CoverLayout>
    ) : (
      <CoverLayout
      title="Forgot Password"
      description=""
      image={curved9}
    >
    <Formik
      initialValues={initialForgotValues}
      validationSchema={forgotSchema}
      onSubmit={(values) => {
        setDisabled(true);
   
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form className="login-padding">
              <SoftBox mb={2}>
                <SoftBox mb={1} ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Enter your registered Email
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  id="email" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} 
                  className={`${errors.email && touched.email ? "is-invalid" : ""}`}/>
                {errors.email && touched.email ?  <ErrorMessage name="email" component="div" className="error-message" /> : null}
              </SoftBox>
              
              <SoftBox mt={4} mb={1}>
                {isDisabled ?  (
                  <button className="soft-ui-btn" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {/* Loading... */}
                  </button>
                ) :  <button type="submit" className="soft-ui-btn" disabled={isDisabled} >Submit</button>}
              </SoftBox>
           </Form>
        )}
    </Formik>
    <SoftBox mt={3} textAlign="center">
    <SoftTypography variant="button" color="text" fontWeight="regular"     >
   Back to <strong className="cursor-pointer" onClick={()=> {
  setIsLoginComponent(!isLoginComponent)
}}>Sign In ?{" "}</strong>
  </SoftTypography>
</SoftBox>
     
    </CoverLayout>
    )} 
    </>

   
  )
}

export default SignIn;
