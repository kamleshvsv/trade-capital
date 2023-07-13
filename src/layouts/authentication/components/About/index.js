
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import BasicFooter from "layouts/authentication/components/Footer/basic-footer";

function AboutUs() {

  return (
    <>
      <DefaultNavbar
        action={{
          type: "internal",
          route: "/authentication/sign-in",
          label: "Sign In",
          color: "dark",
        }}
      />
      <div className="header-section text-center">
        <h4><span >Home</span> / <span >About</span></h4>
      </div>
      <div className="container">
        <div className="contact-card">
          <h1 className="main-heading mb-3 text-white" >About Us</h1>
          <p>Welcome to Capital Growth Trader! 
          <br/>
          We're here to help you navigate the stock market with confidence. Our team of experts provides reliable and unbiased information, educational resources, and tools to empower your investment decisions. Stay updated with market analysis, access educational resources and tools, and engage with a supportive investing community. Trust Capital Growth Trader to simplify the complexities of the stock market and guide you towards successful investing.

          </p>
         </div>
      </div>
    <BasicFooter />
    </>
  
  );
}

export default AboutUs;
