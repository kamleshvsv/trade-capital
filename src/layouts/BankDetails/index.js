// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Card, Grid } from "@mui/material";
import barcode from "./../../assets/images/qr.webp"


function BankDetails() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
      <Card>
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
              <SoftBox component="img" src={barcode} alt="Qr Code" borderRadius="lg" className="qeCode-height"/>
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
    </Grid>
    </Grid>
      </SoftBox>
    </Card>
        
      
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default BankDetails;
