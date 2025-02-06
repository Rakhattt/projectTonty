import apiAxios from "@/servicesLib/index";
import { ElNotification } from "element-plus";
import type { ISignUpData, IloginCreate, ISignInData} from "@/type/index";
import { router } from '@/main'; 

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
      `http://localhost:8000/create_client`, loginCreate
    );

    if (data) {
      ElNotification({
        title: "Вы создали логин клиенту!",
        message: "",
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

export const signInPost = async (ISignInData: ISignInData) => {
  try {
    const { data } = await apiAxios.post(
      `http://localhost:8000/api/token`, ISignInData
    );

    if (data) {
      ElNotification({
        title: "api/token успешно!",
        message: "Пожалуйста, подождите",
        type: "success",
      });
    }

    return data;
  } catch (error) {
    ElNotification({
      title: "Ошибка",
      message: "Произошла ошибка http://localhost:8000/api/token",
      type: "warning",
    });
    
    return [];
  }
};

export const signInToken = async (token: string) => {
  try {
    const { data } = await apiAxios.get(`http://localhost:8000/api/protected-sample`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data && data.user_id) {
      localStorage.setItem('user_id', data.user_id);
      router.push({ name: "personal-account" });
      ElNotification({
        title: "api/protected-sample успешно!",
        message: "Пожалуйста, подождите",
        type: "success",
      });
    } else {
      throw new Error('user_id is missing in response');
    }

    return data;
  } catch (error) {
    console.error("Error in signInToken:", error);
    ElNotification({
      title: "Ошибка",
      message: "Произошла ошибка http://localhost:8000/api/protected-sample",
      type: "warning",
    });
    
    return [];
  }
};

