import { USER_TYPE } from "../../@types/user";

export const setUserInfor = (
  user: USER_TYPE | undefined
): {
  action: string;
  payload: USER_TYPE | undefined;
} => {
  return {
    action: "SET_USER_INFOR",
    payload: user,
  };
};
