import React, { Component } from "react";
import Property from "../Home/Property";

class Properties extends Component {
  render() {
    const { properties } = this.props;
    const propertiesJsx = properties.map((p) => (
      <article key={p.id} className="property">
        <Property properties={p} />
      </article>
    ));
    return (
      <>
        <h2 className="page-title">PROPRIETES</h2>
        <div className="properties">{propertiesJsx}</div>
      </>
    );
  }
}

export default Properties;
