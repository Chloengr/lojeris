import React, { Component } from 'react';

class Categories extends Component {
  render() {
    const { categories } = this.props
    const categorieJSX = categories.map(c => 
      <option key={c.id}>{c.name}</option>
    )
    return (
      <div>
        <select className="form-control" id="category">
          {categorieJSX}
        </select>
      </div>
    );
  }
}

export default Categories;