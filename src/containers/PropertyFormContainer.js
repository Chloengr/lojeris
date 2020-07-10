import { connect } from "react-redux";
import PropertyForm from "../components/PropertyForm/PropertyForm";
import { propertyFormHandleChange, createProperty } from "../actions/index"

const mapStateToProps = (state, ownProps) => ({
  properties: state.properties.properties,
  categories: state.categories.categories,
  districts: state.districts.districts,
  loading: state.properties.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: (name, value) => dispatch(propertyFormHandleChange(name, value)),
  handleSubmit: () => dispatch(createProperty())
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyForm);
