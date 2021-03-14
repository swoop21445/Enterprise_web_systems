import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../utils/user_context"
import { AuthContext } from "../utils/auth_context"
import {useHistory} from 'react-router-dom'





function Login () {
    const [username, setusername] = useState(" ")
    const [password, setpassword] = useState(" ")
    const [errmsg,setErrmsg] = useState(" ")
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
            } else {
                setErrmsg("Username or Password Incorrect!")
            }
        })
        .catch(res => setErrmsg("Username or Password Incorrect! Have you registered your account?"))
    }

    return (
        <div>
            <h1>Track Picker</h1>
            <p>Enter your username here</p>
            <input className="text_input" type="text" onChange={e => setusername(e.target.value)}/>
            <p>Enter password here</p>
            <input  className="text_input" type="password" onChange={e => setpassword(e.target.value)}/>
            <div className='login_spacer'>
                <button className='button' onClick={ () => {login_click()}}>Login</button>
            </div>
            <p className="errmsg">{errmsg}</p>
            <div>
                <p>Never logged in before?</p>
                <p>Start here!</p>
                <button className='button' onClick={ () => {history.push('/register')}}>Register</button>
            </div>
        </div>
    )
}

export default Login