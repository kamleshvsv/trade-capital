// Capital Growth Trader React components
import SoftBox from "components/SoftBox";
import dummyUser from './../../../assets/images/team-3.jpg'
// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Card, Grid} from "@mui/material";
import ApiService from "API/ApiService";
import { useNavigate } from "react-router-dom";
import { formatDate } from "examples/Constant/date-formate";
import { Table } from "react-bootstrap";
function ContactDetails() {
  const [mainLoader,
    setMainLoader] = useState(true)
  const [ContactDetailsData,
    setContactDetailsData] = useState([])

  useEffect(() => {
    getAllContactInfo()
  }, [])

  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('email')){
      let email = localStorage.getItem('email')
      if(email !== 'cgttrade06@gmail.com'){
        navigate('/authentication/sign-in', { replace: true });
      }
    }
  },[])

  const getAllContactInfo = () => {
    setMainLoader(true)
    ApiService
      .getContactInfo()
      .then((result) => {
        setMainLoader(false)
        if (result.status === 200) {
          setContactDetailsData(result.data)
        }
      })
      .catch((err) => {
        setMainLoader(false)

      });
  }

  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <SoftBox py={3}>
        <Card>
          {mainLoader
            ? (
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
            )
            : (
              <SoftBox p={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={12}>
                    <div className="text-center">
                      <strong>Contact Information</strong>
                    </div>
                    <Table responsive>
                    <table className="table table-striped bank-table table-responsive">
                      <thead>
                        <tr>
                            <th>Date</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ContactDetailsData
                          .map(function (data) {
                            return (
                              <tr key={data.id}>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-prime"}`}>{formatDate(data.created_at)}</td>
                                <td
                                  className={`text-capitalize ${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-prime"}`}>{data
                                    ?.name}</td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-prime"}`}>{data
                                    ?.email}</td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-prime"}`}>{data
                                    ?.message}</td>
                             
                              </tr>
                            )
                          })}
                      </tbody>
                   
                    </table>
                    </Table>
                    {ContactDetailsData && ContactDetailsData.length === 0 ?  <div className="text-center">Record Not Found</div> : null }
               
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

export default ContactDetails;
