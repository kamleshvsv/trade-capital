// Capital Growth Trader React components
import SoftBox from "components/SoftBox";

// Capital Growth Trader React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { Card, Grid } from "@mui/material";
import ApiService from "API/ApiService";
import { formatDate } from "examples/Constant/date-formate";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
function AdminPaymentDetails() {
    const [transactionData, setTransactionData] = useState([])
    const [fileUpload, setFileUpload] = useState(false)
    const [isMainLoader,
      setMainLoader] = useState(true);
    useEffect(()=> {
        getAllPayment()
      },[])

      const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem('email')){
      let email = localStorage.getItem('email')
      if(email !== 'cgttrade06@gmail.com'){
        navigate('/authentication/sign-in', { replace: true });
      }
    }
  },[])
  
  
  
  
  
      const getAllPayment = () => {
        setMainLoader(true)
        ApiService.adminPortfolioList().then((res)=> {
          if(res.status === 200){
          
            setTransactionData(res.data)
          }
          setMainLoader(false)
        }).catch((err)=>{
          setMainLoader(false)
          console.log(err)
        })
      }
  
  
const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileChange = async (e ,data) => {
    setFileUpload(true)
    const file = e.target.files[0];
    if(file === undefined){
      return
    }
    if (file?.size/1024/1024 < 2) {
     const base64 = await convertToBase64(file);
     console.log(data)

     let req = {
        "id" : data.id,
        "document" : base64
     }
     ApiService.paymentUploadPDF(req).then((res)=>{
        console.log(res,"reeeeeeee")
        getAllPayment()
        setFileUpload(false)
     }).catch((err)=> {
        setFileUpload(false)
        console.log(err)
     })
     
    }
    else {
      toast.error('Image size must be of 2MB or less');
    };
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
                              <strong>Transaction History</strong>
                            </div>
                            <Table responsive>
                            <table  className={`table table-striped bank-table table-responsive ${fileUpload ? "overlay-disable" : ""}`}>
                              <thead>
                                  <tr>
                                      <th>Date</th>
                                      <th>Client ID</th>
                                      <th>Amount</th>
                                      <th>Type</th>
                                      <th>View PDF</th>
                                      <th>Upload PDF</th>
                                  </tr>
                              </thead>
                              <tbody>
                              {transactionData.map(function(data) {
                                return (
                                    <tr key={data.id} >
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{formatDate(data.created_at)}</td>
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{data.client_code}</td>
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{data.amount}</td>
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{data.payment_type}</td>
                                        <td  className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>{data.document != null ? <a  href={data.document} target="_blank" className="badge bg-info cursor-pointer">View PDF</a> : null}</td>
                                        <td className={`${data.payment_type === 'payin' ? "bg-payin" : "bg-payout"}`}>
                                           
                                                <>
                                                    {fileUpload ? <span className="badge bg-success cursor-pointer"> Upload PDF </span> : (
                                                        <label className="badge bg-success cursor-pointer"> Upload PDF
                                                <input type="file" accept=".pdf" 
                                                    onChange={e => handleFileChange(e, data)}
                                                 />
                                            </label>
                                                        )}
                                                </>
                                               
                                            {/* ) : <a  href={data.document} target="_blank" className="badge bg-info cursor-pointer">View PDF</a>} */}
                                        </td>
                                    </tr>
                                )})}
                              </tbody>
                            </table>
                            </Table>
                            {transactionData && transactionData.length === 0 ?  <div className="text-center">Record Not Found</div> : null }
               
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

export default AdminPaymentDetails;
