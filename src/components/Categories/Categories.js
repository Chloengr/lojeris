import React, { Component } from 'react';

class Categories extends Component {
  render() {
    const { properties, categories, handleChange } = this.props
    const categorieJSX = categories.map(c =>
      <option key={c.id}>{c.name}</option>
    )    
    return (
      <div>
        <select
        className="form-control"
        id="category"
        value={properties.category}
        onChange={event => handleChange('category:name', event.target.value)}>
          {categorieJSX}
        </select>
      </div>
    );
  }
}

export default Categories;