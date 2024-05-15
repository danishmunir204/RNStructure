import {retry} from '@reduxjs/toolkit/query';
import {EndPoint} from '../../services/apis/apiEndPonit';
import {PostMethod} from '../../services/apis/APIMethods';
import {DATA_FAILED, DATA_LOADING, LOGIN} from '../reducers/authReducers';

// import {baseUrl} from '../../services/apis/baseUrl';
// import {AppDispatch} from '../app/store';
// import { useAppDispatch } from "../app/hooks";

export const loginAPI = (login: LoginCredentials) => {
    return async (dispatch: any) => {
        dispatch(
            DATA_LOADING(true)
        )
      try {
        await PostMethod(EndPoint.LOGIN, login, dispatch, (data: any) => {
          console.log('entered');
          // Dispatch LOGIN action with the response data
          console.log(data)
          dispatch(
            LOGIN(data)
            // DATA_LOADING(false)
            // type: LOGIN,
            // payload: data,
          );
        });
      } catch (error) {
        // Handle error if needed
        console.error('Error on my side:', error);
        dispatch(
            (false)
        );
      }
    };
  };
  
