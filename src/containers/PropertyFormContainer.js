import { connect } from "react-redux";
import PropertyForm from "../components/PropertyForm/PropertyForm";

const mapStateToProps = (state, ownProps) => ({
  properties: state.properties.properties,
  loading: state.properties.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyForm);
