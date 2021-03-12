import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../utils/user_context"
import {useHistory} from 'react-router-dom'
import { AuthContext } from "../utils/auth_context"




function Login () {
    const [username, setusername] = useState("testu")
    const [password, setpassword] = useState("testp")
    const {user, setUser} = useContext(UserContext)
    const {auth, setAuth} = useContext(AuthContext)
    
    const history = useHistory();

    function login_click(){
        axios.post('http://localhost:5000/users/login', {username: username , password: password})
        .then(res => {
            const result = res.data;
            if (result.auth === true) {
                setUser(result.id);
                setAuth(true);
                history.push(('/main/' + String(result.id)))
            }
        })
    }

    function register_click(){
        axios.post('http://localhost:5000/users/register', {username: username, password: password})
        .then(res => {
            console.log(res.data)
        })

    }

    return (
        <div>
            <p>Enter your username here</p>
            <input id="username" type="text" onChange={e => setusername(e.target.value)}/>
            <p>Enter password here</p>
            <input  id="passord" type="text" onChange={e => setpassword(e.target.value)}/>
            <div>
                <button className='login' onClick={ () => {login_click()}}>Login</button>
                <button className='Register' onClick={ () => {register_click()}}>Register</button>
            </div>
        </div>
    )
}

export default Login