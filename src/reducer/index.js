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

export default combineReducers({
   listPost: listPostReducer,
   Users: ambilUserReducer,
});
