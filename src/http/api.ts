import axios from "axios";
import  $axios, { API_URL } from "./axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


$api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && originalRequest && !originalRequest._isRetry) {
            originalRequest._isRetry = true;

            try {
                const { data } = await $axios.get("/auth/refresh", { withCredentials: true });

                localStorage.setItem("accessToken", data.accessToken);

                return $api.request(originalRequest);
            } catch (refreshError) {
                console.log("Not authorized");
                localStorage.removeItem("accessToken");
                window.location.href = "/auth";
            }
        }

        throw error;
    }
);

export default $api;
