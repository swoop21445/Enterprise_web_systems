import { useState, useContext } from "react"
import axios from "axios"
import { Use_users, Use_users_update } from "../utils/user_context"


function Login () {
    const [username, setusername] = useState("testu")
    const [password, setpassword] = useState("testp")
    const user = Use_users()
    const user_update = Use_users_update()
    
    function login_click(){
        axios.post('http://localhost:5000/users/login', {username: username , password: password})
        .then(res => {
            console.log(res.data)
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
            <p>{user}</p>
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