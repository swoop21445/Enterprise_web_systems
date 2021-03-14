import React,{useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import { UserContext } from './utils/user_context';
import { AuthContext } from './utils/auth_context';

import Choice_page from './Components/choice-page';
import login from './Components/Login';
import register from './Components/register';
import thank_you from './Components/thank_you';
import Dashboard from './Components/dashboard';


function App() {
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <AuthContext.Provider value={{auth, setAuth}}>
        <div className='App'>
          <div className='header_area'></div>
            <div className='smaller_header_area'></div>
              <Router>
                <Switch>
                  <Route path="/" exact component={login}/>
                  <Route path="/register" component={register}/>
                  <Route path="/main/:id/:username"  component={Choice_page} />
                  <Route path="/dashboard/:username" component={Dashboard}/>
                  <Route path="/thank_you" component={thank_you} />
                </Switch>
              </Router>
        </div>
      </AuthContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
