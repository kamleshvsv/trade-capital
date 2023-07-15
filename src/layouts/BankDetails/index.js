// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Card, Grid } from "@mui/material";
import barcode from "./../../assets/images/qr.webp"
import { useEffect, useState } from "react";
import ApiService from "API/ApiService";


function BankDetails() {
  const [upiData,
    setUpiData] = useState([]);
    const [isMainLoader,
      setMainLoader] = useState(true);
  useEffect(() => {
    getAll()
  }, [])

  const getAll = () => {
    setMainLoader(true)
    ApiService
      .getUpiDetails()
      .then((result) => {
        if (result.status === 200) {
          setMainLoader(false)
          if (result.data.length > 0) {
            setUpiData(result.data)
          }
        }
      })
      .catch((err) => {
        console.log(err, "result")
      });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
      <Card>
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
                </Grid>
              </SoftBox>
            )}
    </Card>
        
      
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default BankDetails;
