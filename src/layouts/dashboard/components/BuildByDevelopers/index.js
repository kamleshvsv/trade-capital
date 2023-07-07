import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Trade Capital React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/team-3.jpg";
import SoftBadge from "components/SoftBadge";
import SoftButton from "components/SoftButton";
import { useState } from "react";

function BuildByDevelopers() {
  const [isEditable, setIsEditable] = useState(false)
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
        {isEditable ?  <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                Welcome , Kamlesh Vishwakarma
              </SoftTypography>
          
            
              <SoftBox mt={6} bottom={0}>
                <SoftButton variant="gradient" color="info" onClick={()=> {
                  setIsEditable(false)
                }}>Update</SoftButton>
              </SoftBox>
            </SoftBox>
          </Grid> : (
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                Welcome , Kamlesh Vishwakarma
              </SoftTypography>
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Name : Kamlesh Vishwakarma
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Client ID : 125220
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Mobile : 987654300
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                Email : Mika1729@yahoo.com
                </SoftTypography> 
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Aadhar No. : 502506209785
                </SoftTypography>
                </SoftBox>
                <SoftBox pt={1} mb={0.5}>

               <SoftTypography variant="body2" color="text" fontWeight="medium">
                  PAN No. : CJDPB3769B
                </SoftTypography>

              </SoftBox>
            
              <SoftBox mt={6} bottom={0}>
                <SoftButton variant="gradient" color="info"  onClick={()=> {
                  setIsEditable(true)
                }}>Edit</SoftButton>
              </SoftBox>
            </SoftBox>
          </Grid>
          )}
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="80%"
              />
              <SoftBox component="img" src={rocketWhite} alt="rocket" width="100%" borderRadius="lg" height="70%"  />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
