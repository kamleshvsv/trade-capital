import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/team-3.jpg";
import SoftButton from "components/SoftButton";
import { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import SoftInput from "components/SoftInput";
import { useNavigate } from "react-router-dom";
import ApiService from "API/ApiService";
import { toast } from "react-toastify";

function BuildByDevelopers() {
  const navigate = useNavigate()
  const [isEditable, setIsEditable] = useState(false)
  const [isMainLoader, setIsMainLoader] = useState(true)
  
  const [isDisabled, setDisabled] = useState(false);
  const [userData, setUserData] = useState()

  useEffect(()=> {
   getProfileDetails()
  },[])

  const getProfileDetails = () => {
    setIsMainLoader(true)
    let email = localStorage.getItem('email')
    ApiService.getUserInformation(email).then((res)=> {
      setIsMainLoader(false)
      if(res.status === 200){
        setUserData(res.data.data)
      }
    }).catch((err)=> {
      setIsMainLoader(false);
      if(err.response){
        if(err.response.data.message){
          toast.error(err.response.data.message)
         }else{
            toast.error('something went wrong!')
        }
      }
    })
  }

 
  const initialValues = {
    name: "",
    mobile: "",
    email : "",
    aadhar : "",
    pan : "",
    clientId : ""
}


const schema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email format"),
  name: Yup.string()
    .required("This field is required"),
    aadhar: Yup.string()
    .required("This field is required"),
    pan: Yup.string()
    .required("This field is required"),
    mobile: Yup.string()
    .required("This field is required"),
});

const passwordChange = () => {
  navigate('/change-password', { replace: true });
}

  return (
    <Card>
      <SoftBox p={2}>
      {isMainLoader ? (
            <div class="d-flex justify-content-center p-3">
                  <div>
                    <div className="spinner-grow text-success" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
          ) : (
        <Grid container spacing={3}>
        {isEditable ?  <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                Welcome , Kamlesh Vishwakarma
              </SoftTypography>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                  setIsEditable(false)
                
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
                            <SoftBox>
                                  <SoftBox >
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                      Name
                                    </SoftTypography>
                                  </SoftBox>
                                  <SoftInput 
                                    type="text" 
                                    placeholder="Name" 
                                    name="name" 
                                    id="name" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name} 
                                    className={`${errors.name && touched.name ? "is-invalid" : ""}`}/>
                                  {errors.name && touched.name ?  <ErrorMessage name="name" component="div" className="error-message" /> : null}
                                </SoftBox>
                                <SoftBox >
                                  <SoftBox >
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
                                <SoftBox >
                                  <SoftBox >
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                      Mobile
                                    </SoftTypography>
                                  </SoftBox>
                                  <SoftInput
                                    type="number" 
                                    placeholder="Mobile"
                                    name="mobile"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobile}
                                    className={`${errors.mobile && touched.mobile ? "is-invalid" : ""}`} />
                                  {errors.mobile && touched.mobile ? (
                                    <ErrorMessage name="mobile" component="div" className="error-message"/>
                                   ) : null}
                                </SoftBox>
                                <SoftBox >
                                  <SoftBox >
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                      Aadhar No.
                                    </SoftTypography>
                                  </SoftBox>
                                  <SoftInput
                                    type="number" 
                                    placeholder="aadhar"
                                    name="aadhar"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.aadhar}
                                    className={`${errors.aadhar && touched.aadhar ? "is-invalid" : ""}`} />
                                  {errors.aadhar && touched.aadhar ? (
                                    <ErrorMessage name="aadhar" component="div" className="error-message"/>
                                   ) : null}
                                </SoftBox>
                                <SoftBox>
                                  <SoftBox >
                                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                                      PAN No.
                                    </SoftTypography>
                                  </SoftBox>
                                  <SoftInput
                                    type="text" 
                                    placeholder="pan"
                                    name="pan"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.pan}
                                    className={`${errors.pan && touched.pan ? "is-invalid" : ""}`} />
                                  {errors.pan && touched.pan ? (
                                    <ErrorMessage name="pan" component="div" className="error-message"/>
                                   ) : null}
                                </SoftBox>
                             
                                <SoftBox mt={4} mb={1}>
                                {isDisabled ?  (
                                  <button className="soft-ui-btn" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                      {/* Loading... */}
                                  </button>
                                ) :  <button type="submit" className="soft-ui-btn" disabled={isDisabled} >Update</button>}
                                
                                </SoftBox>
                             </Form>
                          )}
                  </Formik>
            </SoftBox>
          </Grid> : (
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                Welcome , {userData && userData?.name} 
              </SoftTypography>
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Name : {userData && userData?.name} 
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Client ID : {userData && userData?.client_code} 
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Mobile : {userData && userData?.mobile} 
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                Email : {userData && userData?.email} 
                </SoftTypography> 
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Aadhar No. : {userData && userData?.aadhar_no} 
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>

               <SoftTypography variant="body2" color="text" fontWeight="medium">
                  PAN No. : {userData && userData?.pan} 
                </SoftTypography>

              </SoftBox>
            
              {/* <SoftBox mt={2} bottom={0}>
                <SoftButton variant="gradient" color="info"  onClick={()=> {
                  setIsEditable(true)
                }}>Edit</SoftButton>
              </SoftBox> */}

              <hr />
              <SoftBox mt={2} bottom={0}>
              <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Change Password
                  <span className="float-right cursor-pointer text-primary" onClick={passwordChange}>Change</span>
                </SoftTypography> 
              </SoftBox>
            </SoftBox>
          </Grid>
          )}
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="80%"
              />
              {userData && userData.user_photo ? <SoftBox component="img" src={userData.user_photo} alt={userData.name} width="100%" borderRadius="lg" height="70%"  /> : <SoftBox component="img" src={rocketWhite} alt="rocket" width="100%" borderRadius="lg" height="70%"  />}
              
            </SoftBox>
          </Grid>
        </Grid>
          )}
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
