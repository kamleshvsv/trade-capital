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
import { Table } from "react-bootstrap";
import { formatDate } from "examples/Constant/date-formate";
import jwtDecode from "jwt-decode";
function UserList() {
  const [mainLoader,
    setMainLoader] = useState(true)
  const [isUserDetails,
      setIsUserDetails] = useState(false)
  const [isUserUpdate,
    setIsUserUpdate] = useState(false)
      
  const [userListData,
    setUserListData] = useState([])
  const [userDetails,
      setUserDetails] = useState([])
  const [allPaymentData,
        setAllPaymentData] = useState()
  const [userInfo,
          setUserInfo] = useState()

  useEffect(() => {
    AllUsers()
    getALLPayment()
  }, [])

  const getALLPayment = () => {
    ApiService.adminPortfolioList().then(res => {
      if(res.status === 200){
        setAllPaymentData(res.data)
      }
    }).catch((err)=>{
    })
  }

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

  const goToDetails = (userdata) => {
    setUserInfo(userdata)
    const userDetailsInfo = allPaymentData.filter((el)=> el.client_code === userdata.client_code)
    setUserDetails(userDetailsInfo)
    setIsUserDetails(true)
  }

  const decodePassword = (data) => {
    const pass = jwtDecode(data)
    return pass.password
  }

  const userPersmission = (data) => {
  
    setIsUserUpdate(true)
    let req = {
      "email" : data.email,
      "is_active" : data.is_active ? 0 : 1
    }
    ApiService.updateUserStatus(req).then(res => {
      setIsUserUpdate(false)
      if(res.status === 200){
        AllUsers()
      }
    }).catch(err => {
      setIsUserUpdate(false)
    })
    // let dataArr = []
    // for (let index = 0; index < userListData.length; index++) {
    //   const element = userListData[index];
    //   if(element.email === data.email){
    //     element.is_active  = element.is_active ? false : true
    //   }
    //   dataArr.push(element)
    //   setUserListData(dataArr)
    // }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <SoftBox py={3}>
        {userDetails && isUserDetails ? (
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
                  <Grid item xs={12} lg={1}>
                   <span className="badge bg-info cursor-pointer" onClick={()=> {
                    setIsUserDetails(false)
                    setUserDetails([])
                   }}>Back</span>
                  </Grid>
                  <Grid item xs={12} lg={11}>
                    <div className="text-center">
                      <strong>User Details</strong>
                    </div>
                  </Grid>
                </Grid>
                <div className="p-2"> 
                 
                  <div><strong>Client ID : {userInfo?.client_code} <img src={userInfo && userInfo?.user_photo} className="avtar-pic" alt={userInfo?.name}/></strong></div>
                  <div><strong className="text-capitalize">Name : {userInfo?.name}</strong></div>
                  <div><small>Email : {userInfo?.email} / Mobile : {userInfo?.mobile}</small> </div>
                  <div className="bank-detials-card">
                    Bank Name : <strong>{userInfo?.bank}</strong> | IFSC Code : <strong>{userInfo?.ifsc}</strong> | Account Number : <strong>{userInfo?.account_no}</strong>
                  </div>
                  <Grid container spacing={3}>
                    <Grid item xs={12} lg={4} >
                      <div className="user-document-div">
                        <img src={userInfo && userInfo?.aadhar_front_photo} alt="Aadhar Front"/>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                      <div className="user-document-div">
                        <img src={userInfo && userInfo?.aadhar_back_photo} alt="Aadhar Back"/>
                      </div>
                    </Grid>
                    <Grid item xs={12} lg={4} >
                      <div className="user-document-div">
                        <img src={userInfo && userInfo?.pan_photo} alt="PAN"/>
                      </div>
                    </Grid>
                  </Grid>
                </div> 
                <hr />
                <h4>Transaction History</h4>
                <Grid container spacing={3}>
                  {userDetails && userDetails.map((data, index) => (
                    <Grid item xs={12} lg={4} key={data.id}>
                    <div className=" info-card">
                      <small className="g-font-12px">#{index+1}</small>
                      <div className="g-font-15px">Amount : <strong className="float-right">₹ {data?.amount}</strong></div>
                      <div className="g-font-15px">Payment Type : <strong className={`float-right ${data.payment_type === 'payin'
                                  ? "badge bg-success"
                                  : "badge bg-danger"}`} > {data?.payment_type === 'payin' ? 'Pay In' : 'Pay Out' }</strong></div>
                      <div className="g-font-15px">Date : <strong className="float-right">{formatDate(data?.created_at)}</strong></div>
                      {data.document != null ? <div className="g-font-15px">Download PDF : <strong className="float-right"> <a  href={data.document} target="_blank" className="badge bg-info cursor-pointer">Download PDF</a> </strong></div>: null}
                      {/* <div className="g-font-15px">Amount : <strong className="float-right">₹{data?.amount}</strong></div> */}
                    

                    </div>
                  </Grid>
                  ))}

                  
                </Grid>
                {userDetails && userDetails.length === 0 ? (
                  <>
                    <div className="p-2 mt-2 text-center">Payment record not found</div>
                  </> 
                ): null}  
                 
              </SoftBox>
            )}
        </Card>
        ) : (
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
                    <Table responsive>
                    <table className={`table table-striped bank-table table-responsive ${isUserUpdate ? 'disabledtable' : ''}` }  >
                      <thead>
                        <tr>
                          <th></th>
                          <th>Client ID / Name</th>
                          {/* <th>Name</th> */}
                          <th>Bank Details</th>
                          <th>Email</th>
                          <th>Password</th>
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
                                 ><img
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
                                 ><strong className="text-primary cursor-pointer" onClick={()=> goToDetails(data)}>{data
                                    ?.client_code}</strong>
                                    <div className="text-capitalize">
                                    {data
                                    ?.name}
                                    </div></td>
                                {/* <td className="text-capitalize"
                                 >{data
                                    ?.name}</td> */}
                                <td
                                 >
                                  <strong>{data
                                    ?.bank_name} - 
                                     (IFSC : {data
                                    ?.ifsc_code})</strong>
                                  <div>Ac. No - {data
                                    ?.account_no}</div>
                                 </td>
                                <td
                                 >{data
                                    ?.email}</td>
                                <td
                                 >{decodePassword(data?.password)}</td>
                                <td
                                 >{data
                                    ?.mobile}</td>
                              
                                <td
                                 >{data
                                    ?.pan}</td>
                                <td
                                 >{data
                                    ?.aadhar_no}</td>
                                <td >
                                <span onClick={()=> {
                                  userPersmission(data)
                                }} className={`${data.is_active
                                  ? "badge bg-success cursor-pointer"
                                  : "badge bg-danger  cursor-pointer"}`} >{data.is_active ? 'Active' : 'Inactive'}</span>

                                </td>
                              </tr>
                            )
                          })}
                      </tbody>
                   
                    </table>
                    </Table>
                    {userListData && userListData.length === 0 ?  <div className="text-center">Record not found</div> : null }
               
                  </Grid>
                </Grid>
              </SoftBox>
            )}
        </Card>
        )}
      </SoftBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default UserList;
