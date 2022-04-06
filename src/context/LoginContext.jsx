import axios from "axios";

import { createContext, useContext, useState } from "react";


const LoginContext = createContext(null);

const LoginProvider = ({ children }) => {
 
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [encodedToken, setEncodedToken] = useState(null);

  async function loginUser({ email, password }) {
    try {
      const userData = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      setEncodedToken(userData.data.encodedToken);
      setFirstName((p) => userData.data.foundUser.firstName);
      setLastName((p) => userData.data.foundUser.lastName);

    } 
    catch (error) {
        console.log("error")
    }
  }

  return (
    <LoginContext.Provider value={{ encodedToken, firstName, lastName, loginUser }}>
      {children}
    </LoginContext.Provider>
  );
};

//custom hook
const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };