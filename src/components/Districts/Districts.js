import React, { Component } from 'react';

class Districts extends Component {
  render() {
    const { properties, districts, handleChange } = this.props
    const districtJSX = districts.map(d =>
      <option key={d.id}>{d.name}</option>
    )
    return (
      <div>
        <select
        className="form-control"
        id="district"
        value={properties.district}
        onChange={event => handleChange('district:name', event.target.value)}>
          {districtJSX}
        </select>
      </div>
    );
  }
}

export default Districts;