import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import SignInOut from "./pages/SignInOut";
import Header from "./components/Header";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends Component {
  state = {
    currentUser: null
  };

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
