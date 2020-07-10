import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Agency from "./components/Agency/Agency";
import PropertiesContainer from "./containers/PropertiesContainer";
import PropertyFormContainer from "./containers/PropertyFormContainer";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import PropertyDetailContainer from "./containers/PropertyDetailContainer";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/agency" component={Agency} />
          <Route path="/properties" component={PropertiesContainer} />
          <Route path="/propertyForm" component={PropertyFormContainer} />
          <Route path="/property/:id" component={PropertyDetailContainer} />
          <Route>
            <p>Page not found</p>
          </Route>
        </Switch>
      </div>
      <footer className="site-footer">
        <div className="container">Copyright © 2020 Lojeris</div>
      </footer>
    </>
  );
}

export default App;
