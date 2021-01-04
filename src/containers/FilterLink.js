import { connect } from "react-redux";
import { setVisibilityFilter } from "../action";
import Link from "../components/Links";

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.VisibleFilter === ownProps.filter,
    filterButton: setVisibilityFilter,
  };
};

export default connect(mapStateToProps, {
  setVisibilityFilter,
})(Link);
