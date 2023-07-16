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
function UserList() {
  const [mainLoader,
    setMainLoader] = useState(true)
  const [userListData,
    setUserListData] = useState([])

  useEffect(() => {
    AllUsers()
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

  const AllUsers = () => {
    setMainLoader(true)
    ApiService
      .getAllUsers()
      .then((result) => {
        setMainLoader(false)
        if (result.status === 200) {
          setUserListData(result.data)
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
                      <strong>Users</strong>
                    </div>
                    <table className="table table-striped bank-table table-responsive">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Client Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Mobile</th>
                          <th>PAN</th>
                          <th>Aadhar</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userListData
                          .map(function (data) {
                            return (
                              <tr key={data.id}>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}><img
                                  src={data.user_photo}
                                  onError={({currentTarget}) => {
                                currentTarget.onerror = null;
                                currentTarget.src = dummyUser;
                              }}
                                  alt={data
                                ?.name}
                                  className="user-profile-tb"/>
                                </td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}>{data
                                    ?.client_code}</td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}>{data
                                    ?.name}</td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}>{data
                                    ?.email}</td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}>{data
                                    ?.mobile}</td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}>{data
                                    ?.pan}</td>
                                <td
                                  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}>{data
                                    ?.aadhar_no}</td>
                                <td  className={`${data.is_superuser
                                  ? "bg-payin"
                                  : "bg-payout"}`}>
                                <span className={`${data.is_superuser
                                  ? "badge bg-danger cursor-pointer"
                                  : "badge bg-success cursor-pointer"}`} >{data.is_superuser ? 'Inactive' : 'Active'}</span>

                                </td>
                              </tr>
                            )
                          })}
                      </tbody>
                   
                    </table>
                    {userListData && userListData.length === 0 ?  <div className="text-center">Record Not Found</div> : null }
               
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

export default UserList;
