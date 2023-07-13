import { Card } from "@mui/material";
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogOut() {
    const navigate = useNavigate()

useEffect(()=> {
    // localStorage.clear()
    // setTimeout(() => {
    //     navigate('/', { replace: true });
    // }, 3000);

},[])



  return (
    <DashboardLayout>
        <DashboardNavbar />
          <SoftBox py={3}>
              <Card>
                <h4>Do you really want to logout ?</h4>
                <button onClick={() => {
                    localStorage.clear()
                    navigate('/home', { replace: true });
                }}>Yes</button>
                <button onClick={() => {
                    navigate('/dashboard', { replace: true });
                }}>Cancel</button>
              </Card>
          </SoftBox>
        {/* <Footer /> */}
    </DashboardLayout>
  )
}

export default LogOut;
