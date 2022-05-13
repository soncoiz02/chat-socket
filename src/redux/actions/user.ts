import { USER_TYPE } from "../../@types/user";

export const setUserInfor = (
  user: USER_TYPE
): {
  action: string;
  payload: USER_TYPE;
} => {
  return {
    action: "SET_USER_INFOR",
    payload: user,
  };
};
