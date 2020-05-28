import API from "../axios/api";

export const ambilDataPost = () => async (dispatch) => {
   const data = await API.get("/posts");

   dispatch({
      type: "AMBIL_POST",
      data: data,
   });
};

export const ambilUser = (id) => async (dispatch) => {
   const response = await API.get(`/users/${id}`);

   dispatch({
      type: "AMBIL_USER",
      data: response.data,
   });
};

export const ambilPostdanUser = () => async (dispatch, getState) => {
   await dispatch(ambilDataPost());

   var setPost = new Set(getState().listPost.data.map((post) => post.userId)); //nama hasus sama dengan index reducer
   var idUser = Array.from(setPost); //merubah set ke bentuk aray untuk dilakukan pengulangan dengan foreach

   idUser.forEach((id) => dispatch(ambilUser(id)));
};

export const ambilDetailPost = (idpost) => async (dispatch, getState) => {
   const response = await API.get(`posts/${idpost}`);

   dispatch({
      type: "DETAIL_POST",
      data: response.data,
   });

   await dispatch(ambilUser(response.data.userId));
   console.log(getState())
};
