// Trade Capital React components
import SoftBox from "components/SoftBox";

// Trade Capital React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { ErrorMessage, Form, Formik } from "formik";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { Card, Grid } from "@mui/material";
function PaymentDetails() {
    const transactionData = [
        {
            id : 2,
            transactionType : 'Pay In',
            date : '01-01-2023',
            amount : 200
        },
        {
            id : 3,
            transactionType : 'Pay Out',
            date : '01-02-2023',
            amount : 2000
        },
        {
            id : 5,
            transactionType : 'Pay Out',
            date : '02-03-2023',
            amount : 2500
        }

    ]
    const [isPayInDisabled, setPayInDisabled] = useState(false);
    const [isPayOutDisabled, setPayOutDisabled] = useState(false);
    const initialPayOutValues = {
        payOut : ""
     }

    const payOutchema = Yup.object().shape({
        payOut:  Yup.string()
      .required("This field is required"),
    });
    const initialPayInValues = {
        payIn : ""
     }

    const payInchema = Yup.object().shape({
      payIn:  Yup.string()
      .required("This field is required"),
    });
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <SoftBox py={3}>
            <Card>
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
                                onSubmit={(values) => {
                                    setPayInDisabled(true);
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
                                onSubmit={(values) => {
                                  setPayOutDisabled(true);
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
                            <table className="table table-striped bank-table table-responsive">
                              <thead>
                                  <tr>
                                      <th>Date</th>
                                      <th>Amount</th>
                                      <th>Type</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {transactionData.map(function(data) {
                                return (
                                    <tr key={data.id} >
                                        <td className={`${data.transactionType === 'Pay In' ? "bg-payin" : "bg-payout"}`}>{data.date}</td>
                                        <td className={`${data.transactionType === 'Pay In' ? "bg-payin" : "bg-payout"}`}>{data.amount}</td>
                                        <td className={`${data.transactionType === 'Pay In' ? "bg-payin" : "bg-payout"}`}>{data.transactionType}</td>
                                    </tr>
                                )})}
                              </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </SoftBox>
            </Card>
        </SoftBox>
    <Footer />
</DashboardLayout>
  );
}

export default PaymentDetails;
