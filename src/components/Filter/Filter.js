import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const allProperties = ['Appartement', 'Maison'];

        let keyword = '';

        function  search(event) {
            keyword = event.target.value;
        }

        return (
            <div>
                <input type="text" placeholder="Rechercher une propriété" onChange={
                    (e)=>search(e)
                } />
                {allProperties.filter(p => p.includes(keyword)).map(filteredName => (
                    <li>
                        {filteredName}
                    </li>
                ))}
            </div>
        );
    }
}

export default Filter;

