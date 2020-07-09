import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Agency from "./components/Agency/Agency";
import Properties from "./components/Properties/Properties";
import ProperyHome from "./components/PropertyForm/PropertyForm";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/agency" component={Agency} />
          <Route path="/properties" component={Properties} />
          <Route path="/propertyHome" component={ProperyHome} />
          <Route>
            <p>Page not found</p>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
