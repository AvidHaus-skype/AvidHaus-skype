const initstate = {
  user: null,
  chat: null,
  Auth: null,
  groupChat: null,
  userSearch: null,
  searchData: null,
  searchedUser: null,
  messages: null,
};
export default function Reducer(state = initstate, action) {
  switch (action.type) {
    case "Login":
      return { ...state, user: action.payload };
    case "chatting":
      return { ...state, chat: action.payload };
    case "Auth":
      return { ...state, Auth: action.payload };
    case "groupChat":
      return { ...state, groupChat: action.payload };
    case "userSearch":
      return { ...state, userSearch: action.payload };
    case "searchData":
      return { ...state, searchData: action.payload };
    case "messages":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
}
