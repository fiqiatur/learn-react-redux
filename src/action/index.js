import API from "../axios/api";

export const ambilDataPost = async () => {
   const data = await API.get("/posts");

   return {
      type: "AMBIL_POST",
      data: data,
   };
};
