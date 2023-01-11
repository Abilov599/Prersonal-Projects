let initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const universityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_UNIVERSITY_START":
      return { ...state, loading: true };
    case "GET_UNIVERSITY_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_UNIVERSITY_FAILED":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
