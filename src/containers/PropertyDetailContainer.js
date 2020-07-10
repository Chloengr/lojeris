import { connect } from "react-redux";
import PropertyDetail from "../components/Properties/PropertyDetail";

const mapStateToProps = (state, ownProps) => ({
  properties: state.properties.properties,
  loading: state.properties.loading,
  property: state.properties.properties.find(
    (p) => p.id === ownProps.match.params.id
  ),
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetail);
