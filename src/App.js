import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
