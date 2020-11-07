import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.Set_Current_User,
  payload: user,
});
