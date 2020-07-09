import React, { Component } from "react";
import Property from "../Home/Property";
import { Link } from "react-router-dom";

class Properties extends Component {
  render() {
    const { properties } = this.props;
    const propertiesJsx = properties.map((p) => (
      <Link to={`/property/${p.id}`}>
        <article key={p.id} className="property">
          <Property properties={p} />
        </article>
      </Link>
    ));
    return (
      <>
        <div className="page-title">PROPRIETES</div>
        <div className="properties">{propertiesJsx}</div>
      </>
    );
  }
}

export default Properties;
