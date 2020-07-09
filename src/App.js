import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Agency from "./components/Agency/Agency";
import PropertiesContainer from "./containers/PropertiesContainer";
import ProperyHome from "./components/PropertyForm/PropertyForm";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/agency" component={Agency} />
          <Route path="/properties" component={PropertiesContainer} />
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
