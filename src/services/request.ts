import apiAxios from "@/servicesLib/index";
import { ElNotification } from "element-plus";

export const getCards = async () => {
  try {
    const { data } = await apiAxios.get(
      `http://localhost:8000/images`
    );

    if (data) {
      ElNotification({
        title: "Запрос был отправлен",
        message: "Пожалуйста, подождите",
        type: "success",
      });
    }

    // Возвращаем данные, чтобы их можно было использовать в других частях приложения
    return data;
  } catch (error) {
    ElNotification({
      title: "Ошибка",
      message: "Произошла ошибка при загрузке данных",
      type: "warning",
    });

    // В случае ошибки возвращаем пустой массив или null
    return [];
  }
};