import { USER_TYPE } from "../@types/user";
import axiosClient from "./axiosConfig";

export type ID_TYPE = string | undefined;

export const userApi = {
  getAllUser(): Promise<USER_TYPE[] | any> {
    return axiosClient.get("/api/users");
  },
  getUser(id: ID_TYPE): Promise<USER_TYPE | any> {
    return axiosClient.get(`/apiusers/${id}`);
  },
  createUser(user: {
    username: string;
    password: string;
  }): Promise<{ token: string; user: USER_TYPE } | any> {
    return axiosClient.post("/api/signup", user);
  },
  updateAvatar(id: ID_TYPE, avatar: string): Promise<USER_TYPE | any> {
    return axiosClient.patch(`/api/users/${id}`, { avatar });
  },
  searchUsers(params: string): Promise<USER_TYPE[] | any> {
    return axiosClient.get(`/api/users?search=${params}`);
  },
  login(user: {
    username: string;
    password: string;
  }): Promise<USER_TYPE | any> {
    return axiosClient.post("/api/signin", user);
  },
};
