import axios from "axios";
import { DETAIL_USER_SUCCESS,DETAIL_USER_FAIL,GET_ALL_USERS_SUCCESS,GET_ALL_USERS_FAIL,GET_ALL_USERS_LOADING,DELETE_USER_SUCCESS,DELETE_USER_FAIL,EDIT_USER_SUCCESS,EDIT_USER_FAIL,GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTRE_FAIL, REGISTRE_SUCCESS } from "../consts/userConsts";

//REGISTER
export const register = (newUser,navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5005/api/users/register`,
      newUser
    );
    dispatch({ type: REGISTRE_SUCCESS, payload: res.data });
    navigate("/login");
  } catch (error) {
    dispatch({ type: REGISTRE_FAIL, payload: error });
    console.log(error);
  }
};

//LOGIN
export const login = (user, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:5005/api/users/login`,
      user
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    navigate("/");
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
    console.log(error);
  }
};

//GET CURRENT USER
export const getCurrentUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(`http://localhost:5005/api/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: res.data });
   
  } catch (error) {
    dispatch({ type: GET_CURRENT_USER_FAIL, payload: error });
    console.log(error);
  }
}
//GET ALL USERS
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_LOADING });
  try {
    const res = await axios.get("http://localhost:5005/api/users/");
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL, payload: error });
  }
};
//USER DETAILS
export const detailsUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5005/api/users/${id}`);
     dispatch({ type: DETAIL_USER_SUCCESS, payload: res.data });
    
  } catch (error) {
    dispatch({ type: DETAIL_USER_FAIL, payload: error });
    console.log(error)
  }}
//DELETE USER
export const deleteUser = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.delete(`http://localhost:5005/api/users/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
    dispatch(getAllUsers());
    
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error });
  }
};
//UPDATE
export const editUser = (id,editedUser, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.put(
      `http://localhost:5005/api/users/${id}`,
      editedUser,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
    dispatch(getCurrentUser());
    
  } catch (error) {
    dispatch({ type: EDIT_USER_FAIL, payload: error });
    console.log(error);
  }
};

export const logout = () => {
  
  return { type:LOGOUT}
}