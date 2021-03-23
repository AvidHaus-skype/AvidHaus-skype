import axios from 'axios'

export function LoginNow({Email,Password}) {
    return function(dispatch) {
        return axios.post('http://192.168.0.96:401/bwccrm/login',{
            email:Email,
            password:Password
        }).then(res => {
            console.log(res.data)
        });
    };
}