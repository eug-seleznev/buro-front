
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
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
import Edit from './components/User/edit';
import Ticket from './components/Adminka/Ticket';
import ProjectNew from './components/Projects/newProject';
import Project from './components/Projects/Project';
import Sprint from './components/Projects/Sprint';
import ProjectsEdit from './components/Projects/ProjectsEdit';
import OneProjEdit from './components/Projects/OneProjEdit';
import Main from './components/Main/index'
import Permissions from './components/Superadmin/permissions';
import Superadmin from './components/Superadmin/index.js';
import { createBrowserHistory } from "history";
import MyProjects from './components/Projects/My';
import News from './components/Superadmin/newsAdm';





const App = () => {
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const [load, setLoad] = useState(false)
  const auth = useSelector(state => state.auth.isAuthenticated)
  const loaded = useSelector(state => state.auth.loaded)

  //chek auth token on render
  useEffect(() => {
    dispatch(loadUser());
    console.log('dispatch my action!')
    // setTimeout(() => {
    //   setLoad(true)
    // }, 100)
    console.log(localStorage.token) //for postman tests
  }, [loaded])



  return (
    <div className="App">
      {!auth ? <Auth /> : (
      <Router history={history}> 
        
        <Layout /> 
        <Switch>

          {/* main */}
          <Route exact path="/" component={ Main } />
          

          
          {/* сисадминошная */}
          <Route exact path="/help" component={ Admin } />
          <Route exact path="/tickets" component={ Dashboard } />
          <Route exact path="/tickets/:id" component={Ticket} />



          <Route exact path="/db" component={ DataBase } />
          <Route exact path="/office" component={ Office } />
          {/* projects */}
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/projects/my" component={ MyProjects } />

          <Route exact path="/projects/:id" component={ Project } />
          <Route exact path="/projects/:id/:id" component={ Sprint } />
          <Route exact path="/admin/editproj" component={ ProjectsEdit } />
          <Route exact path="/admin/editproj/:id" component={ OneProjEdit } />
          <Route exact path="/new" component={ ProjectNew } /> 

          {/* users */}
          <Route exact path="/users" component={ Users } /> 
          <Route exact path="/users/me" component={ MyProfile } />
          <Route exact path="/users/:id" component={ Employe } />
          <Route exact path="/edit"component={ Edit } />
          {/*adminka */}
          <Route exact path="/admin" component={ Superadmin } /> 
          <Route exact path="/admin/permissions" component={ Permissions } />
          <Route exact path="/admin/news" component={ News } />
          


        </Switch>
     



        </Router> )
    }
      
    </div>
  );
}

export default App;
