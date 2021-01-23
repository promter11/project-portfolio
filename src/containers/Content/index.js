import { connect } from "react-redux";

import { getLanguage } from "../../store/selectors/LanguageSelectors";

import Content from "../../components/Content";

const mapStateToProps = (state) => {
  return {
    language: getLanguage(state),
  };
};

export default connect(mapStateToProps)(Content);
