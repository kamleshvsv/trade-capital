
// react-router-dom components
import { Link } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// Capital Growth Trader React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
import CoverLayout from "../components/CoverLayout";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useState } from "react";

import ApiServices from './../../../API/ApiService';
function SignUp() {
  const [isDisabled, setDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [aadhar1, setAadhar1] = useState('Upload Photo')
  const [aadhar2, setAadhar2] = useState('Upload Photo')
  const [pan, setPan] = useState('Upload Photo')
  const [profile, setProfile] = useState('Upload Photo')

  const initialValues = {
    name : "name",
    email: "kamlesh@gmail.com",
    mobileNo : "9876543210",
    aadhar : "13215113211222",
    pan : "BNZAA2318J",
    password: "12345678",
    confirmPassword: "12345678",
    aadharFrontPhoto : "",
    aadharBackPhoto : "",
    panPhoto : "",
    profilePhoto : ""

}

const schema = Yup.object().shape({
  name: Yup.string()
  .required("Name is a required field"),
  mobileNo: Yup.string()
  .min(10, "Mobile must be at least 10 digit")
  .max(12, "Mobile must be at least 12 digit")
  .required("Mobile is a required field"),
  aadhar: Yup.string()
  .min(14, "Aadhar must be at least 14 digit")
  .required("Aadhar is a required field"),
  pan: Yup.string()
  .matches(
    /^([A-Z]{5}[0-9]{4}[A-Z]{1})$/g,
          "Invalid PAN number"
        )
  .required("PAN is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
    .required("Password is a required field")
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8, "Password must be at least 8 characters"),
    aadharFrontPhoto: Yup.string()
    .required("Aadhar front photo is a required field"),
    aadharBackPhoto: Yup.string()
    .required("Aadhar back photo is a required field"),
    panPhoto: Yup.string()
    .required("PAN photo is a required field"),
    profilePhoto: Yup.string()
    .required("Profile photo is a required field")
});

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
    <CoverLayout
      title=" Create a New Account !"
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
            "mobile": values.mobileNo,
            "email": values.email,
            "aadhar_no": values.aadhar,
            "pan": values.aadhar,
            "password": values.password,
            "aadhar_front_photo": values.aadharFrontPhoto,
            "aadhar_back_photo": values.aadharBackPhoto,
            "pan_photo": values.panPhoto,
            "user_photo": values.profilePhoto,
          }

          ApiServices.registerUser(req).then((res) => {
            console.log(res, "DDDDDDDD")
            setDisabled(false)
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
          <SoftBox>
                <SoftBox ml={0.5}>
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
              <SoftBox>
                <SoftBox ml={0.5}>
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
              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Mobile
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="number" 
                  placeholder="Mobile No." 
                  name="mobileNo" 
                  id="mobileNo" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobileNo} 
                  className={`${errors.mobileNo && touched.mobileNo ? "is-invalid" : ""}`}/>
                  
                {errors.mobileNo && touched.mobileNo ?  <ErrorMessage name="mobileNo" component="div" className="error-message" /> : null}
              </SoftBox>

              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Aadhar No.
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="number" 
                  placeholder="Aadhar No." 
                  name="aadhar" 
                  id="aadhar" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.aadhar} 
                  className={`${errors.aadhar && touched.aadhar ? "is-invalid" : ""}`}/>
                {errors.aadhar && touched.aadhar ?  <ErrorMessage name="aadhar" component="div" className="error-message" /> : null}
              </SoftBox>

              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    PAN No.
                  </SoftTypography>
                </SoftBox>
                <SoftInput
                  type="text" 
                  placeholder="PAN No." 
                  name="pan" 
                  id="pan" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pan.toUpperCase()} 
                  className={`${errors.pan && touched.pan ? "is-invalid" : ""}`}/>
                {errors.pan && touched.pan ?  <ErrorMessage name="pan" component="div" className="error-message" /> : null}
              </SoftBox>
              <SoftBox >
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Password
                  </SoftTypography>
                </SoftBox>
                <SoftInput  
                  type={isVisible ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  className={`${errors.confirmPassword && touched.confirmPassword ? "is-invalid" : ""}`} />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <ErrorMessage name="confirmPassword" component="div" className="error-message"/>
                 ) : null}
              </SoftBox>


              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Aadhar Front Photo
                  </SoftTypography>
                </SoftBox>
                <label className="file-upload">
                  <h6>{aadhar1}</h6>
                <input
                  type="file" 
                  name="aadharFrontPhoto" 
                  id="aadharFrontPhoto" 
                  accept=".jpeg, .jpg"
                  onChange={ async (e) => {
      
                    
                    const file = e.target.files[0];
                    if(file === undefined){
                      return
                    }
                    setAadhar1(file?.name || '')
                    if (file?.size/1024/1024 < 2) {
                     const base64 = await convertToBase64(file);
                     setFieldValue('aadharFrontPhoto', base64)
                    }
                    else {
                      setAadhar1('Upload Photo')
                      setFieldValue('aadharFrontPhoto', '')
                      toast.error('Image size must be of 2MB or less');
                    };
                  }}
                  className={`${errors.aadharFrontPhoto && touched.aadharFrontPhoto ? "is-invalid" : ""}`}/>
                   {aadhar1 !== 'Upload Photo' ? <small><DoneIcon /></small> : "" }
                  </label>
                 
                {errors.aadharFrontPhoto && touched.aadharFrontPhoto ?  <ErrorMessage name="aadharFrontPhoto" component="div" className="error-message" /> : null}
              </SoftBox>

              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Aadhar Back Photo
                  </SoftTypography>
                </SoftBox>
                <label className="file-upload">
                <h6>{aadhar2}</h6>
                <input
                  type="file" 
                  name="aadharBackPhoto" 
                  id="aadharBackPhoto" 
                  accept=".jpeg, .jpg"
                  onChange={ async (e) => {
                    const file = e.target.files[0];
                    if(file === undefined){
                      return
                    }
                    setAadhar2(file?.name || '')
                    if (file?.size/1024/1024 < 2) {
                     const base64 = await convertToBase64(file);
                     setFieldValue('aadharBackPhoto', base64)
                    }
                    else {
                      setAadhar2('Upload Photo')
                      setFieldValue('aadharBackPhoto', '')
                      toast.error('Image size must be of 2MB or less');
                    };
                  }}
                  className={`${errors.aadharBackPhoto && touched.aadharBackPhoto ? "is-invalid" : ""}`}/>
                  {aadhar2 !== 'Upload Photo' ? <small><DoneIcon /></small> : "" }
                  </label>
                  
                {errors.aadharBackPhoto && touched.aadharBackPhoto ?  <ErrorMessage name="aadharBackPhoto" component="div" className="error-message" /> : null}
              </SoftBox>

              <SoftBox>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                  PAN Photo
                  </SoftTypography>
                </SoftBox>
                <label className="file-upload">
                <h6>{pan}</h6>
                <input
                  type="file" 
                  accept=".jpeg, .jpg"
                  name="panPhoto" 
                  id="panPhoto" 
                  onChange={ async (e) => {
                    const file = e.target.files[0];
                    if(file === undefined){
                      return
                    }
                    setPan(file?.name || '')
                    if (file?.size/1024/1024 < 2) {
                     const base64 = await convertToBase64(file);
                     setFieldValue('panPhoto', base64)
                    }
                    else {
                      setPan('Upload Photo')
                      setFieldValue('panPhoto', '')
                      toast.error('Image size must be of 2MB or less');
                    };
                  }}
                  className={`${errors.panPhoto && touched.panPhoto ? "is-invalid" : ""}`}/>
                  {pan !== 'Upload Photo' ? <small> <DoneIcon /> </small> : "" }
                  </label>
                  
                {errors.panPhoto && touched.panPhoto ?  <ErrorMessage name="panPhoto" component="div" className="error-message" /> : null}
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
                  name="profilePhoto" 
                  accept=".jpeg, .jpg"
                  id="profilePhoto" 
                  onChange={ async (e) => {
                    const file = e.target.files[0];
                    if(file === undefined){
                      return
                    }
                    setProfile(file?.name || '')
                    if (file?.size/1024/1024 < 2) {
                     const base64 = await convertToBase64(file);
                     setFieldValue('profilePhoto', base64)
                    }
                    else {
                      setProfile('Upload Photo')
                      setFieldValue('profilePhoto', '')
                      toast.error('Image size must be of 2MB or less');
                    };
                  }}
                  className={`${errors.profilePhoto && touched.profilePhoto ? "is-invalid" : ""}`}/>
                   {profile !== 'Upload Photo' ? <small><DoneIcon /></small> : "" }
                  </label>
                 
                {errors.profilePhoto && touched.profilePhoto ?  <ErrorMessage name="profilePhoto" component="div" className="error-message" /> : null}
              </SoftBox>
              <SoftBox mt={4} mb={1}>
              {isDisabled ?  (
                <button className="soft-ui-btn" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {/* Loading... */}
                </button>
              ) :  <button type="submit" className="soft-ui-btn" disabled={isDisabled} >Sign Up</button>}
               
              </SoftBox>
           </Form>
        )}
    </Formik>
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
    </div>
     
    </CoverLayout>
  );
}

export default SignUp;
