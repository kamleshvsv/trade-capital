
import {  useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useState } from "react";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Card } from "@mui/material";
import ApiService from "API/ApiService";
function ChangePassword() {
  const navigate = useNavigate()
  const [isDisabled, setDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false)

  const initialValues = {
    oldPassword : "",
    password: "",
    confirmPassword: ""

}

const schema = Yup.object().shape({
    oldPassword: Yup.string()
    .required("Old password is a required field"),
    password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
    .required("Password is a required field")
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8, "Password must be at least 8 characters"),
   
});




  return (

      <DashboardLayout>
        <DashboardNavbar />
            <SoftBox py={3}>
                <Card className="p-4">
                <div className="text-center">
                    <h4>Change Password</h4>
                </div>
                <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                          setDisabled(true);
                        
                          let req = {
                              "oldpassword": values.oldPassword,
                              "password": values.password,
                            }
                        
                            ApiService.changePassword(req).then((res) => {
                              if(res.data.status_code === 200){
                                    navigate('/change-password', { replace: true });
                              }
                            })
                            .catch((err)=> {
                              if(err.response){
                                if(err.response.status === 400){
                                  console.log("value", err.response.data)
                                }
                              }
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
                              <SoftBox>
                                    <SoftBox ml={0.5}>
                                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Old Password
                                      </SoftTypography>
                                    </SoftBox>
                                    <SoftInput
                                      type="text" 
                                      placeholder="Old Password" 
                                      name="oldPassword" 
                                      id="oldPassword" 
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.oldPassword} 
                                      className={`${errors.oldPassword && touched.oldPassword ? "is-invalid" : ""}`}/>
                                    {errors.oldPassword && touched.oldPassword ?  <ErrorMessage name="oldPassword" component="div" className="error-message" /> : null}
                                  </SoftBox>
                                  <SoftBox >
                                    <SoftBox ml={0.5}>
                                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                                       New Password
                                      </SoftTypography>
                                    </SoftBox>
                                    <SoftInput  
                                      type={isVisible ? 'text' : 'password'}
                                      placeholder="Password"
                                      name="password"
                                      autoComplete="disabled"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.password}
                                      className={`${errors.password && touched.password ? "is-invalid" : ""}`} />

                                      {isVisible ? <VisibilityIcon className="password-visible-icon" onClick={() => {
                                        setIsVisible(!isVisible)
                                      }}/> :    <VisibilityOffIcon className="password-visible-icon" onClick={() => {
                                        setIsVisible(!isVisible)
                                      }}/>}
                                    {errors.password && touched.password ? (
                                      <ErrorMessage name="password" component="div" className="error-message"/>
                                     ) : null}
                                  </SoftBox>
                                  <SoftBox >
                                    <SoftBox ml={0.5}>
                                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Confirm Password
                                      </SoftTypography>
                                    </SoftBox>
                                    <SoftInput 
                                      type={isVisible ? 'text' : 'password'}
                                      placeholder="Confirm Password"
                                      name="confirmPassword"
                                      autoComplete="disabled"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.confirmPassword}
                                      className={`${errors.confirmPassword && touched.confirmPassword ? "is-invalid" : ""}`} />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                      <ErrorMessage name="confirmPassword" component="div" className="error-message"/>
                                     ) : null}
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
                </Card>
            </SoftBox>
        </DashboardLayout>
  );
}

export default ChangePassword;




