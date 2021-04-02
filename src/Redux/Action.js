import axios from "axios";

export function LoginNow({ Email, Password }) {
  return function (dispatch) {
    return axios
      .post("http://192.168.0.96:401/bwccrm/login", {
        email: Email,
        password: Password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({
          type: "Login",
          payload: res.data,
        });
      });
  };
}
export function Userid(user_id) {
  return function (dispatch) {
    dispatch({
      type: "chatting",
      payload: user_id,
    });
  };
}
export function Auth(auth) {
  return function (dispatch) {
    dispatch({
      type: "Auth",
      payload: auth,
    });
  };
}
export function groupChat(group) {
  return function (dispatch) {
    dispatch({
      type: "groupChat",
      payload: group,
    });
  };
}
