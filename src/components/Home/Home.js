import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div><header class="home-banner">
        <h1>Bienvenue chez <strong>Lojeris</strong></h1>
        <p>Votre partenaire de confiance en immobilier</p>
    </header>

    <section class="container">
        <h2>Nos dernières offres</h2>
        <fieldset>
            <legend>Filtres</legend>
            <form class="form-filters">
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
        <div class="properties">
            <article class="property">
                <a href="#">
                    <img src="images/property-01.jpg" alt="Gare sud"></img>
                    <footer class="overlay">
                        <div class="info">
                            <div class="tag">245 000 €</div>
                            <h3>Gare sud</h3>
                        </div>
                        <div class="more-info">
                            <div class="property-info">
                                <i class="fa fa-calendar"></i>
                                12/06/2017
                            </div>
                            <div class="property-info">
                                <i class="fa fa-tag"></i>
                                Appartement
                            </div>
                            <div class="property-info">
                                <i class="fa fa-expand"></i>
                                320m2
                            </div>
                            <div class="property-info">
                                <i class="fa fa-bed"></i>
                                2
                            </div>
                        </div>
                    </footer>
                </a>
            </article>
            <article class="property">
                <a href="#">
                    <img src="images/property-02.jpg" alt="Brequigny"></img>
                    <footer class="overlay">
                        <div class="info">
                            <div class="tag">220 000 €</div>
                            <h3>Brequigny</h3>
                        </div>
                        <div class="more-info">
                            <div class="property-info">
                                <i class="fa fa-calendar"></i>
                                10/08/2017
                            </div>
                            <div class="property-info">
                                <i class="fa fa-tag"></i>
                                Maison
                            </div>
                            <div class="property-info">
                                <i class="fa fa-expand"></i>
                                320m2
                            </div>
                            <div class="property-info">
                                <i class="fa fa-bed"></i>
                                3
                            </div>
                        </div>
                    </footer>
                </a>
            </article>
            <article class="property">
                <a href="#">
                    <img src="images/property-03.jpg" alt="Tabor"></img>
                    <footer class="overlay">
                        <div class="info">
                            <div class="tag">320 000 €</div>
                            <h3>Tabor</h3>
                        </div>
                        <div class="more-info">
                            <div class="property-info">
                                <i class="fa fa-calendar"></i>
                                22/08/2017
                            </div>
                            <div class="property-info">
                                <i class="fa fa-tag"></i>
                                Maison
                            </div>
                            <div class="property-info">
                                <i class="fa fa-expand"></i>
                                320m2
                            </div>
                            <div class="property-info">
                                <i class="fa fa-bed"></i>
                                2
                            </div>
                        </div>
                    </footer>
                </a>
            </article>
            <article class="property">
                <a href="#">
                    <img src="images/property-04.jpg" alt="Gare sud"></img>
                    <footer class="overlay">
                        <div class="info">
                            <div class="tag">190 000 €</div>
                            <h3>Gare sud</h3>
                        </div>
                        <div class="more-info">
                            <div class="property-info">
                                <i class="fa fa-calendar"></i>
                                10/04/2017
                            </div>
                            <div class="property-info">
                                <i class="fa fa-tag"></i>
                                Appartement
                            </div>
                            <div class="property-info">
                                <i class="fa fa-expand"></i>
                                80m2
                            </div>
                            <div class="property-info">
                                <i class="fa fa-bed"></i>
                                2
                            </div>
                        </div>
                    </footer>
                </a>
            </article>
            <article class="property">
                <a href="#">
                    <img src="images/property-05.jpg" alt="Cesson-Sevigne"></img>
                    <footer class="overlay">
                        <div class="info">
                            <div class="tag">420 000 €</div>
                            <h3>Cesson-Sevigne</h3>
                        </div>
                        <div class="more-info">
                            <div class="property-info">
                                <i class="fa fa-calendar"></i>
                                14/05/2017
                            </div>
                            <div class="property-info">
                                <i class="fa fa-tag"></i>
                                Maison
                            </div>
                            <div class="property-info">
                                <i class="fa fa-expand"></i>
                                320m2
                            </div>
                            <div class="property-info">
                                <i class="fa fa-bed"></i>
                                4
                            </div>
                        </div>
                    </footer>
                </a>
            </article>
        </div>
    </section>

</div>);
    
  }
}

export default Home;
