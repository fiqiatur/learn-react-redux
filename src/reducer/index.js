import { combineReducers } from "redux";

const listPostReducer = (list = [], action) => {
   if (action.type === "AMBIL_POST") {
      return action.data;
   }
   return list;
};

export default combineReducers({
   listPost: listPostReducer,
});
