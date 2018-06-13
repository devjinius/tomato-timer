//import
// nothing

//actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

//action creators

// start timer를 만드는 액션
function startTimer() {
  return {
    type: START_TIMER
  };
}

function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

//reducer

const TIMER_DURATION = 60;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

// 여기가 리듀서
// state를 안주면 default로 initialState로 된다.
// 리덕스는 자동으로 current state를 여기에 집어넣고 실행하게 된다.
function reducer(state = initialState, action) {
  if (action.type === START_TIMER) {
    return applyStartTimer(state);
  } else if (action.type === RESTART_TIMER) {
    return applyReStartTimer(state);
  } else if (action.type === ADD_SECOND) {
    return applyAddSecond(state);
  } else {
    return state;
  }
}

//reducer functions

function applyStartTimer(state) {
  return {
    ...state,
    isPlaying: true
  };
}

function applyReStartTimer(state) {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false,
      elapsedTime: 0
    };
  }
}

//export action creator

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreators };

//export reducer
export default reducer;
