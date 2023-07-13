// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { Card, Grid } from "@mui/material";
function PortfolioDetails() {
    const transactionData = [
        {
            id : 2,
            clientId : '1250002',
            date : '01-01-2023',
            pdfLink : 'https://firebasestorage.googleapis.com/v0/b/website-8cd0a.appspot.com/o/pdfFiles%2FPanchal%203.pdf?alt=media&token=340cf9c0-0247-4e79-986d-69087fafa34f'
        },
        {
            id : 3,
            clientId : '125665',
            date : '01-02-2023',
            pdfLink : 'https://firebasestorage.googleapis.com/v0/b/website-8cd0a.appspot.com/o/pdfFiles%2FPanchal%203.pdf?alt=media&token=340cf9c0-0247-4e79-986d-69087fafa34f'
        },
        {
            id : 5,
            clientId : '255522',
            date : '02-03-2023',
            pdfLink : 'https://firebasestorage.googleapis.com/v0/b/website-8cd0a.appspot.com/o/pdfFiles%2FPanchal%203.pdf?alt=media&token=340cf9c0-0247-4e79-986d-69087fafa34f'
        },
        {
            id : 5,
            clientId : '556121',
            date : '02-03-2023',
            pdfLink : ''  
         }

    ]

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
                                      <th>Client Id</th>
                                      <th>PDF</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {transactionData.map(function(data) {
                                return (
                                    <tr key={data.id} >
                                        <td >{data.date}</td>
                                        <td >{data.clientId}</td>
                                        <td >{data.pdfLink ? <span className="badge bg-info cursor-pointer" onClick={(e) => {
                                            e.preventDefault()
                                            pdfDownlaod(data.pdfLink, data.clientId )

                                        }} >Download PDF</span> : <span className="badge bg-dark not-allowed">Download PDF</span>}</td>
                                       
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

export default PortfolioDetails;
