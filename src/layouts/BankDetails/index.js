// Trade Capital React components
import SoftBox from "components/SoftBox";

// Trade Capital React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Card, Grid } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
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
              <SoftBox component="img" src={barcode} alt="rocket" width="100%" borderRadius="lg" height="90%"  />
              <strong className="text-white text-center">mykotakbank@ybl</strong>
              
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ position: "relative", ml: "auto" }}>
          <div className="text-center">
            <strong>Bank Details</strong>
          </div>
          <table className="table table-striped bank-table table-responsive">
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
      <Footer />
    </DashboardLayout>
  );
}

export default BankDetails;
