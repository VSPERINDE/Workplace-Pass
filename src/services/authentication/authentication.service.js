import api from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createUser = async (email, password) => {
  try {
    const response = await api.post("/cliente/register", {
      email,
      password,
    });
    res = response.data;

    if (res.error) {
      alert(res.message);
      return false;
    }
    await AsyncStorage.clear();
    await AsyncStorage.setItem("@user", JSON.stringify(res));
  } catch (err) {
    alert(err.message);
  }
};

export const loginRequest = async (email, password) => {
  try {
    const response = await api.post("/cliente/login", {
      email,
      senha: password,
    });
    res = response.data;
    //console.log(res);
    if (res.error) {
      alert(res.message);
      return false;
    } else {
      await AsyncStorage.removeItem("@user");
      await AsyncStorage.setItem("@user", JSON.stringify(res));
      return JSON.stringify(res);
    }
  } catch (err) {
    alert(err.message);
  }
};
