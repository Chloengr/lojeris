import React, { Component } from "react";

class Property extends Component {
  render() {
    const { properties } = this.props;
    return (
      <div>
        <img
          src={'http://lojeris.api.pierre-jehan.com/uploads/' + properties.picture.filePath }
          alt=""
          className="card-img-top"
        />
        <footer className="overlay">
          <div className="info">
            <div className="tag">{properties.price} €</div>
            <h3>{properties.district.name}</h3>
          </div>
          <div className="more-info">
            <div className="property-info">
              <i className="fa fa-calendar"></i>
              {properties.createdAt.substring(0, 10)}
            </div>
            <div className="property-info">
              <i className="fa fa-tag"></i>
              {properties.category.name}
            </div>
            <div className="property-info">
              <i className="fa fa-expand"></i>
              {properties.surface} m2
            </div>
            <div className="property-info">
              <i className="fa fa-bed"></i>
              {properties.bedroom} ch
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Property;
