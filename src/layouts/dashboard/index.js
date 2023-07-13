import Grid from "@mui/material/Grid";

// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";



// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";


function Dashboard() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
      
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <BuildByDevelopers />
            </Grid>
          </Grid>
        </SoftBox>
      
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
