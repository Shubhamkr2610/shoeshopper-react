import React , {useState} from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import { useLogin } from 'context/LoginContext';

export const Login = () => {

    function setGuestCredential(event) {
      event.preventDefault();
      setEmail("adarshbalika@gmail.com");
      setPassword("adarshbalika");
    }

      const { loginUser } = useLogin();

      const [ email, setEmail ] = useState("");
      const [ password, setPassword ] = useState("");

      const loginButton = ({event,email, password}) => {
      event.preventDefault();
      loginUser( {email, password});
  }


  return (
    <>
     {/* <!-- textarea-container is a className used in main--> */}
        <main className="form-container" >
            <form className="form">
                <h2 className="form-heading">Already have an account?</h2>

                <h2 className="form-sub-heading">Login</h2>

                <h3 className="form-mesg">Email address</h3>

                <input className="form-input" id="primary-input" type="email" name="email-id" placeholder="Enter Your Email-Id" required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} />

                <h3 className="form-mesg">Password</h3>

                <input className="form-input" type="password" name="password" placeholder="Enter Your Password"  required
              value={password}
              onChange = {(e) => setPassword(e.target.value)} />

                <div className="checkbox-container">
                    <p>
                    <input type="checkbox" name='remember' id='remember' />
                    <label htmlFor="remember"> Remember me </label>
                    </p>
                    <p><a href="#">Forgot Password?</a></p>
                </div>

                <button className="primary-button error-button"  onClick = {(event) => loginButton({event, email, password})} >Login</button>

                <button className='login-link primary-button error-button' onClick={(e) => setGuestCredential (e)} >
                   Use guest credentials
                </button>
                <Link to="/Signup"  >Create new account<i className="fa fa-arrow-right"></i></Link>
            </form>
        </main>
    </>
  );
}
