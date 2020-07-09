import React, { Component } from 'react';

class Districts extends Component {
  render() {
    const { districts } = this.props
    const districtJSX = districts.map(d => 
      <option key={d.id}>{d.name}</option>
    )
    return (
      <div>
        <select className="form-control" id="district">
          {districtJSX}
        </select>
      </div>
    );
  }
}

export default Districts;