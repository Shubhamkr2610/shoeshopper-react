import React from "react"; 
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { HeaderProvider } from "context/HeaderContext";

// Call make Server
makeServer();

ReactDOM.render (
    <BrowserRouter>
          <HeaderProvider>
               <App/>
          </HeaderProvider>
    </BrowserRouter>
   , document.getElementById("root")
)