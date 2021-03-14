import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../utils/user_context"
import { AuthContext } from "../utils/auth_context"
import {useHistory} from 'react-router-dom'





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
                history.push(('/main/' + result.id + '/' + (username)))
            }
        })
    }

    return (
        <div>
            <p>Enter your username here</p>
            <input className="text_input" type="text" onChange={e => setusername(e.target.value)}/>
            <p>Enter password here</p>
            <input  className="text_input" type="text" onChange={e => setpassword(e.target.value)}/>
            <div>
                <button className='button' onClick={ () => {login_click()}}>Login</button>
                <button className='button' onClick={ () => {history.push('/register')}}>Register</button>
            </div>
        </div>
    )
}

export default Login