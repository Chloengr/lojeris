import { connect } from 'react-redux';
import Filter from '../components/Filter/Filter';


const mapStateToProps = (state, ownProps) => ({
    search: state.search.search
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);