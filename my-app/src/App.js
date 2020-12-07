
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Layout from './components/Layout';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/auth';
import Admin from './components/Adminka/Index';

const App = () => {
const dispatch = useDispatch();

const user = useSelector(state => state.auth.isAuthenticated)
//chek auth token on render
useEffect(() => {
  dispatch(loadUser());
  console.log(localStorage.token, 'my token')
}, [])



  return (
    <div className="App">
      {!user ? <Auth /> : (
      <Router> 
        <Layout /> 
        <Switch>
          <Route exact path="/admin" component={ Admin } />
          <Route exact path="/db" component={ null } />
          <Route exact path="/projects" component={ null } />
          <Route exact path="/office" component={ null } />
          {/* new project */}
          <Route exact path="/new" component={ null } /> 





        </Switch>
        
        </Router> )
    }
      
    </div>
  );
}

export default App;
