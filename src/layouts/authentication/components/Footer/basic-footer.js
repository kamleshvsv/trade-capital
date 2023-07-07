import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SoftBox from "components/SoftBox";
function BasicFooter() {
  return (
    <div>
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">Trade Capital<span></span></h5>
                                <p className="g-font-15px">A full fledged solution for Trading, Mutual Funds and Transaction Profile Management. </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3"></div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Services<span></span></h5>
                               <ul className="g-font-14px">
                                <li >Commodity Trading</li>
                                <li>Currency Trading</li>
                                <li>Derivatives Trading</li>
                                <li>Equity Trading</li>
                                <li>Portfolio Management</li>
                                <li>Wealth Management</li>
                               </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box ">
                                <h5 className="widget-title">Contact Us<span></span></h5>
                                <p className="g-font-14px"><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                                <ul className="social-footer2">
                                    <SoftBox display="flex" >
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
                                    </SoftBox>
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
                            <p className="g-font-14px">Copyright Trade Capital © 2023. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default BasicFooter;
