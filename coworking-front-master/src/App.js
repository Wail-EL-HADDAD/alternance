import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";import SearchNav from './Components/SearchNav'
import DisplayCoworKers from './Components/DisplayCoworKers';
function App() {

  
  return (
    <Router>
    <div className="App">
    </div>
    <Switch>
    <Route path='/Coworkers'>
          <DisplayCoworKers/>
      </Route>
    <Route path='/'>
          <SearchNav/>
      </Route>
     
    </Switch>
    </Router>
  );
}

export default App;