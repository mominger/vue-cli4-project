import axios from "axios";

export const getByThridparty = params =>
  axios.get(`/v1/metadata/user/getByThridparty`, {
    params
  });
