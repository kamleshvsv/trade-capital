import http from "./../endpoint";
const token = localStorage.getItem('token') || ''
const config = {
  headers: { Authorization: `Bearer ${token}` }
};


class ApiServices {

    login(data){
        return http.post(`/login/`, data);
    }

    registerUser(data){
        return http.post(`/register_user/`, data);
    }

   

    addUPIDetails(req) {
        return http.post(`/user-upi-info/`,req, config);
    }

    // getJobSummaryByLocation(req) {
    //     return http.get(`/technician/jobSummary/location/${req.internalId}/${req.technicianId}/${req.assetLocation}`, config);
    // }

    // addSensorDevices(req) {
    //     return http.post(`/technician/assets`,req, config);
    // }

    // jobStatusUpdate(req){
    //     return http.put(`/technician/jobSteps`, req, config)
    // }

    // installation(req){
    //     return http.put(`/technician/jobs`, req, config)
    // }

    // markAsComplete(req){
    //     return http.put(`/technician/jobs/markComplete`, req, config)
    // }

    // driveComplete(req){
    //     return http.put(`/technician/jobSteps`, req, config)
    // }

    // getJobSummary(req){
    //     return http.get(`/technician/jobSummary/${req.internalId}/${req.technicianId}`, config);
    // }

    // scanOutAssets(req){
    //     return http.put(`/technician/scanOut/`, req, config);
    // }

    // getPastAllJobs(req){
    //     return http.get(`/technician/jobs/history?startDate=${req.startDate}&endDate=${req.endDate}`, config);
    // }

    // addAssetsDetails(req){
    //     return http.post(`/technician/addAsset`, req, config);
    // }

    // addChamberImages(id,req){
    //     return http.post(`/technician/asset/chamber/images/${id}`, req, configImage);
    // }

    // getChamberImages(req){
    //     return http.get(`/technician/asset/chamber/images/${req.internalId}?assetChamber=${req.assetChamber}&assetLocation=${req.assetLocation}&imageType=${req.imageType}`, config);
    // }

    // deleteImage(req){
    //     return http.delete(`/technician/asset/chamber/images/${req.jobInternalId}/${req.chamberImageId}`, config);
    // }

    // getRoomLocation(internalId){
    //     return http.get(`/assets/location/${internalId}`, config);
    // }

    // deletSensorAPI(req){
    //     return http.delete(`/technician/assets/${req.jobInternalId}/${req.assetId}`, config);
    // }

    // addFloorPlan(id,req){
    //     return http.post(`/technician/asset/chamber/images/${id}`, req, configImage);
    // }
    // getFloorPlanImages(req){
    //     return http.get(`/technician/asset/chamber/images/${req.internalId}?assetChamber=${req.assetChamber}&assetLocation=${req.assetLocation}&imageType=${req.imageType}`, config);
    // }

    // addDimentionPlan(id,req){
    //     return http.post(`/technician/asset/chamber/dimensions/${id}`,req, config);
    // }

    // getDimentionsDetails(req){
    //     return http.get(`/technician/asset/chamber/dimensions/${req.internalId}?assetChamber=${req.assetChamber}&assetLocation=${req.assetLocation}`,req, config);
    // }

    // getChamberStatus(id){
    //     return http.get(`/technician/asset/chamber/status/${id}`, configImage);
    // }

}

export default new ApiServices();