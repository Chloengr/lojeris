import { connect } from "react-redux";
import Properties from "../components/Properties/Properties";

const mapStateToProps = (state, ownProps) => ({
  properties: state.properties.properties,
  loading: state.properties.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
