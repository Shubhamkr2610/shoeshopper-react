import React from "react"; 
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { HeaderProvider } from "context/HeaderContext";
import { ProductProvider } from "context/ProductContext";
import { LoginProvider } from "context/LoginContext";

// Call make Server
makeServer();

ReactDOM.render (
    <BrowserRouter>
      <LoginProvider>
            <HeaderProvider>
                  <ProductProvider>
                        <App/>
                  </ProductProvider>
            </HeaderProvider>
      </LoginProvider>
    </BrowserRouter>
   , document.getElementById("root")
)