import axiosConfig from "../axiosConfig";
import React, { use, useContext, useEffect, useReducer } from "react";
import beach_state from "../state/beach_state";
import beach_reducer from "../reducer/beach_reducer";
import paginate from "../pagination";

const BeachContext = React.createContext();

export const BeachProvider = ({ children }) => {
  const [state, dispatch] = useReducer(beach_reducer, beach_state);

  const loadBeach = async (url, nation_url) => {
    dispatch({ type: "LOAD_BEACH" });
    try {
      const response = await axiosConfig.get(url);
      const nationRespone = await axiosConfig.get(nation_url);
      dispatch({
        type: "LOAD_BEACH_SUCCESS",
        payload: { beach: response.data, nation: nationRespone.data },
      });
    } catch (error) {
      dispatch({ type: "LOAD_BEACH_FAILURE", payload: error.message });
    }
  };

  useEffect(() => {
    loadBeach("/api/beach", "/api/nations");
  }, []);

  return (
    <BeachContext.Provider
      value={{
        ...state,
        loadBeach,
      }}
    >
      {children}
    </BeachContext.Provider>
  );
};

export const useBeachContext = () => {
  return useContext(BeachContext);
};
