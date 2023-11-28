const { VITE_URL, VITE_PATH } = import.meta.env;
import { useLoadingState } from "@/stores/common.js";
import axios from "axios";
import toast from "@/utils/toast";

const service = axios.create({
  baseURL: `${VITE_URL}/api/${VITE_PATH}`,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    useLoadingState().isLoading = false;
    toast.fire({
      icon: "error",
      title: `${error.response.data.message}`,
    });
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    useLoadingState().isLoading = false;
    useLoadingState().isProcessing = false;
    return response.data;
  },
  (error) => {
    useLoadingState().isLoading = false;
    useLoadingState().isProcessing = false;
    toast.fire({
      icon: "error",
      title: `${error.response.data.message}`,
    });
    return Promise.reject(error);
  }
);

export default service;
