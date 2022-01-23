import { defaultState } from "../../Global/Configuration/Reducer";

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.data
      }

    default:
      return state;
  }
};
