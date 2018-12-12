import React, { Component } from 'react';
import firebase from './firebase';
class Register extends Component {
    state={
        account:{username:"",password:"",error:null}
        
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
     .createUserWithEmailAndPassword(username, password)
     .then((user) =>{
         window.alert("Registred Successfully");
        var path = "/logInForm";
        this.props.history.push(path);  
     })
     .catch((error) => {
        this.setState({ error: error });
      });
      };
    render() { 
        const { username, password } = this.state;
        return ( 
                  
       <div>
       <h1>Registration</h1>
       <form>
       <div class="form-row"></div>
       <div class="form-group col-md-6"></div>
              <lable htmlFor="Firstname">First Name</lable>
                  <input type="Firstname" className="form-control" id="fname" placeholder="First Name"/>
                  <lable htmlFor="Lastname">last Name</lable>
                  <input type="Lastname" className="form-control" id="lname" placeholder="last Name"/>
        
              <div >
                 <div className="form-group"> </div>
                 <lable htmlFor="username">Email ID</lable>
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
                   onChange={this.handleChange}/>
              </div>
          
         
      <div class="form-group form-check"> </div>
    
          <div>
          <button type="login" className="btn btn-primary" onClick={this.handleOnclick}>Submit</button>
          
              </div>
              <div class="form-group form-check"> </div>
    
    <div>
    <a href="http://localhost:3000/logInForm" class="badge badge-primary">Login here</a>
    
        </div>
             
      </form>
  
</div>
         );
    }
}
 
export default Register;