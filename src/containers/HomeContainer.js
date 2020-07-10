import { connect } from 'react-redux';
import Home from '../components/Home/Home';

const mapStateToProps = (state, ownProps) => ({
  properties: state.properties.properties,
  loading: state.properties.loading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);