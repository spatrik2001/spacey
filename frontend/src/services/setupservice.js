import TokenService from "./tokenservice";

const setup = (store) => {
    Axios.interceptors.request.use((config) => {
        const token = TokenService.getLocalAccessToken();
        if (token) {
            config.headers['x-access-token'] = token;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    Axios.interceptors.response.use((response) => {
        return response;
    }, async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/api/auth/login" && err.response) {
            // Lejárt access token
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
            }
        }
        return Promise.reject(err);
    })
};
export default setup;