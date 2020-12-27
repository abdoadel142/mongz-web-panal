import React, { Component } from 'react';
import axios from "axios";
class Login extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      handleSubmit(event) {
axios.put("http://192.168.1.4:8080/auth/signup",{
  email:this.state.email,
  password:this.state.password,
  
}).then(function (response){
  console.log(response);
}).catch(err=>{
  console.log(err);
});
      }


    render() { 
        return ( 
            <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-inner">
          <h2>Login</h2>
        
        
        <div className="form-group">
        <label htmlFor="email">Enter Email</label>
          <input
          id="email"

            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="password">Enter Password</label>
        <input
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        value={this.state.password}
        onChange={this.handleChange}
        required
        />
        </div>
          <input type="submit" value="Login" />
          </div>
        </form>
      </div>
         );
    }
}
 
export default Login;