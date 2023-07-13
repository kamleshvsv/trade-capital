
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { ErrorMessage, Form, Formik } from "formik";
import BasicFooter from "layouts/authentication/components/Footer/basic-footer";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';

function ContactUS() {
    const [isDisabled, setDisabled] = useState(false);
    const initialValues = {
      email: "",
      name: "",
      message : "" 
     }
  
  
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    name: Yup.string()
      .required("Name is a required field"),
      message: Yup.string()
      .required("Message is a required field")
  });
  return (
    <>
      <DefaultNavbar
        action={{
          type: "internal",
          route: "/authentication/sign-in",
          label: "Sign In",
          color: "dark",
        }}
      />
      <div className="header-section text-center">
        <h4><span >Home</span> / <span >Contact</span></h4>
      </div>
      
      <div className="container mt-4">
      <div className="row contact-card">
        <div className="col-md-7">
          <h1 className="main-heading mb-3 text-white" >Contact Us</h1>
          <p>Trade with low brokerage charges and access a wide range of facilities by choosing one of the best broking companies in India. If you are unsatisfied with your broker's resolution, you also have the option to file a complaint on the SEBI Scores website.</p>
          <p>Customer Support: <a href="mailto:cgttrade06@gmail.com" title="glorythemes">cgttrade06@gmail.com</a></p>
          <p>Conact Number :  <a href="tel:+919039441976" title="glorythemes">+919039441976</a></p>
          <p>Address: Near Himayat Nagar, Hyderabad, Andhra Pradesh - 500029</p>
          <div className="text-white">

          {/* <SoftBox display="flex" >
                  <SoftBox mr={3} color="secondary">
                    <FacebookIcon fontSize="small" />
                  </SoftBox>
                  <SoftBox mr={3} color="secondary">
                    <TwitterIcon fontSize="small" />
                  </SoftBox>
                  <SoftBox mr={3} color="secondary">
                    <InstagramIcon fontSize="small" />
                  </SoftBox>
                  <SoftBox mr={3} color="secondary">
                    <PinterestIcon fontSize="small" />
                  </SoftBox>
                  <SoftBox color="secondary">
                    <LinkedInIcon fontSize="small" />
                  </SoftBox>
              </SoftBox> */}

          </div>
        </div>
        <div className="col-md-5">
          <div className="form-card">
        
          <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setDisabled(true);
        console.log(values,"values")
          toast.success("Message sended successfully");
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
          <Form>
              <SoftBox mb={2}>
                <SoftBox mb={1} ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Email
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                  type="email" 
                  placeholder="Your email" 
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
                    Name
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                  type="text" 
                  placeholder="Your Name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={`${errors.name && touched.name ? "is-invalid" : ""}`} />
                {errors.name && touched.name ? (
                  <ErrorMessage name="name" component="div" className="error-message"/>
                 ) : null}
              </SoftBox>

              <SoftBox mb={2}>
                <SoftBox mb={1} ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Message
                  </SoftTypography>
                </SoftBox>
                <SoftInput 
                  type="textarea" 
                  placeholder="Your Message"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className={`${errors.message && touched.message ? "is-invalid" : ""}`} />
                {errors.message && touched.message ? (
                  <ErrorMessage name="message" component="div" className="error-message"/>
                 ) : null}
              </SoftBox>
              <SoftBox mt={4} mb={1}>
              {isDisabled ?  (
                <button className="soft-ui-btn" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {/* Loading... */}
                </button>
              ) :  <button type="submit" className="soft-ui-btn"  disabled={isDisabled} >Send Message</button>}
               
              </SoftBox>
              <div className="text-center">  <small className="submit-info">Leave your email and we will get back to you within 24 hours</small></div>
             
           </Form> 
        )}
    </Formik>
          </div>
      
        </div>
      </div>
      </div>
    <BasicFooter />
    </>
  
  );
}

export default ContactUS;
