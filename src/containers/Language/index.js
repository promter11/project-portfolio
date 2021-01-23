import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getLanguageState } from "../../store/selectors/LanguageSelectors";
import * as LanguageActions from "../../store/actions/LanguageActions";

import Language from "../../components/Language";

const mapStateToProps = (state) => {
  return {
    state: getLanguageState(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(LanguageActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);
