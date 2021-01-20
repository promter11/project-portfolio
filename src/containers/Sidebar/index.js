import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as SidebarActions from "../../store/actions/SidebarActions";

import Sidebar from "../../components/Sidebar";

const mapStateToProps = (state) => {
  return {
    state: state.SidebarReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SidebarActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
