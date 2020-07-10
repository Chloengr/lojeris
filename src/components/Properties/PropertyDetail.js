import React, { Component } from "react";
import "./PropertyDetail.scss";

class PropertyDetail extends Component {
  render() {
    const { property } = this.props;
    if (!property) {
      return <p>Chargement en cours..</p>;
    }
    return (
      <div>
        <img
          src={'http://lojeris.api.pierre-jehan.com/uploads/'+ property.picture.filePath}
          alt=""
          className="card-img-top"
        />

        <div className="price">
          <div className="tag">Prix: {property.price} €</div>
        </div>
        <div className="more-info">
          <div className="info-line">Quartier: {property.district.name}</div>
          <div className="info-line">
            Date d'ajout du bien: {property.createdAt.substring(0, 10)}
          </div>
          <div className="info-line">Catégorie: {property.category.name}</div>
          <div className="info-line">Surface: {property.surface} m2</div>
          <div className="info-line">Nombre de pièces: {property.bedroom}</div>
          <div className="info-line">
            Détails supplémentaires: {property.features.properties}
          </div>
          <div className="info-line">Description: {property.description}</div>
        </div>
      </div>
    );
  }
}

export default PropertyDetail;
