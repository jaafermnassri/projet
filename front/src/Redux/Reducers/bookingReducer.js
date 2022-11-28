import {NEW_BOOKING_SUCCESS,NEW_BOOKING_FAIL,GET_BOOKING_LOADING,GET_BOOKING_SUCCESS,GET_BOOKING_FAIL} from "../consts/bookingConsts"
const initialstate = {
    loading: false,
    bookings: [],
    oneBook: {},
    errors: null,
  };
  export const bookingReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_BOOKING_LOADING:
        return { ...state, loading: true };
  
      case GET_BOOKING_SUCCESS:
        return {
          ...state,
          bookings: payload,
          loading: false,
        };
      case GET_BOOKING_FAIL:
        return { ...state, errors: payload, loading: false };
    //   case DELETE_FOYER_FAIL:
    //     return { ...state, errors: payload, loading: false };
  
      case NEW_BOOKING_SUCCESS:
        return { ...state, oneFoyer: payload, loading: false };
  
      case NEW_BOOKING_FAIL:
        return { ...state, errors: payload, loading: false };
      
  
      default:
        return state;
    }
  };
  