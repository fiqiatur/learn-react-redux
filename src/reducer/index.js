import { combineReducers } from "redux";

const listPostReducer = (list = [], action) => {
   if (action.type === "AMBIL_POST") {
      return action.data;
   }
   return list;
};

const ambilUserReducer = (users = [], action) => {
   if (action.type === "AMBIL_USER") {
      return [...users, action.data];
   }
   return users;
};
const ambilDetailPostReducer = (post = null, action) => {
   if (action.type === "DETAIL_POST") {
      return action.data;
   }
   return post;
};
export default combineReducers({
   listPost: listPostReducer,
   Users: ambilUserReducer,
   DetailPost: ambilDetailPostReducer,
});
