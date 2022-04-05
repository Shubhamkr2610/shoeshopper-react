import React from "react"; 
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { HeaderProvider } from "context/HeaderContext";
import { ProductProvider } from "context/ProductContext";

// Call make Server
makeServer();

ReactDOM.render (
    <BrowserRouter>
          <HeaderProvider>
                <ProductProvider>
                  <App/>
                </ProductProvider>
          </HeaderProvider>
    </BrowserRouter>
   , document.getElementById("root")
)