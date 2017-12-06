const initial = {
  active: {},
  activeTest: {},
  activeInfoPanelIndex: -1
};

const reducers = {
  UPDATE_ACTIVE: (state, value) => {
    return {
      ...state,
      ...{ active: value }
    };
  },
  UPDATE_ACTIVE_TEST: (state, value) => {
    return {
      ...state,
      ...{ activeTest: value }
    };
  },
  UPDATE_INFO_PANEL_INDEX: (state, value) => {
    return {
      ...state,
      ...{ activeInfoPanelIndex: value }
    };
  }
};

const map = (state = initial, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action.value);
  }

  return state;
};

export default map;
