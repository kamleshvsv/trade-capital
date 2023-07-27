import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { ErrorMessage, Form, Formik } from "formik";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { Card, Grid } from "@mui/material";
import ApiService from "API/ApiService";
import { formatDate } from "examples/Constant/date-formate";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
function PaymentDetails() {
    const [transactionData, setTransactionData] = useState([])
    const [isPayInDisabled, setPayInDisabled] = useState(false);
    const [isPayOutDisabled, setPayOutDisabled] = useState(false);
    const initialPayOutValues = {
        payOut : ""
     }

    const payOutchema = Yup.object().shape({
        payOut:  Yup.string()
      .matches("^[0-9]*$", "Invalid value")
      .required("This field is required"),
    });
    const initialPayInValues = {
        payIn : ""
     }

    const payInchema = Yup.object().shape({
      payIn:  Yup.string()
      .matches("^[0-9]*$", "Invalid value")
      .required("This field is required")
      
    });

    useEffect(()=> {
      getAllPayment()
    },[])

    const navigate = useNavigate()
    useEffect(() => {
      if(localStorage.getItem('email')){
        let email = localStorage.getItem('email')
        if(email === 'cgttrade06@gmail.com'){
          navigate('/authentication/sign-in', { replace: true });
        }
      }
    },[])




    const getAllPayment = () => {
      let req = {
        payin : 'payin',
        payout : 'payout'
      }
      ApiService.getAllPay().then((res)=> {
        if(res.status === 200){
          setTransactionData(res.data)
        }
      }).catch((err)=>{
      })
    }
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <SoftBox py={3}>
            <Card className={`${isPayInDisabled ? "overlay-disable" : ""}  ${isPayOutDisabled ? "overlay-disable" : ""}`}>
                <SoftBox p={2}> 
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={4} >
                            <div className="pay-in-card">
                            <div className=" mb-1 mt-1">
                                <h4 className="payment-title">Pay In</h4>
                            </div>
                            <Formik
                                initialValues={initialPayInValues}
                                validationSchema={payInchema}
                                onSubmit={(values, { resetForm }) => {
                                  setPayInDisabled(true);
                                  let req = { 
                                    "payment_type":"payin",
                                    "amount":values.payIn 
                                    }
                                    ApiService.payment(req).then((result)=> {
                                      setPayInDisabled(false);
                                      if(result.status === 201){
                                        toast.success("Pay in successfully");
                                        resetForm();
                                        getAllPayment()
                                      }
                                    }).catch((err)=>{
                                      setPayInDisabled(false);
                                    })

                                 
                                  }}
                              
                                >
                            {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit
                            }) => (
                                <Form>
                                    <SoftBox mb={1}>
                                      <SoftBox  ml={0.5}>
                                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                                          Enter Amount for Pay In
                                        </SoftTypography>
                                      </SoftBox>
                                      <SoftInput 
                                        type="number" 
                                        placeholder="Amount" 
                                        name="payIn" 
                                        id="payIn" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.payIn} 
                                        className={`${errors.payIn && touched.payIn ? "is-invalid" : ""}`}/>
                                      {errors.payIn && touched.payIn ?  <ErrorMessage name="payIn" component="div" className="error-message" /> : null}
                                    </SoftBox>


                                    <SoftBox mt={4} mb={1} className="text-center">
                                    {isPayInDisabled ?  (
                                      <button className="soft-ui-btn" type="button"  disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                          {/* Loading... */}
                                      </button>
                                    ) :  <button type="submit" className="soft-ui-btn"   disabled={isPayInDisabled} >Submit</button>}
                                    
                                    </SoftBox>
                                </Form> 
                                )}
                            </Formik>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={4} >
                        </Grid>
                        <Grid item xs={12} lg={4} >
                            <div className="pay-out-card">
                                <div className=" mb-1 mt-1">
                                        <h4 className="payment-title">Pay Out</h4>
                                </div>
                            <Formik
                                initialValues={initialPayOutValues}
                                validationSchema={payOutchema}
                                onSubmit={(values, {resetForm}) => {
                                  setPayOutDisabled(true);
                                  let req = { 
                                    "payment_type":"payout",
                                    "amount":values.payOut 
                                    }
                                    ApiService.payment(req).then((result)=> {
                                      setPayOutDisabled(false);
                                      if(result.status === 201){
                                        toast.success("Pay Out successfully");
                                        resetForm();
                                        getAllPayment()
                                      }
                                    }).catch((err)=>{
                                      setPayOutDisabled(false);
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
                            }) => (
                                <Form>
                                    <SoftBox mb={1}>
                                      <SoftBox  ml={0.5}>
                                        <SoftTypography component="label" variant="caption" fontWeight="bold">
                                        Enter Amount for Pay Out
                                        </SoftTypography>
                                      </SoftBox>
                                      <SoftInput 
                                        type="number" 
                                        placeholder="Amount" 
                                        name="payOut" 
                                        id="payOut" 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.payOut} 
                                        className={`${errors.payOut && touched.payOut ? "is-invalid" : ""}`}/>
                                      {errors.payOut && touched.payOut ?  <ErrorMessage name="payOut" component="div" className="error-message" /> : null}
                                    </SoftBox>


                                    <SoftBox mt={4} mb={1}>
                                    {isPayOutDisabled ?  (
                                      <button className="soft-ui-btn" type="button"  disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                          {/* Loading... */}
                                      </button>
                                    ) :  <button type="submit" className="soft-ui-btn"  disabled={isPayOutDisabled} >Submit</button>}
                                    
                                    </SoftBox>
                                </Form> 
                                )}
                            </Formik>
                            </div>
                        </Grid>
                    </Grid>
                </SoftBox>

                <SoftBox p={2}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={12} >
                            <div className="text-center">
                              <strong>Transaction History</strong>
                            </div>
                            <Table responsive>
                            <table className="table table-striped bank-table table-responsive">
                              <thead>
                                  <tr>
                                      <th>Date</th>
                                      <th>Amount</th>
                                      <th>Type</th>
                                      <th>Status</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {transactionData.map(function(data) {
                                return (
                                    <tr key={data.id} >
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{formatDate(data.created_at)}</td>
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>₹ {data.amount || 0}</td>
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{data.payment_type === 'payin' ? 'Pay In' : 'Pay Out'}</td>
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{data.document != null ? <span className="badge bg-success"  >Approved</span> :  <span className="badge bg-secondary"  >Pending</span>}</td>
                                       
                                    </tr>
                                )})}
                              </tbody>
                            </table>
                            </Table>
                            {transactionData && transactionData.length === 0 ?  <div className="text-center">Record not found</div> : null }
               
                        </Grid>
                    </Grid>
                </SoftBox>
            </Card>
        </SoftBox>
    {/* <Footer /> */}
</DashboardLayout>
  );
}

export default PaymentDetails;
