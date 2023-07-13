// Capital Growth Trader React components
import SoftBox from "components/SoftBox";
import DoneIcon from '@mui/icons-material/Done';
import { toast } from "react-toastify";
// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Formik, Form, ErrorMessage } from 'formik';
import { Card, Grid } from "@mui/material";
import barcode from "assets/images/qr.webp"
import SoftButton from "components/SoftButton";
import { useState } from "react";
import * as Yup from 'yup';
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";

function AdminBankDetails() {
    const [isDisabled, setDisabled] = useState(false);
    const [isEditable, setIsEditable] = useState(true)
    const [qrCodes, setQrCodes] = useState('Upload QR Code')

    const [previewQRCode, setPreviewCode ] = useState(barcode)
    const [newUPI, setNewUpi ] = useState('9617306560@ybl')
    
    const initialValues = {
        qrCode: "",
        upiId: ""
    }
    
    const schema = Yup.object().shape({
        qrCode: Yup.string()
        .required("QR Code is a required field"),
        upiId: Yup.string()
        .matches(
            /^(^[\w.-]+@[\w.-]+$)$/g,
                  "Invalid UPI ID"
                )
     
        .required("UPI ID is a required field")
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
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
      <Card>
    {isEditable ? (
        <SoftBox p={2}>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={4} >
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="dark"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox component="img" src={barcode} alt="Qr Code"  borderRadius="lg" className="qeCode-height"  />
              <strong className="text-white text-center g-padding-10px">mykotakbank@ybl</strong>

             
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ position: "relative", ml: "auto" }}>
          <div className="text-center">
            <strong>Bank Details</strong>
          </div>
          <table className="table table-striped bank-table m-flex table-responsive">
            <thead>
                <tr>
                    <th>Bank Name</th>
                    <th>Account No</th>
                    <th>Account Type</th>
                    <th>IFSC Code</th>
                    <th>Branch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Kotak Bank</td>
                    <td>845231928</td>
                    <td>savings</td>
                    <td>KKBK0002599</td>
                    <td>Ahmedabad</td>
                </tr>
            </tbody>
        </table>
        <SoftButton
            component="span"
            variant="gradient"
            color='info'
            onClick={()=> {
                setIsEditable(!isEditable)
            }}
          >
            Edit
          </SoftButton> 
    </Grid>
    </Grid>
      </SoftBox>
    ) : (
        <SoftBox p={2}>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={4} >
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="dark"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox component="img" src={previewQRCode} alt="Qr Code"  borderRadius="lg" className="qeCode-height"  />
              <strong className="text-white text-center g-padding-10px">{newUPI}</strong>

             
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ position: "relative", ml: "auto" }}>
 
        <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        setDisabled(true);
        // setIsEditable(!isEditable)
        var req = {
          "qrCode" : values.qrCode,
          "upiId" : values.upiId
        }
        setNewUpi(values.upiId)
     
        setDisabled(false);
   
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

          <SoftBox mb={1}>
                <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    QR Code
                  </SoftTypography>
                </SoftBox>
                <label className="file-upload">
                  <h6>{qrCodes}</h6>
                <input
                  type="file" 
                  name="qrCode" 
                  id="qrCode" 
                  accept=".jpeg, .jpg"
                  onChange={ async (e) => {
      
                    
                    const file = e.target.files[0];
                    if(file === undefined){
                      return
                    }
                  
                    setQrCodes(file?.name || '')
                    if (file?.size/1024/1024 < 2) {
                     const base64 = await convertToBase64(file);
                     setPreviewCode(base64)
                     setFieldValue('qrCode', base64)
                    }
                    else {
                      setQrCodes('Upload QR Code')
                      setFieldValue('qrCode', '')
                      toast.error('Image size must be of 2MB or less');
                    };
                  }}
                  className={`${errors.qrCode && touched.qrCode ? "is-invalid" : ""}`}/>
                   {qrCodes !== 'Upload QR Code' ? <small><DoneIcon /></small> : "" }
                  </label>
                 
                {errors.qrCode && touched.qrCode ?  <ErrorMessage name="qrCode" component="div" className="error-message" /> : null}
              </SoftBox>
              <SoftBox mb={1}>
              <SoftBox ml={0.5}>
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    UPI ID
                  </SoftTypography>
                </SoftBox>
              <SoftBox >
                <SoftInput
                  type="text" 
                  placeholder="Enter UPI ID" 
                  name="upiId" 
                  id="upiId" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.upiId} 
                  className={`${errors.upiId && touched.upiId ? "is-invalid" : ""}`}/>
                {errors.upiId && touched.upiId ?  <ErrorMessage name="upiId" component="div" className="error-message" /> : null}
              </SoftBox>
              </SoftBox>
              <SoftBox mt={4} mb={1}>
              {isDisabled ?  (
                <button className="soft-ui-btn" type="button" disabled style={{width:'auto'}}>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>
                    {/* Loading... */}
                </button>
              ) :  
              <button type="submit" className="soft-ui-btn" disabled={isDisabled} style={{width:'auto'}}>Submit</button> 
              }
              </SoftBox>
           </Form>
        )}
    </Formik>
         
    </Grid>
    </Grid>
      </SoftBox>
    )}
      


    </Card>
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default AdminBankDetails;
