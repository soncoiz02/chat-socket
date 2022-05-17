import { USER_TYPE } from "../@types/user";
import axiosClient from "./axiosConfig";

export type ID_TYPE = string | undefined;

export const userApi = {
  async getAllUser(): Promise<USER_TYPE[] | any> {
    try {
      return await axiosClient.get("/api/users");
    } catch (error) {
      return error;
    }
  },
  async getUser(id: ID_TYPE): Promise<USER_TYPE | any> {
    try {
      return await axiosClient.get(`/apiusers/${id}`);
    } catch (error) {
      return error;
    }
  },
  async createUser(user: {
    username: string;
    password: string;
  }): Promise<{ token: string; user: USER_TYPE } | any> {
    try {
      return await axiosClient.post("/api/signup", user);
    } catch (error) {
      return error;
    }
  },
  async updateAvatar(id: ID_TYPE, avatar: string): Promise<USER_TYPE | any> {
    try {
      return await axiosClient.patch(`/api/users/${id}`, avatar);
    } catch (error) {
      return error;
    }
  },
};
