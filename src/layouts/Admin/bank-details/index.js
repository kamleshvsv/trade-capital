// Capital Growth Trader React components
import SoftBox from "components/SoftBox";
import DoneIcon from '@mui/icons-material/Done';
import {toast} from "react-toastify";
// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {Formik, Form, ErrorMessage} from 'formik';
import {Card, Grid} from "@mui/material";
import SoftButton from "components/SoftButton";
import {useEffect, useState} from "react";
import * as Yup from 'yup';
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import ApiService from "API/ApiService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminBankDetails() {
  const [upiData,
    setUpiData] = useState([]);
  const [isMainLoader,
     setMainLoader] = useState(true);

  const [selectedFile,
    setSelectedFile] = useState()
  const [isDisabled,
    setDisabled] = useState(false);
  const [isEditable,
    setIsEditable] = useState(true)
  const [qrCodes,
    setQrCodes] = useState('Upload QR Code')

  const [previewQRCode,
    setPreviewCode] = useState('')
  const [newUPI,
    setNewUpi] = useState('')

  const initialValues = {
    qrCode: '',
    upiId: upiData[0]
      ?.upi_link || ''
  }

  useEffect(() => {
    getAll()
  }, [])

  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('email')){
      let email = localStorage.getItem('email')
      if(email !== 'cgttrade06@gmail.com'){
        navigate('/authentication/sign-in', { replace: true });
      }
    }
  },[])

  const getAll = () => {
    setMainLoader(true)
    ApiService
      .getUpiDetails()
      .then((result) => {
        if (result.status === 200) {
          setIsEditable(true)
          setMainLoader(false)
          if (result.data.length > 0) {
            handleFileDownload(result.data[0].qr_image)
            setNewUpi(result.data[0].upi_link)
            setUpiData(result.data)
          }
        }
      })
      .catch((err) => {
        setMainLoader(false)
      });
  }

  const handleFileDownload = async(url) => {
    try {
      const response = await axios.get(url, {responseType: 'blob'});
      const file = new File([response.data], 'qr-code.jpg', {
        type: 'image/jpeg' || 'image/jpg' || 'image/webp'
      });

      if (file === undefined) {
        return
      }

      setQrCodes(file
        ?.name || '')
      if (file
        ?.size / 1024 / 1024 < 2) {
        const base64 = await convertToBase64(file);
        setPreviewCode(base64)
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const schema = Yup
    .object()
    .shape({
      qrCode: Yup
        .string()
        .required("QR Code is a required field"),
      upiId: Yup
        .string()
        .matches(/^(^[\w.-]+@[\w.-]+$)$/g, "Invalid UPI ID")
        .required("UPI ID is a required field")
    });

  const editSchema = Yup
    .object()
    .shape({
      upiId: Yup
        .string()
        .matches(/^(^[\w.-]+@[\w.-]+$)$/g, "Invalid UPI ID")
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
      <DashboardNavbar/>
      <SoftBox py={3}>
        <Card>
         <>
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
            <>
          {isEditable ? (
              <SoftBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    {upiData && upiData.length > 0
                      ? (
                        <SoftBox
                          height="100%"
                          display="grid"
                          justifyContent="center"
                          alignItems="center"
                          bgColor="dark"
                          borderRadius="lg"
                          variant="gradient">
                          <SoftBox
                            component="img"
                            src={upiData && upiData[0]
                            ?.qr_image
                              ? upiData[0]
                                ?.qr_image
                                : null}
                            alt="Qr Code"
                            borderRadius="lg"
                            className="qeCode-height"/>
                          <strong className="text-white text-center g-padding-10px">{upiData && upiData[0]
                              ?.upi_link || ''}</strong>
                        </SoftBox>
                      )
                      : <div className="text-center p-3">No Record Found</div>}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                    position: "relative",
                    ml: "auto"
                  }}>

                    {upiData && upiData.length === 0
                      ? <SoftButton
                          component="span"
                          variant="gradient"
                          color='info'
                          onClick={() => {
                          setIsEditable(false)
                        }}>
                          Add UPI Details
                        </SoftButton>
                      : <SoftButton
                        component="span"
                        variant="gradient"
                        color='info'
                        onClick={() => {
                        setIsEditable(false)
                      }}>
                        Edit UPI
                      </SoftButton>}

                  </Grid>
                </Grid>
              </SoftBox>
            )
            : (
           
              <SoftBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={4}>
                    <SoftBox
                      height="100%"
                      display="grid"
                      justifyContent="center"
                      alignItems="center"
                      bgColor="dark"
                      borderRadius="lg"
                      variant="gradient">
                      <SoftBox
                        component="img"
                        src={previewQRCode}
                        alt="Qr Code"
                        borderRadius="lg"
                        className="qeCode-height"/>
                      <strong className="text-white text-center g-padding-10px">{newUPI}</strong>

                    </SoftBox>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    lg={8}
                    sx={{
                    position: "relative",
                    ml: "auto"
                  }}>

                    <Formik
                      initialValues={initialValues}
                      validationSchema={upiData && upiData === 0
                      ? schema
                      : editSchema}
                      onSubmit={(values) => {
                      setDisabled(true);
                      var req = {
                        "upi_link": values.upiId,
                        "qr_image": values.qrCode,
                        "user": localStorage.getItem('user_id') || ''
                      }
                      if (req.qr_image === "") {
                        req.qr_image = previewQRCode;
                      }
                      if (upiData && upiData.length === 0) {
                        ApiService
                          .addUPIDetails(req)
                          .then((result) => {
                            setDisabled(false);
                            getAll()
                          })
                          .catch((err) => {
                            setDisabled(false);
                          })
                      } else {
                        req.id = upiData && upiData[0].id ? upiData && upiData[0].id : '' ;
                          ApiService
                            .updateUpiDetails(req)
                            .then((result) => {
                              setDisabled(false);
                              getAll()
                            })
                            .catch((err) => {
                              setDisabled(false);
                            })
                      }
                    }}>
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
                                accept=".jpeg, .jpg ,.webp"
                                onChange={async(e) => {
                                const file = e.target.files[0];
                                if (file === undefined) {
                                  return
                                }
                                setQrCodes(file?.name || '')
                                  if (file
                                  ?.size / 1024 / 1024 < 2) {
                                  const base64 = await convertToBase64(file);
                                  setPreviewCode(base64)
                                  setFieldValue('qrCode', base64)
                                } else {
                                  setQrCodes('Upload QR Code')
                                  setFieldValue('qrCode', '')
                                  toast.error('Image size must be of 2MB or less');
                                };
                              }}
                                className={`${errors.qrCode && touched.qrCode
                                ? "is-invalid"
                                : ""}`}/> {qrCodes !== 'Upload QR Code'
                                ? <small><DoneIcon/></small>
                                : ""}
                            </label>

                            {errors.qrCode && touched.qrCode
                              ? <ErrorMessage name="qrCode" component="div" className="error-message"/>
                              : null}
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
                                className={`${errors.upiId && touched.upiId
                                ? "is-invalid"
                                : ""}`}/> {errors.upiId && touched.upiId
                                ? <ErrorMessage name="upiId" component="div" className="error-message"/>
                                : null}
                            </SoftBox>
                          </SoftBox>
                          <SoftBox mt={4} mb={1}>
                            {isDisabled
                              ? (
                                <button
                                  className="soft-ui-btn"
                                  type="button"
                                  disabled
                                  style={{
                                  width: 'auto'
                                }}>
                                  <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"></span>

                                </button>
                              )
                              : <button
                                type="submit"
                                className="soft-ui-btn"
                                disabled={isDisabled}
                                style={{
                                width: 'auto'
                              }}>Submit</button>
}
                          </SoftBox>
                        </Form>
                      )}
                    </Formik>

                  </Grid>
                </Grid>
              </SoftBox>
            )}
            </>
            )}
          </>
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default AdminBankDetails;
