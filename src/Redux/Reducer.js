const initstate={
    user:'',
    chat:''
}
export default function Reducer(state=initstate,action){
    switch(action.type){
        case 'Login':
            return {user:action.payload}
        case 'chatting':
            return {chat:action.payload}
            default : 
                return state
    }
}
 