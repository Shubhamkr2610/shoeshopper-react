import React from "react"; 
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render (
    <BrowserRouter>
         <App/>
    </BrowserRouter>
   , document.getElementById("root")
)