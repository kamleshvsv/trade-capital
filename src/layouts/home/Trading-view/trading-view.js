import React, { useEffect } from 'react';
const HotlistOne = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        ...{
        symbols: [
            {
                "description": "SBI / NSE",
                "proName": "NSE:SBIN"
              },
              {
                "description": "SBI / BSE",
                "proName": "BSE:SBIN"
              },
              {
                "description": "AMZON",
                "proName": "NASDAQ:AMZN"
              },
              {
                "description": "NETFLIX",
                "proName": "NASDAQ:NFLX"
              },
              {
                "description": "FEDERALBANK",
                "proName": "BSE:FEDERALBNK"
              },
              {
                "description": "BANKBARODA",
                "proName": "BSE:BANKBARODA"
              },
              {
                "description": "NIFTYBEES / BSE",
                "proName": "BSE:NIFTYBEES"
              },
              {
                "description": "NIFTYBEES / NSE",
                "proName": "NSE:NIFTYBEES"
              }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "in"
      }
    });
    document.getElementById('myContainer').appendChild(script);
  }, []);

  return (
    <div>
      <div id="myContainer">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};
export default HotlistOne;
