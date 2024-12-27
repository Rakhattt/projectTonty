import { defineStore } from "pinia";
import { signUpPost,loginPost, createloginPost, signInPost, signInToken } from "@/services/authenticate";
// import type { IloginCreate } from "@/type/index";

export const useAuthenticateStore = defineStore("authenticateStore", () => {

  const signUpPostStore = async (objData: any) => {
    try {
      const response = await signUpPost(objData);
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
        console.error("Ошибка при загрузке:", error);
      }
  };

  const createloginPostStore = async (objData: any) => {
    try {
        const response = await createloginPost(objData);
        return response;
      } catch (error) {
        console.error("Ошибка при загрузке:", objData);
      }
  }

  const signInPostStore = async (objData: any) => {
    try {
      const response = await signInPost(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  }

  const signInTokenStore = async (objData: any) => {
    try {
      const response = await signInToken(objData);
      return response;
    } catch (error) {
      console.error("Ошибка при загрузке:", objData);
    }
  }

  return { signUpPostStore, loginPostStore, createloginPostStore, signInPostStore, signInTokenStore };
});
