import React,{useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';

import Choice_page from './Components/choice-page'
import login from './Components/Login'
import { UserContext } from './utils/user_context'
import { AuthContext } from './utils/auth_context';
import thank_you from './Components/thank_you';
import Dashboard from './Components/dashboard';


function App() {
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <AuthContext.Provider value={{auth, setAuth}}>
        <div className='App'>
          <Router>
            <Switch>
              <Route path="/" exact component={login}/>
              <Route path="/main/:id/:username"  component={Choice_page} />
              <Route path="/dashboard/:username" component={Dashboard}/>
              <Route path="/thank_you/:username" component={thank_you} />
            </Switch>
          </Router>
        </div>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
