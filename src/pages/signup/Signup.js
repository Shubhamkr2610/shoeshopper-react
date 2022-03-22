import React from 'react'
import "./signup.css"

export const Signup = () => {
  return (
      <>
        <main class="form-container">
            <form class="form">
                <h2 class="form-heading">Donot have account?</h2>

                    <h2 class="form-sub-heading">Signup</h2>

                    <h3 class="form-mesg">Enter Your Name Here *</h3>

                    <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Enter Your First Name"/>

                    <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Enter Your Last Name"/>

                    <h3 class="form-mesg">Enter Your Phone number *</h3>

                    <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Example: 9234567890"/>

                    <h3 class="form-mesg">Email address *</h3>

                    <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Enter Your Email-Id"/>

                    <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Re-Enter Your Email-Id" />

                    <h3 class="form-mesg">Password *</h3>

                    <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Enter Password Here"/>

                    <input class="form-input" id="primary-input" type="email" name="email-id" placeholder="Confirm Password"/>

                    <button class="primary-button error-button">Signup</button>

                    <a href="/pages/login-page.html">Already have an account? Login<i class="fa fa-arrow-right"></i>
                    </a>
            </form >
        </main >
    </>
  );
}
