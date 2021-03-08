
import './App.css';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';

import choice_page from './Components/choice-page'
import login from './Components/Login'


function App() {
  return (
    <div className='App'>
      <Router>|
        <Switch>
          <Route exact path="/" component={login}/>
          <Route path="/main" component={choice_page}/>

        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
