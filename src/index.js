import React from "react"; 
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { HeaderProvider } from "context/HeaderContext";
import { ProductProvider } from "context/ProductContext";
import { LoginProvider } from "context/LoginContext";
import { WishListProvider } from "context/WishListContext";

// Call make Server
makeServer();

ReactDOM.render (
    <BrowserRouter>
    <WishListProvider>
            <LoginProvider>
                  <HeaderProvider>
                        <ProductProvider>
                              <App/>
                        </ProductProvider>
                  </HeaderProvider>
            </LoginProvider>
      </WishListProvider>
    </BrowserRouter>
   , document.getElementById("root")
)