import apiAxios from "@/servicesLib/index";
import { ElNotification } from "element-plus";
import type { ISignUpData, IloginCreate } from "@/type/index";

export const signUpPost = async (signUpData: ISignUpData) => {
  try {
    const { data } = await apiAxios.post(
      `http://localhost:8000/create_user`, signUpData
    );

    if (data) {
      ElNotification({
        title: "Запрос был отправлен",
        message: "Пожалуйста, подождите",
        type: "success",
      });
    }

    return data;
  } catch (error) {
    ElNotification({
      title: "Ошибка",
      message: "Произошла ошибка при загрузке данных",
      type: "warning",
    });
    
    return [];
  }
};

export const loginPost = async (login: string) => {
  try {
    const { data } = await apiAxios.post(
      `http://localhost:8000/login`, login
    );

    if (data) {
      ElNotification({
        title: "Запрос был отправлен",
        message: "Пожалуйста, подождите",
        type: "success",
      });
    }

    return data;
  } catch (error) {
    ElNotification({
      title: "Ошибка",
      message: "Произошла ошибка при загрузке данных",
      type: "warning",
    });
    
    return [];
  }
};

export const createloginPost = async (loginCreate: IloginCreate) => {
  try {
    const { data } = await apiAxios.post(
      `http://localhost:8000/loginCreate`, loginCreate
    );

    if (data) {
      ElNotification({
        title: "Запрос был отправлен",
        message: "Пожалуйста, подождите",
        type: "success",
      });
    }

    return data;
  } catch (error) {
    ElNotification({
      title: "Ошибка",
      message: "Произошла ошибка при загрузке данных",
      type: "warning",
    });
    
    return [];
  }
};