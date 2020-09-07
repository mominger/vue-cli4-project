import session from "./session";

const TOKEN = session.getItem("token") || "";

const state = {
  // token
  token: TOKEN
};

export default state;
