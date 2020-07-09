import React, { Component } from "react";

import "./PropertyForm.scss";
import Categories from "../Categories/Categories";
import Districts from "../Districts/Districts";

class PropertyForm extends Component {
  render() {
    const { categories, districts } = this.props;
    return (
      <>
        <h2 className="page-title">PROPOSER VOTRE BIEN</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Prix:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                aria-describedby="price"
                placeholder="Entrez un prix"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Surface:</label>
              <input
                type="number"
                className="form-control"
                id="surface"
                aria-describedby="surface"
                placeholder="Entrez la surface"
              />
            </div>
            <div className="form-group col-md-4">
              <label>Nombre de pièces:</label>
              <input
                type="number"
                className="form-control"
                id="rooms"
                aria-describedby="rooms"
                placeholder="Entrez le nombre de pièces"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="description"
              placeholder="Entrez la description"
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="text"
              className="form-control"
              id="image"
              aria-describedby="image"
              placeholder="Ajouter une image"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Categorie:</label>
              <Categories categories={categories}/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="district">Quartier:</label>
              <Districts districts={districts}/>
            </div>
          </div>

          <div className="form-group">
            <label>Détail:</label>
            <input
              type="text"
              className="form-control"
              id="features"
              aria-describedby="features"
              placeholder="Entrez le détail"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </>
    );
  }
}

export default PropertyForm;
