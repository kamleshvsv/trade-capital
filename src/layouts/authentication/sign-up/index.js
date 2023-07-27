
import { Link, useNavigate } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

import curved9 from "assets/images/curved-images/curved-6.jpg";
import CoverLayout from "../components/CoverLayout";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from 'yup';
import { toast } from "react-toastify";
import { useState } from "react";

import ApiServices from './../../../API/ApiService';
function SignUp() {
  const navigate = useNavigate()
  const [isDisabled, setDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const [aadhar1, setAadhar1] = useState('Upload Photo')
  const [aadhar2, setAadhar2] = useState('Upload Photo')
  const [pan, setPan] = useState('Upload Photo')
  const [profile, setProfile] = useState('Upload Photo')
  const [formError, setFormError] = useState()

  const initialValues = {
    name : "",
    email: "",
    mobileNo : "",
    aadhar : "",
    pan : "",
    password: "",
    confirmPassword: "",
    aadharFrontPhoto : "",
    aadharBackPhoto : "",
    panPhoto : "",
    profilePhoto : "",
    bank :"",
    ifsc : "",
    account_no : ""

}

const schema = Yup.object().shape({
  name: Yup.string()
  .required("Name is a required field"),
  mobileNo: Yup.string()
  .min(10, "Mobile must be at least 10 digit")
  .max(12, "Mobile not more then 12 digit")
  .required("Mobile is a required field"),
  aadhar: Yup.string()
  .min(12, "Aadhar must be at least 12 digit")
  .max(12, "Aadhar not more then  12 digit")
  .required("Aadhar is a required field"),
  pan: Yup.string()
  .matches(
    /^([A-Za-z]{5}[0-9]{4}[A-z]{1})$/g,
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
    .required("Profile photo is a required field"),
    account_no: Yup.string()
    .required("Account no. is a required field"),
    bank: Yup.string()
    .required("Bank is a required field"),
    ifsc: Yup.string()
    .required("IFSC is a required field")
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
      title=" Create a New Account"
      description=""
      image={curved9}
    >
    <div className="scrollable-form">
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setFormError('')
        setDisabled(true);

        let req = {
            "mobile": values.mobileNo,
            "email": values.email,
            "name" :values.name,
            "aadhar_no": values.aadhar,
            "pan": values.pan,
            "password": values.password,
            "aadhar_front_photo": values.aadharFrontPhoto,
            "aadhar_back_photo": values.aadharBackPhoto,
            "pan_photo": values.panPhoto,
            "user_photo": values.profilePhoto,
            "account_no":values.account_no,
            "bank_name": values.bank,
            "ifsc_code": values.ifsc
          }

          ApiServices.registerUser(req).then((res) => {
            if(res.data.status_code === 200){
              if(res.data.data) {
                localStorage.setItem('register_user_data', JSON.stringify(res.data.data))
                navigate('/verify-otp')
                setDisabled(false)
              }
            
            }
          })
          .catch((err)=> {
            if(err.response){
              if(err.response.status === 400){
                setFormError(err.response.data)
              }
            }
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
                  onChange={(e)=> {
                    handleChange(e)
                    const newData = { ...formError }; 
                    newData.email = []
                    setFormError(newData)
                    }
                  }
                  onBlur={handleBlur}
                  value={values.email} 
                  className={`${errors.email && touched.email ? "is-invalid" : ""}`}/>
                                  {formError && formError.email && formError.email[0] ? <div className="error-message">{formError.email[0]}</div> : null}
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
                  onChange={(e)=> {
                    handleChange(e)
                    const newData = { ...formError }; 
                    newData.mobile = []
                    setFormError(newData)
                    }
                  }
                  onBlur={handleBlur}
                  value={values.mobileNo} 
                  className={`${errors.mobileNo && touched.mobileNo ? "is-invalid" : ""}`}/>
                                  {formError && formError.mobile && formError.mobile[0] ? <div className="error-message">{formError.mobile[0]}</div> : null}
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
                  onChange={(e)=> {
                    handleChange(e)
                    const newData = { ...formError }; 
                    newData.aadhar_no = []
                    setFormError(newData)
                    }
                  }
                  onBlur={handleBlur}
                  value={values.aadhar} 
                  className={`${errors.aadhar && touched.aadhar ? "is-invalid" : ""}`}/>
                {errors.aadhar && touched.aadhar ?  <ErrorMessage name="aadhar" component="div" className="error-message" /> : null}
                {formError && formError.aadhar_no && formError.aadhar_no[0] ? <div className="error-message">{formError.aadhar_no[0]}</div> : null}
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
                  onChange={(e)=> {
                    handleChange(e)
                    const newData = { ...formError }; 
                    newData.pan = []
                    setFormError(newData)
                    }
                  }
                  onBlur={handleBlur}
                  value={values.pan.toUpperCase()} 
                  className={`${errors.pan && touched.pan ? "is-invalid" : ""}`}/>
                {errors.pan && touched.pan ?  <ErrorMessage name="pan" component="div" className="error-message" /> : null}
                {formError && formError.pan && formError.pan[0] ? <div className="error-message">{formError.pan[0]}</div> : null}
              </SoftBox>


              <SoftBox>
                <SoftBox ml={0.5}>
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
                    const newData = { ...formError }; 
                    newData.bank = []
                    setFormError(newData)
                    }
                  }
                  onBlur={handleBlur}
                  className={`${errors.bank && touched.bank ? "is-invalid" : ""}`}/>
                {errors.bank && touched.bank ?  <ErrorMessage name="bank" component="div" className="error-message" /> : null}
                {formError && formError.bank && formError.bank[0] ? <div className="error-message">{formError?.bank[0]}</div> : null}
              </SoftBox>


              <SoftBox>
                <SoftBox ml={0.5}>
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
                    const newData = { ...formError }; 
                    newData.account_no = []
                    setFormError(newData)
                    }
                  }
                  onBlur={handleBlur}
                  className={`${errors.account_no && touched.account_no ? "is-invalid" : ""}`}/>
                {errors.account_no && touched.account_no ?  <ErrorMessage name="apanccount_no" component="div" className="error-message" /> : null}
                {formError && formError.account_no && formError.account_no[0] ? <div className="error-message">{formError?.account_no[0]}</div> : null}
              </SoftBox>

              <SoftBox>
                <SoftBox ml={0.5}>
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
                    const newData = { ...formError }; 
                    newData.ifsc = []
                    setFormError(newData)
                    }
                  }
                  onBlur={handleBlur}
                  value={values.ifsc} 
                  className={`${errors.ifsc && touched.ifsc ? "is-invalid" : ""}`}/>
                {errors.ifsc && touched.ifsc ?  <ErrorMessage name="ifsc" component="div" className="error-message" /> : null}
                {formError && formError.ifsc && formError.ifsc[0] ? <div className="error-message">{formError?.ifsc[0]}</div> : null}
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
              ) :  <button type="submit" className="soft-ui-btn" disabled={isDisabled} >Send OTP</button>}
               
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
