import React, { Component } from "react";

class PropertyForm extends Component {
  render() {
    return (
      <>
        <h2>PROPOSER VOTRE BIEN</h2>
        <form>
          <div class="form-group">
            <label for="price">Prix:</label>
            <input
              type="text"
              class="form-control"
              id="price"
              aria-describedby="price"
              placeholder="Entrez un prix"
            />
          </div>
          <div class="form-group">
            <label for="surface">Surface:</label>
            <input
              type="number"
              class="form-control"
              id="surface"
              aria-describedby="surface"
              placeholder="Entrez la surface"
            />
          </div>
          <div class="form-group">
            <label for="rooms">Nombre de pièces:</label>
            <input
              type="number"
              class="form-control"
              id="rooms"
              aria-describedby="rooms"
              placeholder="Entrez le nombre de pièces"
            />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <input
              type="text"
              class="form-control"
              id="description"
              aria-describedby="description"
              placeholder="Entrez la description"
            />
          </div>
          <div class="form-group">
            <label for="image">Image:</label>
            <input
              type="text"
              class="form-control"
              id="image"
              aria-describedby="image"
              placeholder="Ajouter une image"
            />
          </div>
          <div class="form-group">
            <label for="category">Categorie:</label>
            <select class="form-control" id="category">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="district">Quartier:</label>
            <select class="form-control" id="district">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="features">Détail:</label>
            <input
              type="text"
              class="form-control"
              id="features"
              aria-describedby="features"
              placeholder="Entrez le détail"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Envoyer
          </button>
        </form>
      </>
    );
  }
}

export default PropertyForm;
