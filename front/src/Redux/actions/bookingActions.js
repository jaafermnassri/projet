import axios from "axios";
import { useSelector } from "react-redux";
import {NEW_BOOKING_SUCCESS,NEW_BOOKING_FAIL,GET_BOOKING_SUCCESS,GET_BOOKING_FAIL,GET_BOOKING_LOADING} from "../consts/bookingConsts"


//create a booking
export const addBook = (id,newBook,navigate) => async (dispatch) => {
  
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:5005/api/bookings/${id}`,
        newBook,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch({ type: NEW_BOOKING_SUCCESS, payload: res.data });
    //   dispatch(getAllFoyers());
    alert("Booked Successfully")
      navigate(`/`);
    } catch (error) {
      dispatch({ type: NEW_BOOKING_FAIL, payload: error });
      console.dir(error);
      alert(error.response.data.msg);
    }
  }


  // get all bookings 
  export const getAllBookings = () => async (dispatch) => {
    dispatch({ type: GET_BOOKING_LOADING });
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:5005/api/bookings/`,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // const res = await axios.get("http://localhost:5005/api/bookings/");
      dispatch({ type: GET_BOOKING_SUCCESS, payload: res.data });
      
    } catch (error) {
      dispatch({ type: GET_BOOKING_FAIL, payload: error });
    }
  };