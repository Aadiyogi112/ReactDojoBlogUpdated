import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux";
import "./Signup.css";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [message, setmessage] = useState("");
  const navigate = useNavigate();
  const registeredUser = useSelector((state) => {
    return state.registerReducer.registeredUser;
  });
  let handleSubmit = (event) => {
    event.preventDefault();
    if (registeredUser.find((user) => user.username === username)) {
      setUserNotFound(true);
      setmessage("Username already exist");
    } else {
      if (password === confirmpassword) {
        let logindata = {
          username: username,
          password: password,
        };
        props.registerUser(logindata);
        navigate("/Login");
      } else {
        setUserNotFound(true);
        setmessage("Password and Confirm Password didn't match");
      }
    }
  };

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Sign Up</h2>
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="wrap d-md-flex"></div>
            <div className="login-wrap p-4 p-md-5">
              <div className="d-flex">
                <div className="w-100">
                  <h3 className="mb-4">Sign Up</h3>
                </div>
              </div>
              <form action="#" className="signin-form">
                <div className="form-group mb-3">
                  <label className="label" htmlFor="name">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="label" htmlFor="password">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={confirmpassword}
                    onChange={(e) => {
                      setconfirmpassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="form-control btn btn-primary rounded submit px-3"
                    onClick={handleSubmit}
                  >
                    Sign Up
                  </button>
                </div>
                {userNotFound ? (
                  <span className="passwordnotmatch">{message}</span>
                ) : (
                  ""
                )}
              </form>
              <p className="text-center">
                Already a member?{" "}
                <Link data-toggle="tab" to="/Login">
                  Login
                </Link>
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    loginDetails: state.registerReducer.registeredUser,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(registerUser(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
