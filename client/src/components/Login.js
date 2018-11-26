import React from "react";
import FacebookLogin from "react-facebook-login";

const Login = ({ onLogin }) => {
  return (
    <div className="container">
      <br />
      <br />
      <div className="center">
        <FacebookLogin
          appId="932591810270832"
          autoLoad={true}
          fields="name"
          scope="public_profile,pages_show_list"
          callback={onLogin}
        />
      </div>
    </div>
  );
};

export default Login;
