//auth context


export const useService = (serviceFactory) => {
    const { accessToken } = { accessToken: '222' };

    const service = serviceFactory(accessToken);
    return service;
}