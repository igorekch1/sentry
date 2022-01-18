import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import ErrorComponent from "./components/ErrorComponent";

function RouterConfig() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Home Page</h1>
      </Route>

      <Route path="/error">
        <h1>Error page</h1>

        <ErrorComponent />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ marginBottom: "100px" }}>
        <span>
          <Link to="/">Home</Link>
        </span>

        <span style={{ paddingLeft: "100px" }}>
          <Link to="/error">Error</Link>
        </span>
      </div>

      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
