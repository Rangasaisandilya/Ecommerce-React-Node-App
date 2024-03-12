const api_endpoint = import.meta.env.VITE_APP_API_URL;

//product api's
export const upload_product_url = `${api_endpoint}/product/upload`;
export const getmens_data_url = `${api_endpoint}/product/men`;
export const getwomens_data_url = `${api_endpoint}/product/women`;
export const getkids_data_url = `${api_endpoint}/product/kids`;
export const getproductby_id = (id) => `${api_endpoint}/product/${id}`;


// user api's
export const regsiteruser_url = `${api_endpoint}/user/register`
export const loginuser_url = `${api_endpoint}/user/login`
export const getUserInfo_url = `${api_endpoint}/user/`
