import { connect } from "react-redux";
import { handleFetchLocations } from "../../redux/actions/progressPanel";
import { stateType } from "../../redux/store";
import { withNamespaces } from "react-i18next";
import ProgressPanel from "./component";

const mapStateToProps = (state: stateType) => {
  return {
    currentEpub: state.book.currentEpub,
    currentBook: state.book.currentBook,
    percentage: state.progressPanel.percentage,
    locations: state.progressPanel.locations,
  };
};
const actionCreator = { handleFetchLocations };
export default connect(
  mapStateToProps,
  actionCreator
)(withNamespaces()(ProgressPanel as any));
