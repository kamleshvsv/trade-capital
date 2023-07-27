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
  const [profile, setProfile] = useState('Upload Photo')
  useEffect(()=> {
   getProfileDetails()
  },[])

  const getProfileDetails = () => {
    setIsMainLoader(true)
    let email = localStorage.getItem('email')
    ApiService.getUserInformation(email).then((res)=> {
      setIsMainLoader(false)
      if(res.status === 200){
        setIsEditable(false)
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
    name: userData && userData.name ? userData.name : '',
    mobile: userData && userData.mobile ?  userData.mobile : '',
    email : userData && userData.email  ?userData.email  : '',
    aadhar : userData && userData.aadhar_no  ? userData.aadhar_no : '',
    pan : userData && userData.pan  ? userData.pan : '',
    clientId : userData && userData.client_code  ? userData.client_code : '',
    user_photo : userData && userData.user_photo  ? userData.user_photo : '',
    bank : userData && userData.bank  ? userData.bank : '',
    ifsc :  userData && userData.ifsc  ? userData.ifsc : '',
    account_no :  userData && userData.account_no  ? userData.account_no : '',
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
    account_no: Yup.string()
    .required("Account no. is a required field"),
    bank: Yup.string()
    .required("Bank is a required field"),
    ifsc: Yup.string()
    .required("IFSC is a required field")
});

const passwordChange = () => {
  navigate('/change-password', { replace: true });
}

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

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
                Welcome , <span className="text-capitalize">{userData && userData.name}</span>
              </SoftTypography>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                  setDisabled(true);
                 
                  let req = {
                    "aadhar_no" : values.aadhar,
                    "email" : values.email,
                    "mobile" : values.mobile,
                    "name" : values.name,
                    "pan" : values.pan,
                    "bank_name" : values.bank,
                    "ifsc_code" : values.ifsc,
                    "account_no" : values.account_no,
                    "user_photo" : values.user_photo
                  }

                  ApiService.updateUserInfo(req).then((res)=> {
                    setDisabled(false);
                    if(res.status === 200){
                      toast.success('user info updated successfully')
                      getProfileDetails()
                    }
                  }).catch((err)=> {
                    setDisabled(false);
                      if(err.response){
                        if(err.response.data.message){
                          toast.error(err.response.data.message)
                         }else{
                            toast.error('something went wrong!')
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
                            setFieldValue,
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
                                    readOnly
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
                                     readOnly
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
                                     readOnly
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
                                <SoftBox>
                <SoftBox >
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Bank Name
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="text" 
                  placeholder="Bank Name" 
                  name="bank" 
                  id="bank" 
                  onChange={(e)=> {
                    handleChange(e)
                    }
                  }
                  onBlur={handleBlur}
                  className={`${errors.bank && touched.bank ? "is-invalid" : ""}`}/>
                {errors.bank && touched.bank ?  <ErrorMessage name="bank" component="div" className="error-message" /> : null}
                </SoftBox>


              <SoftBox>
                <SoftBox>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Account Number
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="number" 
                  placeholder="Account Number" 
                  name="account_no" 
                  id="account_no" 
                  onChange={(e)=> {
                    handleChange(e)
                    }
                  }
                  onBlur={handleBlur}
                  className={`${errors.account_no && touched.account_no ? "is-invalid" : ""}`}/>
                {errors.account_no && touched.account_no ?  <ErrorMessage name="account_no" component="div" className="error-message" /> : null}
             
              </SoftBox>

              <SoftBox>
                <SoftBox>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    IFSC Code
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="text" 
                  placeholder="IFSC code" 
                  name="ifsc" 
                  id="ifsc" 
                  onChange={(e)=> {
                    if(e.target.value !== ''){
                      setFieldValue('ifsc', e.target.value.toUpperCase())
                    }else{
                      setFieldValue('ifsc', '')
                    }
                    }
                  }
                  onBlur={handleBlur}
                  value={values.ifsc} 
                  className={`${errors.ifsc && touched.ifsc ? "is-invalid" : ""}`}/>
                {errors.ifsc && touched.ifsc ?  <ErrorMessage name="ifsc" component="div" className="error-message" /> : null}
              </SoftBox>
                                <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    User Photo
                  </SoftTypography>
                </SoftBox>
                <label className="file-upload">
                <h6>{profile}</h6>
                <input
                  type="file" 
                  name="user_photo" 
                  accept=".jpeg, .jpg"
                  id="user_photo" 
                  onChange={ async (e) => {
                    const file = e.target.files[0];
                    if(file === undefined){
                      return
                    }
                    setProfile(file?.name || '')
                    if (file?.size/1024/1024 < 2) {
                     const base64 = await convertToBase64(file);
                     setFieldValue('user_photo', base64)
                    }
                    else {
                      setProfile('Upload Photo')
                      setFieldValue('user_photo', '')
                      toast.error('Image size must be of 2MB or less');
                    };
                  }} />
                  </label>
                 
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
                Welcome , <span className="text-capitalize">{userData && userData.name}</span>
              </SoftTypography>
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Name : <span className="text-capitalize">{userData && userData.name}</span>
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
              <SoftBox pt={1} mb={0.5}>
              <SoftTypography variant="body2" color="text" fontWeight="medium">
                 Bank Name : {userData && userData?.bank_name} 
                </SoftTypography>
                </SoftBox>

                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  IFSC Code : {userData && userData?.ifsc_code} 
                </SoftTypography>
                </SoftBox>

                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Account Number : {userData && userData?.account_no} 
                </SoftTypography>
                </SoftBox>
            
              <SoftBox mt={2} bottom={0}>
                <SoftButton variant="gradient" color="info"  onClick={()=> {
                  setIsEditable(true)
                }}>Edit</SoftButton>
              </SoftBox>

              <hr />
              <Grid container >
              <Grid item xs={12} lg={4}>
                <div className="document-div">
                  <img src={userData && userData?.aadhar_front_photo} alt="Aadhar front"/>
                </div>
              </Grid>
              <Grid item xs={12} lg={4}>
              <div className="document-div">
                <img src={userData && userData?.aadhar_back_photo} alt="Aadhar Back"/>
                </div>
              </Grid>
              <Grid item xs={12} lg={4}>
              <div className="document-div">
                <img src={userData && userData?.pan_photo} alt="PAN"/>
                </div>
              </Grid>
              </Grid>
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
                height="70%"
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
