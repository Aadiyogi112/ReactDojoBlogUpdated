import React, { useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../Redux/login/loginActionCreators";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();
  const userNameState = useSelector((state) => state.loginReducer.userName);
  const registerUserState = useSelector(
    (state) => state.registerReducer.registeredUser
  );
  const dispatch = useDispatch();

  console.log("the login state in login component", userNameState);
  const SignIn = (event) => {
    event.preventDefault();

    console.log("usernam and password login component", username, password);
    if (
      registerUserState.find(
        (user) => user.username === username && user.password === password
      )
    ) {
      dispatch(loginUser({ username: userNameState }));
      window.localStorage.setItem(
        "Login",
        JSON.stringify({ username: userNameState })
      );
      navigate("/blog");
    } else {
      setUserNotFound(true);
    }
  };

  return (
    <section className="ftco-section">
      <h1>{JSON.stringify(props.loginDetails)}</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Sign In</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="wrap d-md-flex"></div>
          <div className="login-wrap p-4 p-md-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-4">Sign In</h3>
              </div>
            </div>
            <form className="signin-form">
              <div className="form-group mb-3">
                <label className="label" htmlFor="name">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    console.log(e.target.value);
                    setUserNotFound(false);
                  }}
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setUserNotFound(false);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="form-control btn btn-primary rounded submit px-3"
                  style={{ color: "#0000FF" }}
                  onClick={SignIn}
                >
                  Sign In
                </button>
              </div>
              {userNotFound ? (
                <span className="invalid-error">
                  Invaild Username or Password
                </span>
              ) : (
                ""
              )}
              <div className="form-group d-md-flex">
                <div className="w-50 text-left"></div>
              </div>
            </form>
            <p className="text-center">
              Not a member?{" "}
              <Link data-toggle="tab" to="/SignUp">
                Sign Up{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     loginDetails: state.loginReducer.loggedInUser,
//     registeredUser: state.registerReducer.registeredUser,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     logginUser: (data) => dispatch(loginUser(data)),
//   };
// };
export default Login;
