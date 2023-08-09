import { requesterFactory } from './requester';

export const authServiceFactory = (token) => {
    const request = requesterFactory(token);

    const register = async (data) => request.post('/auth/register', data);

    const login = async (data) => request.post('/auth/login', data);

    const logout = async () => request.get('/auth/logout');

    return {
        register,
        login,
        logout,
    }
}