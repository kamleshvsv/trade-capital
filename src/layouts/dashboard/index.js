import Grid from "@mui/material/Grid";

// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";




// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('email')){
      let email = localStorage.getItem('email')
      if(email === 'cgttrade06@gmail.com'){
        navigate('/authentication/sign-in', { replace: true });
      }
    }
  },[])

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
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Dashboard;
