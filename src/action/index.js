import API from "../axios/api";

export const ambilDataPost = () => async (dispatch) => {
   const data = await API.get("/posts");

   dispatch({
      type: "AMBIL_POST",
      data: data,
   });
};
