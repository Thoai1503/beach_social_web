import {
  LOAD_BEACH,
  LOAD_BEACH_SUCCESS,
  LOAD_BEACH_FAILURE,
  LOAD_SINGLE_BEACH,
  LOAD_SINGLE_BEACH_SUCCESS,
  LOAD_SINGLE_BEACH_FAILURE,
} from "../action";

const beach_reducer = (state, action) => {
  if (action.type === LOAD_BEACH) {
    return { ...state, beach_loading: true };
  }
  if (action.type === LOAD_BEACH_SUCCESS) {
    return {
      ...state,
      beach_loading: false,
      nation: action.payload.nation,
      beach_data: action.payload.beach,
      filter_beach: action.payload.beach,
    };
  }
  if (action.type === LOAD_BEACH_FAILURE) {
    return { ...state, beach_loading: false, beach_error: true };
  }
  if (action.type === LOAD_SINGLE_BEACH) {
    return { ...state, single_beach_loading: true };
  }
  if (action.type === LOAD_SINGLE_BEACH_SUCCESS) {
    return {
      ...state,
      single_beach: action.payload.beach,
      single_beach_loading: false,
    };
  }
  if (action.type === LOAD_SINGLE_BEACH_FAILURE) {
    return {
      ...state,
      single_beach_loading: false,
      single_beach_error: action.payload,
    };
  }
};

export default beach_reducer;
