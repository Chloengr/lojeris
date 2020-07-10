import React, { Component } from "react";
import "./PropertyDetail.scss";

class PropertyDetail extends Component {
  render() {
    const { property } = this.props;
    if (!property) {
      return <p>Chargement en cours..</p>;
    }
    return (
      <section className="container">
<div className="card">
        <img
          src={'http://lojeris.api.pierre-jehan.com/uploads/'+ property.picture.filePath}
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text">Description: {property.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Prix: {property.price} € | Quartier: {property.district.name} | Date d'ajout du bien: {property.createdAt.substring(0, 10)} | 
          Catégorie: {property.category.name} | Surface: {property.surface} m2 | Nombre de pièces: {property.bedroom}</li>
          <li className="list-group-item">Détails supplémentaires: {property.features.properties}</li>
        </ul>
        </div>
      </section>
    );
  }
}

export default PropertyDetail;
