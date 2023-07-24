// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ApiService from "API/ApiService";
import { formatDate } from "examples/Constant/date-formate";
function PortfolioDetails() {
    const [isMainLoader,
        setMainLoader] = useState(true);
    const [portFolioData, setPortfolioData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getAll()
      if(localStorage.getItem('email')){
        let email = localStorage.getItem('email')
        if(email === 'cgttrade06@gmail.com'){
          navigate('/authentication/sign-in', { replace: true });
        }
      }
    },[])

    const getAll = () => {
        setMainLoader(true)
        ApiService.getAllPortfolio()
        .then((result) => {
          console.log(result, "result")
          if (result.status === 200) {
            setMainLoader(false)
            setPortfolioData(result.data)
          }
        })
        .catch((err) => {
            setMainLoader(false)
          console.log(err, "result")
        });
    }

    const pdfDownlaod = (url, clientId) => {
        fetch(url).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `${clientId}.pdf`;
                alink.click();
            })
        })
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
                        <Grid item xs={12} lg={12} >
                            <div className="text-center">
                              <strong>Portfolio Summary</strong>
                            </div>
                            <table className="table table-striped bank-table table-responsive">
                              <thead>
                                  <tr>
                                      <th>Date</th>
                                      <th>Client Id</th>
                                      <th>PDF</th>
                                  </tr>
                              </thead>
                              {portFolioData && portFolioData.length > 0 ? (
                              <tbody>
                              {portFolioData.map(function(data) {
                                return (
                                    <tr key={data.id} >
                                        <td >{formatDate(data.update_at)}</td>
                                        <td >{data.client_code}</td>
                                        <td >{data.document != null ? <span className="badge bg-info cursor-pointer" onClick={(e) => {
                                            e.preventDefault()
                                            pdfDownlaod(data.document, data.client_code )

                                        }} >Download PDF</span> : '-'}</td>
                                       
                                    </tr>
                                )})}
                              </tbody>
                              ) : null}
                            </table>

                            {portFolioData && portFolioData.length === 0 ? <div className="text-center p-3">No record found</div> : null }
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

export default PortfolioDetails;
