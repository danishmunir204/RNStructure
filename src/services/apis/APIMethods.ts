
import { baseUrl } from './baseUrl';
import axios, { AxiosResponse } from 'axios';


interface Data {
  success: number;
  data: any;
}

export const PostMethod = async (
  endPoint: string,
  data: any,
  dispatch: any,
  cb: (data: any) => void,
) => {
  try {
    // Log base URL and endpoint
    console.log('Base URL:', baseUrl.defaults.baseURL);
    console.log('Endpoint:', endPoint);

    // Construct complete URL with parameters
    const completeUrl = `${baseUrl.defaults.baseURL}${endPoint}`;
    console.log('Complete URL:', completeUrl);
    

    // Log parameters
    console.log('Parameters:', data);

    const res = await baseUrl.post<Data>(endPoint, data);

    if (res.status == 200) {
      const mergedData = { ...res.data.data, ...res.data };
      
      cb(mergedData);
    } else {
      console.log(res.status)
      // Handle cases where success !== 1 if needed
    }
  } catch (error) {
    console.error('Error on my side:', error);
    dispatch({
      type: 'DATA_FAILED', // Use the provided type parameter for dispatching
    });
    cb([]);
  }
};
