import axios from 'axios'

export function LoginNow({Email,Password}) {
    return function(dispatch) {
        return axios.post('http://192.168.0.96:401/bwccrm/login',{
            email:Email,
            password:Password
        }).then(res => {
            // console.log(res.data)
            dispatch({
                type:'Login',
                payload: res.data
            })
        });
    };
}
export function Userid(user_id){
    return function(dispatch){
        // const {contacts}={userid}
        dispatch({
            type:'chatting',
            payload: user_id
          })
    }
}