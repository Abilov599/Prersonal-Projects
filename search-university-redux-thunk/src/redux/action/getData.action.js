import axios from "axios";

// export const getAllUniversitiesAction = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: "GET_UNIVERSITY_START",
//     });

//     try {
//       let response = await axios(
//         "http://universities.hipolabs.com/search?name="
//       );
//       dispatch({
//         type: "GET_UNIVERSITY_SUCCESS",
//         payload: response.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: "GET_CUSTOMER_FAILED",
//         payload: error,
//       });
//     }
//   };
// };
export const getAllUniversitiesByNameAction = (value) => {
  return async (dispatch) => {
    dispatch({
      type: "GET_UNIVERSITY_START",
    });

    try {
      let response = await axios(
        `http://universities.hipolabs.com/search?name=${value}`
      );
      dispatch({
        type: "GET_UNIVERSITY_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_CUSTOMER_FAILED",
        payload: error,
      });
    }
  };
};
