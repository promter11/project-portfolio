import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getSidebarStatus } from "../../store/selectors/SidebarSelectors";
import { getLanguage } from "../../store/selectors/LanguageSelectors";
import * as SidebarActions from "../../store/actions/SidebarActions";

import Sidebar from "../../components/Sidebar";

const mapStateToProps = (state) => {
  return {
    state: {
      sidebarStatus: getSidebarStatus(state),
      language: getLanguage(state),
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SidebarActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
