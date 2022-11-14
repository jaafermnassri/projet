import {
  GET_ALL_FOYERS_LOADING,
  GET_ALL_FOYERS_SUCCESS,
  GET_ALL_FOYERS_FAIL,
  DELETE_FOYER_FAIL,
  DELETE_FOYER_SUCCESS,
  DETAIL_FOYER_FAIL,
  DETAIL_FOYER_SUCCESS,
  ADD_FOYER_SUCCESS,
  ADD_FOYER_FAIL,
  EDIT_FOYER_SUCCESS,
  EDIT_FOYER_FAIL,
} from "../consts/foyerConsts";
import axios from "axios";

export const getAllFoyers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_FOYERS_LOADING });
  try {
    const res = await axios.get("http://localhost:5005/api/foyers/");
    dispatch({ type: GET_ALL_FOYERS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_FOYERS_FAIL, payload: error });
  }
};
export const deleteFoyer = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:5005/api/foyers/${id}`);
    dispatch({ type: DELETE_FOYER_SUCCESS, payload: res.data });
    dispatch(getAllFoyers());
  } catch (error) {
    dispatch({ type: DELETE_FOYER_FAIL, payload: error });
  }
};
// export const detailsFOYER = (id) => async (dispatch) => {
// try {
//   const res = await axios.get(`http://localhost:5000/api/FOYERs/${id}`);
//    dispatch({ type: DETAIL_FOYER_SUCCESS, payload: res.data });
  
// } catch (error) {
//   dispatch({ type: DETAIL_FOYER_FAIL, payload: error });
//   console.log(error)
// }}
export const addFoyer = (newFoyer,navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.post(
      `http://localhost:5005/api/foyers/add`,
      newFoyer,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    dispatch({ type: ADD_FOYER_SUCCESS, payload: res.data });
    dispatch(getAllFoyers());
    navigate("/");
  } catch (error) {
    dispatch({ type: ADD_FOYER_FAIL, payload: error });
    console.dir(error);
    alert(error.response.data.msg);
  }
}
export const editFOYER = (id,editedFoyer, navigate) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5005/api/foyers/${id}`,
      editedFoyer
    );
    dispatch({ type: EDIT_FOYER_SUCCESS, payload: res.data });
    dispatch(getAllFoyers());
    navigate("/");
  } catch (error) {
    dispatch({ type: EDIT_FOYER_FAIL, payload: error });
    console.log(error);
  }
};
