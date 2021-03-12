import React,{useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route , Switch, Redirect} from 'react-router-dom';

import choice_page from './Components/choice-page'
import login from './Components/Login'
import {UserContext} from './utils/user_context'
import { AuthContext } from './utils/auth_context';


function App() {
  const [user, setUser] = useState("");
  const [auth,setAuth] = useState(false)

  return (
    <UserContext.Provider value={{user , setUser}}>
      <AuthContext.Provider value={{auth,setAuth}}>
        <div className='App'>
          <Router>|
            <Switch>
              <Route exact path="/" component={login}/>
              <Route path="/main"  component={choice_page} />
            </Switch>
          
          </Router>
        </div>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
