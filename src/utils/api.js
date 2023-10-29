import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_STRIPE_APP_DEV_URL + url, params
      );
  
      if (!response.ok) {
        // Handle non-successful response (e.g., 404, 500, etc.) here
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse the JSON response
  
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  


export const makePaymentRequest = axios.create({
    baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_DEV_APP_KEY,
    },
});