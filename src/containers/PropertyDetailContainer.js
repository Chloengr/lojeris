import { connect } from "react-redux";
import PropertyDetail from "../components/Properties/PropertyDetail";

const mapStateToProps = (state, ownProps) => ({
  loading: state.properties.loading,
  property: state.properties.properties.find(
    (p) => p.id === ownProps.match.params.id - 0
  ),
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetail);
