
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
          <p>Trade Capital, the umbrella entity which houses the broking vertical is a multidimensional conglomerate with interests in various sectors. FMCG – Hospitality – Tech – Finance Trade Capital always aims to provide value to its stakeholders. With a motto “Aap Kijiye Kaamyabi Ki Tayaari, Baki Humari Zimmedari” which captures the very essence of what Trade Capital abides by. Every day at Trade Capital is an effort to raise the bar of “Excellence”.</p>
        </div>
      </div>
    <BasicFooter />
    </>
  
  );
}

export default AboutUs;
