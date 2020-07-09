import React, {Component} from 'react';
import {connect} from "react-redux";

class Filter extends Component {
    render() {
        const allProperties = ['Appartement', 'Maison'];

        function  search(event) {
            let keyword = event.target.value;
        }

        return (
            <div>
                <input type="text" placeholder="Rechercher une propriété" onChange={
                    (e)=>this.search(e)
                } />
                {allProperties.filter(p => p.includes({search})).map(filteredName => (
                    <li>
                        {filteredName}
                    </li>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    search: state.search.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);