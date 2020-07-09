import React, { Component } from "react";

class PropertyForm extends Component {
  render() {
    return (
      <>
        <h2>PROPOSER VOTRE BIEN</h2>
        <form>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="price">Prix:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                aria-describedby="price"
                placeholder="Entrez un prix"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="surface">Surface:</label>
              <input
                type="number"
                className="form-control"
                id="surface"
                aria-describedby="surface"
                placeholder="Entrez la surface"
              />
            </div>
            <div class="form-group col-md-4">
              <label for="rooms">Nombre de pièces:</label>
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
            <label for="description">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="description"
              placeholder="Entrez la description"
            />
          </div>
          <div className="form-group">
            <label for="image">Image:</label>
            <input
              type="text"
              className="form-control"
              id="image"
              aria-describedby="image"
              placeholder="Ajouter une image"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="category">Categorie:</label>
              <select className="form-control" id="category">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="district">Quartier:</label>
              <select className="form-control" id="district">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label for="features">Détail:</label>
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
