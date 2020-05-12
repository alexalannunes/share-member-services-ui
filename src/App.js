import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, MemberDetails, NotFound } from "./pages/index";

function App() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 430,
        minWidth: 360,
        margin: "0 auto",
        height: "100%",
      }}
    >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:idx" exact component={MemberDetails} />
        <Route
          path="/*"
          exact
          component={() => <NotFound title="Page not found" />}
        />
      </Switch>
    </div>
  );
}

export default App;
