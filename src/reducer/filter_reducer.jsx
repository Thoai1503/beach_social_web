import { SEARCH_BEACH, UPDATE_FILTERS } from "../action";

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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
