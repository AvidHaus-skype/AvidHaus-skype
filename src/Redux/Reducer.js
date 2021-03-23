const initstate={
    user:''
}
export default function Reducer(state=initstate,action){
    switch(action.type){
        case 'Login':
            return {user:action.payload}
            default : 
                return state
    }
}
 