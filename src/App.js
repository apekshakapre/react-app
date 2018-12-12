import React, { Component } from 'react';
import Movies from './components/movies';
import {Route ,Switch} from 'react-router-dom';
import LoginForm from './components/logInForm';
import Register from './components/register';
import NavBar from './components/navBar';
import LogOut from './components/logOut'
import './App.css';


class App extends Component {
  render() {
    return (
     
      <React.Fragment>
      <NavBar/>
      
      <main className="container">
      <Switch>
       <Route path ="/movies" component={Movies}/>
       <Route path ="/logInForm" component={LoginForm}/>
       <Route path ="/register" component={Register}/>
       <Route path ="/navBar" component={NavBar}/>
       <Route path ="/logOut" component={LogOut}/>
       </Switch>
        </main>
        </React.Fragment>
    );
  }
}

export default App;
