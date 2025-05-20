import React, { useEffect, useReducer, useState } from "react";
import beach_state from "../state/beach_state";
import filter_reducer from "../reducer/filter_reducer";
import filter_state from "../state/filter_state";
import { useBeachContext } from "./beach_context";
import paginate from "../pagination";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [state, dispatch] = useReducer(filter_reducer, filter_state);
  const { beach_data } = useBeachContext();

  const handlePageChange = (index) => {
    setPage(index);
  };
  const handleNextPage = () => {
    if (page < beach_data.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };
  const handlePrevPage = () => {
    console.log("Change Page");
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value, name);
    if (name === "nation") {
      value = e.target.value;
    }
    if (name === "continent") {
      value = e.target.target.value;
    }

    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const getBeach = (beach) => {
    dispatch({ type: "GET_BEACH", payload: beach });
  };

  const searchBeach = (e) => {
    e.preventDefault();
    setPage(0);
    const name = e.target.value;
    dispatch({ type: "SEARCH_BEACH", payload: name });
  };

  useEffect(() => {
    getBeach(beach_data);
  }, [beach_data]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        searchBeach,
        handleNextPage,
        handlePageChange,
        handlePrevPage,
        updateFilters,
        page,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return React.useContext(FilterContext);
};
