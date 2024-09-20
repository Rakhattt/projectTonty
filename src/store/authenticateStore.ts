import { defineStore } from "pinia";
import { signUpPost,loginPost, createloginPost } from "@/services/authenticate";
import type { ISignUpData, IloginCreate } from "@/type/index";

export const useAuthenticateStore = defineStore("authenticateStore", () => {

  const signUpPostStore = async (signUpData: ISignUpData) => {
    try {
      const response = await signUpPost(signUpData);
      return response;
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };

  const loginPostStore = async (login: string) => {
    try {
        const response = await loginPost(login);
        return response;
      } catch (error) {
        console.error("Ошибка при загрузке изображений:", error);
      }
  };

  const createloginPostStore = async (loginCreate: IloginCreate) => {
    try {
        const response = await createloginPost(loginCreate);
        return response;
      } catch (error) {
        console.error("Ошибка при загрузке изображений:", loginCreate);
      }
  }

  return { signUpPostStore, loginPostStore, createloginPostStore };
});
