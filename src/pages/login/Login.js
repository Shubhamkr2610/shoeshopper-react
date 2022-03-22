import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
     {/* <!-- textarea-container is class used in main--> */}
        <main class="form-container" >
            <form class="form">
                <h2 class="form-heading">Already have an account?</h2>

                <h2 class="form-sub-heading">Login</h2>

                <h3 class="form-mesg">Email address</h3>

                <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Enter Your Email-Id" />

                <h3 class="form-mesg">Password</h3>

                <input class="form-input" type="password" name="password" placeholder="Enter Your Password"/>

                <div class="checkbox-container">
                    <p>
                    <input type="checkbox" />
                    <label> Remember me </label>
                    </p>
                    <p><a href="#">Forgot Password?</a></p>
                </div>

                <button class="primary-button error-button">login</button>

                {/* <a href="/pages/signup-page.html">Create new account<i class="fa fa-arrow-right"></i>
                </a> */}
                <Link to="/Signup"  >Create new account<i class="fa fa-arrow-right"></i></Link>
            </form>
        </main>
    </>
  );
}
