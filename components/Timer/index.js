// redux 작업이나 state작업은 여기서하고 presenter에선 보여주기만 한다.
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state) {
  const { elapsedTime, isPlaying, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}
// prop과 reducer를 연결해준다.
function mapDispatchToProps(dispatch) {
  return {
    //props에서 쓰는 이름: reducer에서 가져온 것 순으로 작성
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
