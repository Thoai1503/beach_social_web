import { SEARCH_BEACH, UPDATE_FILTERS, FILTER_BEACH } from "../action";

const filter_reducer = (state, action) => {
  if (action.type === "GET_BEACH") {
    return {
      ...state,
      beach_data: action.payload,
      filtered_beach: action.payload,
    };
  }
  if (action.type === SEARCH_BEACH) {
    return {
      ...state,
      filtered_beach: state.beach_data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      ),
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_BEACH) {
    const { beach_data } = state;
    const { nation, continent } = state.filters;
    let tempBeaches = [...beach_data];
    if (nation !== "all") {
      tempBeaches = tempBeaches.filter((item) => item.nationid === nation);
    }
    return { ...state, filtered_beach: tempBeaches };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
