import session from "./session";

const mutations = {
  SET_TOKEN(state, obj) {
    state.token = obj.token;
    session.setItem("token", obj.token);
  }
};

export default mutations;
