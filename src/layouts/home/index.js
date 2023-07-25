
import HotlistOne from "./Trading-view/trading-view";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import trading from './../../assets/images/trading.98e27021.svg';
import management from './../../assets/images/portfolio.56efdbd4.svg';
import mututal from './../../assets/images/mutual.90813b23.svg';
import BasicFooter from "layouts/authentication/components/Footer/basic-footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  const borkingData = [{
    id:1,
    heading : 'Customer Service',
    description : [
      'Always Available, Proactive and Keen to Help.',
      'Service that makes your Investments and portfolio management a Breeze.'
    ]
  },
  {
    id:2,
    heading : 'Online Demat Account',
    description : [
      'Instant and Paperless.',
      'Think – Register – Start. That’s how simple we make for you.',
      'In the interest of environment – 100% paperless transactions.'
    ]
  },
  {
    id:3,
    heading : 'Best Full Service Broker',
    description : [
      'We work with the Best in Business.',
      'Experts who are on top of their game.',
      'Dedicated to provide you the Best Services & Facilities'
    ]
  },
  {
    id:4,
    heading : 'Our Legacy',
    description : [
      'With a presence in over 12 State in India , Capital Growth Trader has built a Indian & global brand and a legacy over the past 10 years. us in a unique position to create the best is class experience.',
    ]
  }
]
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
      <div className='background-image'>
       <div>  <button className="get-started" onClick={()=> {
           navigate('/authentication/sign-in', { replace: true });
       }}>Sign In</button></div>
      </div>
    <HotlistOne />
  
    <div className="broking-container">
      <div className="main-heading g-container">
        <h1>Why Capital Growth Trader Broking is The Best Brokerage Firm for You ?</h1>
      </div>
      <br />


      <div className="row g-container">
      {borkingData.map(function(data) {
        return (
        <div className="col-md-6 mb-4"  key={data.id}>
          <div className="broking-cards blue-gradient">
            <h3>{data.heading}</h3>
              {data.description.map(function(item, idx) {
                return (
                  <li className="items-description" key={idx}>{item}</li>
                 )
              })}
          </div>
        </div>
        )
      })}
      </div>
      <br />
      <div className="row other-section">
        <div className="col-md-4 mb-2 mt-2"  >
          <div className="other-cards">
            <div className="bg-profile">
              <img src={trading} alt="2"/>
            </div>
            <h3 className="mt-2">Trading</h3>
          </div>
        </div>
        <div className="col-md-4 mb-2 mt-2"  >
          <div className="other-cards ">
            <div className="bg-profile">
            <img src={management} alt="2"/>
            </div>
            <h3 className="mt-2">Profile Management</h3>
          </div>
        </div>
        <div className="col-md-4 mb-2 mt-2"  >
          <div className="other-cards ">
            <div className="bg-profile">
            <img src={mututal} alt="2"/>
            </div>
            <h3 className="mt-2">Mutual Fund</h3>
          </div>
        </div>
      </div>
      <div className="other-section">
          <div className="attention-container ">
              <h3>Attention Investors!</h3>
              <ul>
                <li>Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020. Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your</li>
                <li>email id and/or mobile number to create pledge.</li>
                <li>Pay 20% upfront margin of the transaction value to trade in cash market segment.</li>
                <li>Check your Securities /MF/ Bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
              </ul>
          </div>
        </div>
    </div>
    <BasicFooter />
    </>
  
  );
}

export default HomePage;
