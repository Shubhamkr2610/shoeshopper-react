import React from "react";
import { Header, Footer } from "./components/index.js";
import { Cart, LandingPage, Login, ProductPage, Signup, Wishlist } from "pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Routes>
         <Route path="/" element={<LandingPage/>} exact />
         <Route path="/ProductPage" element={<ProductPage/>} />  
         <Route path="/Login" element={<Login/>} />  
         <Route path="/Signup" element={<Signup/>} />  
         <Route path="/Wishlist" element={<Wishlist/>} />  
         <Route path="/Cart" element={<Cart/>} />  
      </Routes>
      <Footer />
    </>
  );
};
export default App;
