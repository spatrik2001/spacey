import TokenService from "./tokenservice";
import instance from "./api";

const setup = (store) => {
    instance.interceptors.request.use((config) => {
        const token = TokenService.getLocalAccessToken();
        if (token) {
            config.headers['x-access-token'] = token;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    instance.interceptors.response.use((response) => {
        return response;
    }, async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/api/auth/login" && err.response) {
            // Lejárt access token
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const rs = await instance.post("/auth/refreshtoken", {
                        refreshToken: TokenService.getLocalRefreshToken(),
                    });
                    const { accessToken } = rs.data;
                    store.dispatch('auth/refreshToken', accessToken);
                    TokenService.updateLocalAccessToken(accessToken);
                    return instance(originalConfig);
                } catch (error) {
                    return Promise.reject(error);
                }
            }
        }
        return Promise.reject(err);
    })
};
export default setup;