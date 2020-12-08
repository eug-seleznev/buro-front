
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

//pages
import Admin from './components/Adminka/Index';
import DataBase from './components/DataBase';
import Projects from './components/Projects';
import Office from './components/Office';
import Users from './components/User';
import Dashboard from './components/Adminka/dashboard';
import MyProfile from './components/User/me';
import Employe from './components/User/Employe';
import Ticket from './components/Adminka/Ticket';
import ProjectNew from './components/Projects/newProject';







const App = () => {
  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth.isAuthenticated)
  //chek auth token on render
  useEffect(() => {
    dispatch(loadUser());
    console.log(localStorage.token) //for postman tests
  }, [])



  return (
    <div className="App">
      {!auth ? <Auth /> : (
      <Router> 
        <Layout /> 
        <Switch>
          {/* сисадминошная */}
          <Route exact path="/admin" component={ Admin } />
          <Route exact path="/admin/all" component={ Dashboard } />
          <Route exact path="/admin/:id" component={Ticket} />



          <Route exact path="/db" component={ DataBase } />
          <Route exact path="/office" component={ Office } />
          {/* projects */}
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/new" component={ ProjectNew } /> 

          {/* users */}
          <Route exact path="/users" component={ Users } /> 
          <Route exact path="/users/me" component={ MyProfile } />
          <Route exact path="/users/:id" component={ Employe } />





        </Switch>
        
        </Router> )
    }
      
    </div>
  );
}

export default App;
