import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { ErrorMessage, Form, Formik } from "formik";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';
function AddBankDetails() {
    const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const [isDisabled, setDisabled] = useState(false);
    const initialValues = {
      bankName: "",
      accountNumber: "",
      contactNumber : "" ,
      accountType : "",
      ifsc : "",
      branch : "",
      nomineeName : "",
      nomineeRelation : "",
      dob : "",
      nomineeContactNumber : "",
     }
  
  
  const schema = Yup.object().shape({
    bankName:  Yup.string()
    .required("This field is required"),
    accountNumber: Yup.string()
    .required("This field. is required"),
    contactNumber : Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("This field is required"),
    accountType :Yup.string()
    .required("This field is required"),
    ifsc : Yup.string()
    .required("This field is required "),
    branch : Yup.string()
    .required("This field is required "),
    nomineeName : Yup.string()
    .required("This field is required "),
    nomineeRelation : Yup.string()
    .required("This field is required "),
    dob : Yup.string()
    .required("This field is required "),
    nomineeContactNumber : Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required("This field is required "),
  });
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
     
      <div className="form-card">
        <div div className="text-center">
            <strong>Add Bank Details</strong>
        </div>
        <div className="add-bank-container">
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
            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                  Bank Name
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="text" 
                placeholder="Bank Name" 
                name="bankName" 
                id="bankName" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bankName} 
                className={`${errors.bankName && touched.bankName ? "is-invalid" : ""}`}/>
              {errors.bankName && touched.bankName ?  <ErrorMessage name="bankName" component="div" className="error-message" /> : null}
            </SoftBox>
            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Account Number
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="number" 
                placeholder="Enter account number"
                name="accountNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.accountNumber}
                className={`${errors.accountNumber && touched.accountNumber ? "is-invalid" : ""}`} />
              {errors.accountNumber && touched.accountNumber ? (
                <ErrorMessage name="accountNumber" component="div" className="error-message"/>
               ) : null}
            </SoftBox>

            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Mobile Number
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="number" 
                placeholder="Your Mobile No."
                name="contactNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contactNumber}
                className={`${errors.contactNumber && touched.contactNumber ? "is-invalid" : ""}`} />
              {errors.contactNumber && touched.contactNumber ? (
                <ErrorMessage name="contactNumber" component="div" className="error-message"/>
               ) : null}
            </SoftBox>


            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Account Type
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="select" 
                placeholder="Your Mobile No."
                name="accountType"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.accountType}
                className={`${errors.accountType && touched.accountType ? "is-invalid" : ""}`} />
              {errors.accountType && touched.accountType ? (
                <ErrorMessage name="accountType" component="div" className="error-message"/>
               ) : null}
            </SoftBox>

            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                IFSC Code
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="text" 
                placeholder="IFSC code"
                name="ifsc"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.ifsc}
                className={`${errors.ifsc && touched.ifsc ? "is-invalid" : ""}`} />
              {errors.ifsc && touched.ifsc ? (
                <ErrorMessage name="ifsc" component="div" className="error-message"/>
               ) : null}
            </SoftBox>
            
            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Branch
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="text" 
                placeholder="Branch"
                name="branch"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.branch}
                className={`${errors.branch && touched.branch ? "is-invalid" : ""}`} />
              {errors.branch && touched.branch ? (
                <ErrorMessage name="branch" component="div" className="error-message"/>
               ) : null}
            </SoftBox>

            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Nominee Name
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="text" 
                placeholder="Nominee Name"
                name="nomineeName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nomineeName}
                className={`${errors.nomineeName && touched.nomineeName ? "is-invalid" : ""}`} />
              {errors.nomineeName && touched.nomineeName ? (
                <ErrorMessage name="nomineeName" component="div" className="error-message"/>
               ) : null}
            </SoftBox>

            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Nominee Relation
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="text" 
                placeholder="Nominee Relation"
                name="nomineeRelation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nomineeRelation}
                className={`${errors.nomineeRelation && touched.nomineeRelation ? "is-invalid" : ""}`} />
              {errors.nomineeRelation && touched.nomineeRelation ? (
                <ErrorMessage name="nomineeRelation" component="div" className="error-message"/>
               ) : null}
            </SoftBox>

            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                Nominee Relation
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="text" 
                placeholder="Nominee Contact Number"
                name="nomineeContactNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nomineeContactNumber}
                className={`${errors.nomineeContactNumber && touched.nomineeContactNumber ? "is-invalid" : ""}`} />
              {errors.nomineeContactNumber && touched.nomineeContactNumber ? (
                <ErrorMessage name="nomineeContactNumber" component="div" className="error-message"/>
               ) : null}
            </SoftBox>


            <SoftBox mb={1}>
              <SoftBox  ml={0.5}>
                <SoftTypography component="label" variant="caption" fontWeight="bold">
                DOB
                </SoftTypography>
              </SoftBox>
              <SoftInput 
                type="date" 
                placeholder="DOB"
                name="dob"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
                className={`${errors.dob && touched.dob ? "is-invalid" : ""}`} />
              {errors.dob && touched.dob ? (
                <ErrorMessage name="dob" component="div" className="error-message"/>
               ) : null}
            </SoftBox>

            
            

            <SoftBox mt={4} mb={1}>
            {isDisabled ?  (
              <button className="soft-ui-btn" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  {/* Loading... */}
              </button>
            ) :  <button type="submit" className="soft-ui-btn"  disabled={isDisabled} >Submit</button>}
             
            </SoftBox>
         </Form> 
      )}
  </Formik>
  </div>
        </div>
      
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default AddBankDetails;
