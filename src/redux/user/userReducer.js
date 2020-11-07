import { UserActionTypes } from "./user.types";

const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.Set_Current_User:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
