import React from "react";
import FacebookLogin from "react-facebook-login";

const Login = ({ onLogin }) => {
  return (
    <div className="container">
      <br />
      <br />
      <div className="center">
        <FacebookLogin
          appId="1924609344297152"
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
