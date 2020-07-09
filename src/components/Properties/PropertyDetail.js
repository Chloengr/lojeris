import React, { Component } from "react";

class PropertyDetail extends Component {
  render() {
    const { property } = this.props;
    console.log(property);
    return <div>coucou</div>;
  }
}

export default PropertyDetail;
