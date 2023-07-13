// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { ErrorMessage, Form, Formik } from "formik";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { Card, Grid } from "@mui/material";
function AdminPaymentDetails() {
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
                                      <th>Upload PDF</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {transactionData.map(function(data) {
                                return (
                                    <tr key={data.id} >
                                        <td className={`${data.transactionType === 'Pay In' ? "bg-payin" : "bg-payout"}`}>{data.date}</td>
                                        <td className={`${data.transactionType === 'Pay In' ? "bg-payin" : "bg-payout"}`}>{data.amount}</td>
                                        <td className={`${data.transactionType === 'Pay In' ? "bg-payin" : "bg-payout"}`}>{data.transactionType}</td>
                                        <td className={`${data.transactionType === 'Pay In' ? "bg-payin" : "bg-payout"}`}>
                                            <label className="table-file-upload"> Upload PDF
                                                <input type="file" accept=".pdf"/>
                                            </label>
                                           
                                        </td>
                                    </tr>
                                )})}
                              </tbody>
                            </table>
                        </Grid>
                    </Grid>
                </SoftBox>
            </Card>
        </SoftBox>
    {/* <Footer /> */}
</DashboardLayout>
  );
}

export default AdminPaymentDetails;
