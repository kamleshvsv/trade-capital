import http from "./../endpoint";
const token = localStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `Bearer ${token}` }
};


class ApiServices {

    adminLogin(data){
        return http.post(`/admin-login/`, data);
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
        return http.put(`/change-password/`,data, config);
    }

    forgotPassword(value){
        return http.post(`/forgot-password/`,value);
    }
    

    contactInfo(data){
        return http.post(`/contact-info/`,data);
    }

    getAllPortfolio(){
        return http.get(`/portfolio-list/` , config);
    }
}

export default new ApiServices();