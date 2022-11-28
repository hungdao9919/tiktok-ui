import axios from 'axios';

const httpsRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (api, options = {}) => {
    const response = await httpsRequest.get(api, options);
    return response.data;
};
export default httpsRequest;
