import { useState, useEffect, useContext } from "react";
import "./App.css";
import VoiceRecorgnition from "./components/VoiceRecorgnition";
import { handleSpeak } from "./utils/utils";
import { biodata } from "./utils/biodata";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

function Login() {

  const { loggedIn, login } = useContext(AuthContext); const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const onSubmit = () => {
    const matchingEntry = biodata.find(
      (entry) => entry.password === password && entry.username === username
    );
    if (attempts >= 4) {
      setIsDisabled(true);
      return;
    }
    if (!matchingEntry) {
      setAttempts((prevAttempts) => prevAttempts + 1);
      console.log(`Incorrect Password`);
    } else {
      const { name, bal } = matchingEntry;
      console.log("Name:", name);
      console.log("Balance:", bal);

      let text = `Welcome ${name}, Please what would you like to do today?`;
      handleSpeak(text);
      login()
    }
  };
  if(loggedIn){
    return <Navigate to="/dashboard" replace={true}/>
  }

  /* useEffect(() => {
    if (isDisabled) {
      const timer = setTimeout(() => {
        setIsDisabled(false);
        setAttempts(0);
      }, 5 * 60 * 1000);

      return () => clearTimeout(timer);
    }
  }, [isDisabled]); */

  return (
    <div className="phone-container">
      <div className="app-container">
        <div className="login-form">
          <h3>Account Login</h3>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            maxLength={4}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            name="Password"
          />
          {isDisabled && <p>Password input disabled. Retry after 5 minutes.</p>}
          <div className="btn-container">
            <button
              disabled={isDisabled}
              className="login-btn"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
          <div className="forget-info">
            <p className="p-5">Forgot Username?</p>
            <p className="p-5">Forgot Password?</p>
          </div>
        </div>
      </div>
    </div>

    /*  <div className="App">
      <header className="App-header">
     
        <div className="form-wrapper">
       
          <div className="login-form">
          <h3>Account Login</h3>
          <label htmlFor="username">Username</label>
            <input
              type="text"
              maxLength={4}
              onChange={handleInputChange}
              className="form-control"
              name="username"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              maxLength={4}
              onChange={handleInputChange}
              className="form-control"
              name="Password"
            />
            <div className="btn-container">
              <button
                disabled={isDisabled}
                className="login-btn"
                onClick={onSubmit}
              >
                Submit
              </button>
              {isDisabled && (
                <p>Password input disabled. Please wait 5 minutes.</p>
              )}
            </div>
          </div>
        </div>
        {<VoiceRecorgnition />}
      </header>
    </div> */
  );
}

export default Login;
