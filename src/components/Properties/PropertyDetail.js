import React, { Component } from "react";

class PropertyDetail extends Component {
  constructor(props) {
    super(props);
    const { properties, match } = this.props;
    const id = match.params.id - 1;
    this.property = properties[id];
  }

  render() {
    return (
      <div>
        <img
          src={"images/" + this.property.picture}
          alt=""
          className="card-img-top"
        />
        <footer className="overlay">
          <div className="info">
            <div className="tag">{this.property.price} €</div>
            <h3>{this.property.district.name}</h3>
          </div>
          <div className="more-info">
            <div className="property-info">
              <i className="fa fa-calendar"></i>
              {this.property.createdAt.substring(0, 10)}
            </div>
            <div className="property-info">
              <i className="fa fa-tag"></i>
              {this.property.category.name}
            </div>
            <div className="property-info">
              <i className="fa fa-expand"></i>
              {this.property.surface} m2
            </div>
            <div className="property-info">
              <i className="fa fa-bed"></i>
              {this.property.bedroom} ch
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default PropertyDetail;
