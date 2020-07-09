import { connect } from "react-redux";
import PropertyDetail from "../components/Properties/PropertyDetail";

const mapStateToProps = (state, ownProps) => ({
  property: state.properties.properties.find(
    (p) => p.id === ownProps.match.params.id
  ),
  loading: state.properties.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetail);
