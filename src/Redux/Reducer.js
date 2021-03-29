const initstate = {
  user: null,
  chat: null,
};
export default function Reducer(state = initstate, action) {
  switch (action.type) {
    case "Login":
      return { ...state,user: action.payload };
    case "chatting":
      return { ...state,chat: action.payload };
    default:
      return state;
  }
}
