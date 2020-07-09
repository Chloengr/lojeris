import React, { Component } from "react";
import Property from './Property';

class Home extends Component {
  render() {
    const { properties } = this.props
    const propertiesJsx = properties.slice(0, 12).map((p) => (
      <article key={p.id} class="property">
        <Property properties={p} />
      </article>
    ));
    return (
    <div>
      <header className="home-banner">
        <h1>Bienvenue chez <strong>Lojeris</strong></h1>
        <p>Votre partenaire de confiance en immobilier</p>
      </header>

      <section className="container">
        <h2>Nos dernières offres</h2>
        <fieldset>
            <legend>Filtres</legend>
            <form className="form-filters">
                <select>
                    <option>Type de logement</option>
                    <option>Maison</option>
                    <option>Appartement</option>
                    <option>Terrain</option>
                    <option>Garage</option>
                </select>
                <select>
                    <option>Quartier</option>
                    <option>Centre</option>
                    <option>Sud gare</option>
                    <option>Thabor</option>
                    <option>Bréquigny</option>
                    <option>Le Blosne</option>
                    <option>Villejean</option>
                    <option>Beaulieu</option>
                </select>
                <button>Appliquer</button>
            </form>
        </fieldset>
        <div className="properties">
          {propertiesJsx}
        </div>
      </section>
  </div>);
  }
}

export default Home;
