import React, { Component } from 'react';
import firebase from './firebase';
class LoginForm extends Component {
    state={
        account:{username:"",password:""}
        
    };
    

    handleChange=e=>{
        this.setState({ [e.target.name]: e.target.value});
    };
    constructor(props) {
        super(props)
        this.handleOnclick = this.handleOnclick.bind(this);
    };
    handleOnclick=(e) =>{
        e.preventDefault();
        const { username, password } = this.state;
        firebase
     .auth()
     .signInWithEmailAndPassword(username, password)
     .then((user) =>{
        var path = "/movies";
        this.props.history.push(path);
     })
     .catch((error) => {
         window.alert("Invalid User");
        this.setState({ error: error });
      });
      };

    render() { 
        const { username, password } = this.state;
        return (
         <div>
           <h1>Login</h1>
           <form >
                  <div >
                     <div className="form-group"> </div>
                     <lable htmlFor="username">UserName</lable>
                      <input type="email" className="form-control"
                      name="username"
                       value={username} 
                       onChange={this.handleChange}
                       id="username"  placeholder="Enter email"/>
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        
              </div>
              <div>
                  <div className="form-group"> </div>
                      <lable htmlFor="password">Password</lable>
                      <input type="password" className="form-control" id="password" placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      />
                  </div>
              
             
          <div class="form-group form-check"> </div>
        
              <div>
              <button type="login" onClick={this.handleOnclick} className="btn btn-primary" >Sign In</button>
              
                  </div>
                  <div class="form-group form-check"> </div>
        
        <div>
        <a href="http://localhost:3000/register" class="badge badge-primary">Register here</a>
        
            </div>
                 
          </form>
      
         </div>
        );
    };
}

 
export default LoginForm;