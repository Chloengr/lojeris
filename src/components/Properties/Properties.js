import React, { Component } from "react";
import Filter from "../Filter/Filter";
import Property from "../Home/Property";
import { Link } from "react-router-dom";

class Properties extends Component {
  render() {
    const { properties } = this.props;
    const propertiesJsx = properties.map((p) => (
      <Link key={p.id} to={`/property/${p.id}`}>
        <article className="property">
          <Property properties={p} />
        </article>
      </Link>
    ));
    return (
      <>
        <h2 className="page-title">PROPRIETES</h2>
          <Filter />
        <div className="properties">{propertiesJsx}</div>
      </>
    );
  }
}

export default Properties;
