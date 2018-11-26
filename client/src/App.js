import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Page from "./components/Page";
import Pages from "./components/Pages";

class App extends Component {
  state = { accessToken: "", name: "", isLoggedIn: false };

  onLogin = res => {
    const { accessToken, name } = res;
    this.setState({ accessToken, name, isLoggedIn: true });
  };

  logout = () => {
    this.setState({ accessToken: "", name: "", isLoggedIn: false });
    window.FB.logout();
  };

  render() {
    const { isLoggedIn, accessToken } = this.state;

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar logout={this.logout} isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <>
              <Route
                exact
                path="/"
                render={() => <Pages accessToken={accessToken} />}
              />
              <Route
                path="/page/:id"
                render={props => (
                  <Page accessToken={accessToken} id={props.match.params.id} />
                )}
              />
            </>
          ) : (
            <Login onLogin={this.onLogin} />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
