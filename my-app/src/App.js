
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth/index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './components/Layout';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/auth';

const App = () => {
const dispatch = useDispatch();
useEffect(() => {
  dispatch(loadUser());
  console.log(localStorage.token, 'my token')
}, [])
const user = useSelector(state => state.auth.isAuthenticated)
  return (
    <div className="App">
      {!user ? <Auth /> : (
      <div> 
        <Layout /> 
        
        
        </div> )
    }
      
    </div>
  );
}

export default App;
