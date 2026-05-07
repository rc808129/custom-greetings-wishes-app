import { useEffect, useReducer } from "react";
import {
  birthdayTemplates,
  festivalTemplates,
  relationshipTemplates,
} from "../data/templates.js";

import { getUserProfile } from "../services/profileService.js";

import TemplateGrid from "../components/TemplateGrid";
import FilterButtons from "../components/FilterButtons";

const initialState = {
  loading: false,
  error: null,
  user: null,
  selectedCategory: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, user: action.payload };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };

    default:
      return state;
  }
}

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const allTemplates = [
    ...birthdayTemplates,
    ...festivalTemplates,
    ...relationshipTemplates,
  ];

  const filteredTemplates =
    state.selectedCategory == "all"
      ? allTemplates
      : allTemplates.filter(
          (template) => template.category === state.selectedCategory,
        );

  useEffect(() => {
    async function fetchUser() {
      try {
        dispatch({ type: "FETCH_START" });

        const response = await getUserProfile();

        dispatch({ type: "FETCH_SUCCESS", payload: response.user });
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
          payload: error.response?.data?.message || "Faild to fetch user",
        });
      }
    }
    fetchUser();
  }, []);

  return (
    <div
      className=" min-h-screen   bg-gradient-to-br   from-sky-100 via-blue-200  to-indigo-300   p-6
"
    >
      <FilterButtons
        selectedCategory={state.selectedCategory}
        dispatch={dispatch}
      />

      {state.loading && (
        <h1 className="text-3xl  font-bold  text-center   mt-10">Loading...</h1>
      )}

      {state.error && (
        <h1 className=" text-3xl text-red-500  font-bold  text-center   mt-10">
          {state.error}
        </h1>
      )}

      {!state.loading && !state.error && state.user && (
        <TemplateGrid templates={filteredTemplates} user={state.user} />
      )}
    </div>
  );
};

export default HomePage;
