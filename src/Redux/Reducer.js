const initstate = {
  user: null,
  chat: null,
  Auth: null
};
export default function Reducer(state = initstate, action) {
  switch (action.type) {
    case "Login":
      return { ...state,user: action.payload };
    case "chatting":
      return { ...state,chat: action.payload };
    case 'Auth':
      return {...state,Auth: action.payload} 
    case 'Auth':
      return {...state,Auth: action.payload}      
       default:
          return state;
  }
}
