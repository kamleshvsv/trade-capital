import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import $ from 'jquery';
import Popper from 'popper.js';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SoftUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
    <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"/>
      <App />
    </SoftUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
