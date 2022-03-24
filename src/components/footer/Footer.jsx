import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

export const Footer = () => {
    return(

    <footer className="ecomm-footer">
<div className="footer-container">
    <div className="footer-row">
        <div className="footer-col">
            <p className="footer-col-head">Customer Service</p>
            <ul>
                <li><a href="#">My Account</a></li>
                <li><Link to="Wishlist">Wishlist</Link></li>
                <li><a href="#">Track My Order</a></li>
                <li><a href="#">Returns/Exchange</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
    <div className="footer-row">
        <div className="footer-col">
            <p className="footer-col-head">Information</p>
            <ul>
                <li><a href="#">Delivery Informationt</a></li>
                <li><a href="#">Order Tracking </a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Frequently Asked Questions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
               
            </ul>
        </div>
    </div>
    <div className="footer-row">
        <div className="footer-col">
            <p className="footer-col-head">Contact-Information</p>
            <ul>
                <li>"291 South 21th Street," </li>
                    <li>"Suite 721 New York NY 10016"</li>
                <li><a href="tel://1234567920">Contact- + 1235 2355 98</a></li>
                <li><a href="mailto:info@shoeshoppers.com">Email -info@shoeshopper.com</a></li>
                <li><a href="/index.html">Visit-shoeshoppers.com</a></li>
               
            </ul>
        </div>
    </div>
    <div className="footer-row">
        <div className="footer-col">
            <p className="footer-col-head">Connect with Us</p>
            <ul className="social-links-list">
                <li><a href="https://github.com/Shubhamkr2610" target="_blank" className="social-link"><i
                    className="fab fa-github-square"></i></a></li>
                <li><a href="https://twitter.com/shubhamkr_26" target="_blank" className="social-link"><i
                    className="fab fa-twitter-square"></i></a></li>
                <li><a href="https://www.instagram.com/i_subhu/" target="_blank" className="social-link"><i
                    className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/shubham.Lnctu" target="_blank" className="social-link"><i
                    className="fab fa-facebook-square"></i></a></li>
                <li><a href="https://www.linkedin.com/in/shubham-kumar-6625b8217/" target="_blank" className="social-link"><i
                    className="fab fa-linkedin"></i></a></li>
                  
                    
            </ul>
        </div>
    </div>
</div>
<div className="copyright-container">
    <p>Made with ❤️ by Shubham</p>
    <p>Copyright &copy; 2022 Shoe-Shoppers, INC. All Right Reserved.</p>
</div>
</footer>
    )
}


