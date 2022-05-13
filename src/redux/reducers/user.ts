import { USER_TYPE } from "../../@types/user";

const initialState: {
  infor: {};
  token: string;
} = {
  infor: {},
  token: "",
};

const userReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER_INFOR":
      const user: USER_TYPE = action.payload;
      return {
        ...state,
        infor: user,
      };
    default:
      return state;
  }
};

export {};
export default userReducers;
