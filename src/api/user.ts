import { USER_TYPE } from "../@types/user";
import axiosClient from "./axiosConfig";

export type ID_TYPE = string | undefined;

export const userApi = {
  async getAllUser(): Promise<USER_TYPE[] | any> {
    try {
      return await axiosClient.get("/users");
    } catch (error) {
      return error;
    }
  },
  async getUser(id: ID_TYPE): Promise<USER_TYPE | any> {
    try {
      return await axiosClient.get(`users/${id}`);
    } catch (error) {
      return error;
    }
  },
  async createUser(
    user: USER_TYPE
  ): Promise<{ token: string; user: USER_TYPE } | any> {
    try {
      return await axiosClient.post("/users", user);
    } catch (error) {
      return error;
    }
  },
  async updateAvatar(id: ID_TYPE, avatar: string): Promise<USER_TYPE | any> {
    try {
      return await axiosClient.patch(`/users/${id}`, avatar);
    } catch (error) {
      return error;
    }
  },
};
