import apiAxios from "@/servicesLib/index";
import { ElNotification } from "element-plus";

export const createGroupPost = async (objData: any) => {
  try {
    const { data } = await apiAxios.post(
      `http://localhost:8000/create_image_group`,
      objData
    );

    if (data) {
      ElNotification({
        title: "",
        message: "Вы создали группу!",
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

export const addImageGroupPost = async (objData: any) => {
  try {
    const { data } = await apiAxios.post(
      `http://localhost:8000/add_image_to_group`,
      objData
    );

    if (data) {
      ElNotification({
        title: "Запрос был отправлен",
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

export const saveNameAndDescPut = async (objData: any) => {
  try {
    const { data } = await apiAxios.put(
      `http://localhost:8000/update_image_group`,
      objData
    );

    if (data) {
      ElNotification({
        title: "Данные обновлены!",
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

export const groupDelete = async (id: any) => {
  try {
    const { data } = await apiAxios.delete(
      `http://localhost:8000/delete_image_group`,
      id
    );

    if (data) {
      ElNotification({
        title: "Удалено АА!",
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