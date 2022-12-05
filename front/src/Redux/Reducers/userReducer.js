import {DETAIL_USER_SUCCESS,DETAIL_USER_FAIL,GET_ALL_USERS_SUCCESS,GET_ALL_USERS_FAIL,GET_ALL_USERS_LOADING,GET_CURRENT_USER_SUCCESS, LOGIN_SUCCESS, LOGOUT,DELETE_USER_FAIL } from "../consts/userConsts";


const initialstate = {load:false,users: [],user:{},errors:null} 
export const userReducer = (state=initialstate,{type,payload})=>{
    
    switch (type) {
        case GET_ALL_USERS_LOADING:
            return { ...state, loading: true };
          
        case GET_ALL_USERS_SUCCESS:
            return {
                  ...state,
                  users: payload,
                  loading: false,
                };
        case GET_ALL_USERS_FAIL:
             return { ...state, errors: payload, loading: false };
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return({...state,user:payload.user}) 
        case DELETE_USER_FAIL:
            return { ...state, errors: payload, loading: false };
        case GET_CURRENT_USER_SUCCESS :
            return ({...state,user:payload})
        case DETAIL_USER_SUCCESS:
            return { ...state, user: payload, loading: false };
          
        case DETAIL_USER_FAIL:
            return { ...state, errors: payload, loading: false };  
        case LOGOUT : 
        localStorage.removeItem("token")
        return { load: false, user: {}, errors: null };     
        default:
            return state;
    }
}