import axios from "axios"
import { useState, useContext } from "react"
import { useHistory } from "react-router"

import { UserContext } from "../utils/user_context"
import { AuthContext } from "../utils/auth_context"


function Register () {
    const [username, setUsername] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [password_confirmation, setPassword_confirmation] = useState(" ")
    const [errmsg,setErrmsg] = useState(" ")

    const {user, setUser} = useContext(UserContext)
    const {auth, setAuth} = useContext(AuthContext)
    
    const history = useHistory()

    function login(){
        axios.post('http://3.20.232.9:4000/users/login', {username: username , password: password})
        .then(res => {
            const result = res.data;
            if (result.auth === true) {
                setUser(result.id);
                setAuth(true);
                history.push(('/main/' + result.id + '/' + (username)))
            }
        })
    }

    function register_click(){
        if (password === password_confirmation){
        axios.post('http://3.20.232.9:4000/users/register', {username: username, password: password})
        .then(res => {
            login()
        })
    } else {
        setErrmsg("Your password entries don't match!")
    }

    }


return (

<div>
            <p>Enter your username here</p>
            <input className="text_input" type="text" onChange={e => setUsername(e.target.value)}/>
            <p>Enter password here</p>
            <input  className="text_input" type="password" onChange={e => setPassword(e.target.value)}/>
            <p>Please re-enter your password</p>
            <input className="text_input" type="password" onChange={e => setPassword_confirmation(e.target.value)}/>
            <div className='login_spacer'>
            <button className='button' onClick={ () => {register_click()}}>Register Now</button>
            </div>
            <p className="errmsg">{errmsg}</p>
</div>)

}





export default Register