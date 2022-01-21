import { defaultState } from "../../Global/Configuration/Reducer";

export const SET_ACCESS_TOKEN_APP = 'SET_ACCESS_TOKEN_APP';

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN_APP:
      return {
        ...state,
        accessTokenData: action.data
      }

    default:
      return state;
  }
};
