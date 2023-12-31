import http from "./../endpoint";
const token = localStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `Bearer ${token}` }
};


class ApiServices {

    isActie(){
        return http.get(`/app-status/`);
    }

    adminLogin(data){
        return http.post(`/admin-login/`, data);
    }

    adminPortfolioList(){
        return http.get(`/admin-portfolio-list/`,config);
    }

    getContactInfo(){
        return http.get(`/contact/`,config);
    }

    login(data){
        return http.post(`/login/`, data);
    }

    registerUser(data){
        return http.post(`/register_user/`, data);
    }

    verifyOTP(payload){
        return http.post(`/validate-otp/`, payload);
    }
   
    getUpiDetails() {
        return http.get(`/user-upi-info/`, config);
    }

    addUPIDetails(req) {
        return http.post(`/user-upi-info/`,req, config);
    }

    updateUpiDetails(req) {
        return http.put(`/user-upi-info/`,req, config);
    }

    getAllUsers() {
        return http.get(`/all-user-list/`, config);
    }

    updateUserStatus(data) {
        return http.post(`/update-user-status/`, data ,config);
    }

     

    payment(data){
        return http.post(`/payment-in-out/`,data, config);
    }

    getAllPay(){
        return http.get(`/payment-in-out/`, config);
    }

    paymentUploadPDF(data){
        return http.put(`/payment-in-out/`,data, config);
    }

    changePassword(data){
        return http.post(`/reset-password/`,data, config);
    }

    forgotPassword(value){
        return http.post(`/forget-password/`,value);
    }
    

    contactInfo(data){
        return http.post(`/contact/`,data);
    }

    getAllPortfolio(){
        return http.get(`/portfolio-list/` , config);
    }

    getUserInformation(email){
        return http.get(`/user-info/` , config);
    }

    updateUserInfo(data){
        return http.post(`/user-info/` ,data, config);
    }
}

export default new ApiServices();