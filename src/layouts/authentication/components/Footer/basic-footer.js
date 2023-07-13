import logo from './../../../../assets/images/logo.jpg'
import { useNavigate } from "react-router-dom";
function BasicFooter() {
    const navigate =  useNavigate()

    const goToService = (url) => {
        navigate(`/${url}`, { replace: true });
    }
  return (
    <div>
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <img src={logo} alt="logo" className="footer-logo"/>
                                <h5 className="widget-title">
                                   
                                Capital Growth Trader</h5>
                                <p className="g-font-15px">We're here to help you navigate the stock market with confidence.  </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3"></div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Services<span></span></h5>
                               <ul className="g-font-14px footer-link">
                                <li onClick={() => { goToService('commodity-trading')}}>Commodity Trading</li>
                                <li onClick={() => {goToService('currency-trading')}}>Currency Trading</li>
                                <li onClick={() => {goToService('derivatives-trading')}}>Derivatives Trading</li>
                                <li onClick={() => {goToService('equity-trading')}}>Equity Trading</li>
                                <li onClick={() => {goToService('portfolio-management')}}>Portfolio Management</li>
                                <li onClick={() => {goToService('wealth-management')}}>Wealth Management</li>
                               </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box ">
                                <h5 className="widget-title">Contact Us<span></span></h5>
                                <p className="g-font-14px"><a href="mailto:cgttrade06@gmail.com" title="glorythemes">cgttrade06@gmail.com</a></p>
                                <ul className="social-footer2">
                                    {/* <SoftBox display="flex" >
                                        <SoftBox mr={3} color="secondary">
                                          <FacebookIcon fontSize="small" />
                                        </SoftBox>
                                        <SoftBox mr={3} color="secondary">
                                          <TwitterIcon fontSize="small" />
                                        </SoftBox>
                                        <SoftBox mr={3} color="secondary">
                                          <InstagramIcon fontSize="small" />
                                        </SoftBox>
                                        <SoftBox mr={3} color="secondary">
                                          <PinterestIcon fontSize="small" />
                                        </SoftBox>
                                        <SoftBox color="secondary">
                                          <LinkedInIcon fontSize="small" />
                                        </SoftBox>
                                    </SoftBox> */}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p className="g-font-14px">Copyright Capital Growth Trader © 2023. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default BasicFooter;
